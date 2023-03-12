<template>
  <v-row justify="end" align="end">
    <v-col :cols="$vuetify.display.mobile ? 12 : 4">
      <v-expand-transition appear>
        <div v-if="quote">
          <v-card
            class="quote text-overlay mb-5 mx-5 px-5 pt-5 pb-5 font-weight-regular rounded"
          >
            <p class="font-weight-medium mb-4" align="left">
              {{ quote.q }}
            </p>
            <h4 class="subheading float-right">
              {{ quote.author }}
            </h4>
          </v-card>
        </div>
      </v-expand-transition>
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
    if (this.oldQ?.author == q.author) {
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
        }, 1000)
      }, INTERVAL_TIME)
   }
  }
}
</script>

<style>
#app .quote {
  background: rgb(var(--v-theme-secondary)); background: rgba(var(--v-theme-secondary), 0.8);
}
</style>
