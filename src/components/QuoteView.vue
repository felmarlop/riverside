<template>
  <v-row justify="end" align="end">
    <v-col :cols="$vuetify.display.mobile ? 12 : 4">
      <v-expand-transition appear>
        <div v-if="quote">
          <v-card
            class="quote text-body-1 text-secondary mb-5 mx-5 px-5 pt-5 pb-5 font-weight-light rounded"
          >
            <p class="font-weight-medium mb-4" align="left">
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
import { sample } from 'lodash'

import { QUOTES } from '@/core/config'

export default {
  name: 'QuoteView',
  data() {
    return {
      quote: null,
      oldQ: null
    }
  },
  methods: {
    setQuote() {
      const q = sample(QUOTES)
      if (this.oldQ?.author == q.author) {
        this.setQuote()
      }
      this.oldQ = q
      this.quote = q
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
