import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { fa } from 'vuetify/iconsets/fa4'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { en } from 'vuetify/locale'

export default createVuetify({
  components,
  directives,
  // Icon Fonts
  // https://next.vuetifyjs.com/en/features/icon-fonts/
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi, fa }
  },
  // Internationalization (i18n)
  // https://next.vuetifyjs.com/en/features/internationalization/#internationalization-i18n
  locale: {
    locale: 'en',
    fallback: 'en',
    messages: { en }
  },
  // Theme
  // https://next.vuetifyjs.com/en/features/theme/
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        primary: '#3478F6',
        secondary: '#d3e4dc',
        error: '#f44336',
        info: '#2196f3',
        success: '#319828',
        warning: '#ff9900',
        overlay: '#505670'
      }
    }
  }
})