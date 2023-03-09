<template>
  <v-row>
    <v-spacer />
    <v-col :cols="$vuetify.display.mobile ? 12 : 6">
      <v-card class="quote text-white text-h6 mb-5 mx-5 px-5 pt-5 pb-5 font-weight-regular" v-if="quote">
        <p class="text-h6 font-weight-regular mb-4">
          {{ quote.q }}
        </p>
        <h4 class="subheading float-right">
          {{ quote.author }}
        </h4>
      </v-card>
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
        }, 0)
      }, INTERVAL_TIME)
   }
  }
}
</script>

<style>
#app .quote {
  background: rgb(var(--v-theme-secondary)); background: rgba(var(--v-theme-secondary), 0.8);
  position: fixed;
  bottom: 0;
  right: 0;
  border-radius: 10px;
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 2s; /* Firefox < 16 */
  -ms-animation: fadein 2s; /* Internet Explorer */
  -o-animation: fadein 2s; /* Opera < 12.1 */
  animation: fadein 2s;
}
@keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}
</style>
