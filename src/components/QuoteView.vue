<template>
  <v-row justify="end" align="end">
    <v-col :cols="$vuetify.display.mobile ? 12 : 4">
      <v-expand-transition appear>
        <div v-if="quote">
          <v-card
            class="quote text-body-1 text-secondary mb-5 mx-5 px-5 pt-5 pb-5 font-weight-light rounded"
          >
            <p class="font-weight-light mb-4" align="left">
              {{ quote.q }}
            </p>
            <h4 class="subheading" align="right">
              {{ quote.author }}
            </h4>
          </v-card>
        </div>
      </v-expand-transition>
    </v-col>
  </v-row>
</template>

<script>
import { random } from 'lodash'

import { QUOTES } from '@/core/config'

export default {
  name: 'QuoteView',
  data() {
    return {
      quote: null,
      qIndex: random(QUOTES.length - 1)
    }
  },
  methods: {
    setQuote() {
      if (this.qIndex == QUOTES.length - 1) {
        this.qIndex = 0
      } else {
        this.qIndex++
      }
      this.quote = QUOTES[this.qIndex]
    },
    removeQuote() {
      this.quote = null
    }
  }
}
</script>

<style>
#app .quote {
  background: rgb(var(--v-theme-primary)); background: rgba(var(--v-theme-primary), 0.8);
}
</style>
