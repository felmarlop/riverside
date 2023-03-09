<template>
  <v-container fluid class="px-0 pb-0">
    <v-parallax :src="img" height="100%" class="align-end">
      <quote-view />
    </v-parallax>
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
  data() {
    return {
      images: require.context('@/assets/img/media/', false).keys(),
      oldImg: null,
      img: null
    }
  },
  async created() {
    this.img = this.getImageUrl()
    this.setImageUrl()
  },
  methods: {
    getImageUrl() {
      const name = sample(this.images).split('/')[1]
      if (this.oldImg == name) {
        return this.getImageUrl()
      }
      this.oldImg = name
      return require(`@/assets/img/media/${name}`)
    },
    setImageUrl() {
      const context = this
      setInterval(function() {
        context.img = null
        setTimeout(function() {
          context.img = context.getImageUrl()
        }, 0)
      }, INTERVAL_TIME)
    }
  }
}
</script>

<style>
#app .v-parallax img {
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 2s; /* Firefox < 16 */
  -ms-animation: fadein 2s; /* Internet Explorer */
  -o-animation: fadein 2s; /* Opera < 12.1 */
  animation: zoom-in 60s ease infinite;
  transition: opacity 2s ease-in-out;
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
