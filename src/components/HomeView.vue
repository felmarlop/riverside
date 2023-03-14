<template>
  <v-container fluid class="px-0 pb-0 pt-0">
    <v-img
      :src="img"
      :height="imgHeight"
      :max-height="imgHeight"
      class="align-end justify-end"
      cover
      @load="onImgLoad"
    >
      <template #placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular color="secondary" indeterminate />
        </div>
      </template>
      <quote-view ref="quoteView" v-show="showQuote" />
    </v-img>
  </v-container>
</template>

<script>
import { sample } from 'lodash'

import { INTERVAL_TIME } from '@/core/config'

import QuoteView from './QuoteView.vue'

export default {
  name: 'HomeView',
  components: {
    QuoteView
  },
  props: {
    showQuote: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      images: require.context('@/assets/img/media/', false).keys(),
      imgHeight: this.getImageWidth(),
      imgIndex: -1,
      img: null
    }
  },
  async created() {
    this.img = this.getImageUrl()
    this.setImageUrl()
  },
  methods: {
    getImageUrl() {
      let name = null
      if (this.imgIndex < 0) {
        name = sample(this.images)
        this.imgIndex = this.images.indexOf(name)
      } else {
        this.imgIndex = (this.imgIndex == this.images.length - 1) ? 0 : this.imgIndex + 1
        name = this.images[this.imgIndex]
      }
      return require(`@/assets/img/media/${name.split('/')[1]}`)
    },
    getImageWidth() {
      return window.innerHeight
    },
    onImgLoad() {
      const context = this
      setTimeout(function() {
        if (context.$refs?.quoteView) {
          context.$refs.quoteView.setQuote()
        }
      }, 1000)
    },
    setImageUrl() {
      const context = this
      setInterval(function() {
        context.img = null
        if (context.$refs?.quoteView) {
          context.$refs.quoteView.removeQuote()
        }
        setTimeout(function() { context.img = context.getImageUrl() })
      }, INTERVAL_TIME)
    }
  }
}
</script>

<style>
#app .v-container img {
  animation: zoom-in 60s ease infinite;
  transition: opacity .25s ease-in-out;
}
@keyframes zoom-in {
  0% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1.5, 1.5);
  }
}
</style>
