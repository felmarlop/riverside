<template>
  <v-app>
    <init-view v-if="loading" />
    <v-app-bar :height="$vuetify.display.mobile ? 50 : 65" color="primary" v-if="!loading">
      <v-row class="pl-5">
        <v-img :src="logoEagle" max-width="35" v-if="$vuetify.display.mobile" />
        <v-img :src="logo" max-width="350" class="logo" v-else />
      </v-row>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-layout v-if="!loading">
      <home-view />
    </v-layout>
  </v-app>
</template>

<script>
import Logo from '@/assets/img/logo.png'
import LogoEagle from '@/assets/img/logo-eagle.png'
import { LOADING_TIMEOUT } from '@/core/config'

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
    logoEagle: LogoEagle
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
#app .logo {
  border-radius: 20px;
}
</style>
