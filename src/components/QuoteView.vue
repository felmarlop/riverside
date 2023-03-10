<template>
  <v-row class="justify-center">
    <v-col :cols="$vuetify.display.mobile ? 12 : 4">
      <transition>
        <v-card
          class="quote text-white mb-5 mx-5 px-5 pt-5 pb-5 font-weight-regular rounded"
          :class="{ 'text-h6': !$vuetify.display.mobile, 'filled': quote }"
          v-if="quote"
        >
          <p class="font-weight-medium mb-4">
            {{ quote.q }}
          </p>
          <h4 class="subheading float-right">
            {{ quote.author }}
          </h4>
        </v-card>
      </transition>
    </v-col>
  </v-row>
</template>

<script>
import { sample } from 'lodash'

import { INTERVAL_TIME, QUOTES } from '@/core/config'

export default {
  name: 'QuoteView',
  data() {
    return {
      quote: this.getQuote(),
      oldQ: null
    }
  },
  created() {
    this.setQuote()
  },
  methods: {
   getQuote() {
    const q = sample(QUOTES)
    if (this.oldQ?.autor == q.author) {
      return this.getQuote()
    }
    this.oldQ = q
    return q
   },
   setQuote() {
      const context = this
      setInterval(function() {
        context.quote = null
        setTimeout(function() {
          context.quote = context.getQuote()
        }, 500)
      }, INTERVAL_TIME)
   }
  }
}
</script>

<style>
#app .quote {
  position: fixed;
  bottom: 50px;
  right: 10px;
  background: rgb(var(--v-theme-secondary)); background: rgba(var(--v-theme-secondary), 0.8);
  border-radius: 10px;
}
#app .quote.v-enter-active {
  transition: right 1s ease;
}

#app .quote.v-enter-from,
#app .quote.v-leave-to {
  right: -1000px;
}
#app .quote p {
  text-align: left;
}
</style>
