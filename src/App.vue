<template>
  <v-app>
    <init-view v-if="loading" />
    <v-app-bar :height="$vuetify.display.mobile ? 55 : 75" color="primary" v-if="!loading">
      <v-row class="pl-5">
        <v-img :src="logoEagle" max-width="45" class="ml-2" v-if="$vuetify.display.mobile" />
        <v-img :src="logo" max-width="350" class="ml-2" v-else />
      </v-row>
      <v-spacer />
      <v-btn icon>
        <v-icon @click="showQuote = !showQuote">
          {{ showQuote ? 'mdi-message-bulleted' : 'mdi-message-bulleted-off' }}
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-layout v-if="!loading">
      <home-view :show-quote="showQuote" />
    </v-layout>
    <v-footer
      color="primary"
      elevation="5"
      class="font-weight-light text-overlay"
      flat
      tile
      v-if="!loading"
    >
      <v-col class="text-center" cols="12">
        <span>Galería de imágenes de Las Navas de la Concepción (Sevilla)</span>
        <br />
        <span>
          {{ title }} &copy; {{ new Date().getFullYear() }} -
          <a
            href="https://www.linkedin.com/in/f%C3%A9lix-mart%C3%ADn-866245b9/"
            class="text-overlay"
            target="_blank"
          >
            &#64; Félix Martín
          </a>
        </span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import LogoEagle from '@/assets/img/logo-eagle.png'
import Logo from '@/assets/img/logo-transparent.png'
import { APP_TITLE, LOADING_TIMEOUT } from '@/core/config'

import HomeView from './components/HomeView.vue'
import InitView from './components/InitView.vue'

export default {
  name: 'App',
  components: {
    HomeView,
    InitView
  },
  data: () => ({ 
    loading: true,
    logo: Logo,
    logoEagle: LogoEagle,
    showQuote: true,
    title: APP_TITLE
  }),
  created() {
    const context = this
    setTimeout(function() {
      context.loading = false
    }, LOADING_TIMEOUT)
  }
}
</script>

<style>
#app {
  font-family: 'System-ui', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#app .logo-rounded {
  border-radius: 0 20px 20px 0;
}
#app .mobile {
  font-size: 8px !important;
}
#app footer {
  font-size: 11px;
  max-height: 80px !important;
} 
#app footer a {
  text-decoration: none;
  font-weight: bold;
}
</style>
