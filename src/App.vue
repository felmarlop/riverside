<template>
  <v-app>
    <v-app-bar height="110" color="overlay">
      <v-row class="pl-3">
        <v-img :src="logo" max-width="500" />
      </v-row>
    </v-app-bar>
    <v-layout>
      <home-view />
    </v-layout>
  </v-app>
</template>

<script>
import Logo from '@/assets/img/logo.png'

import HomeView from './components/HomeView.vue'

export default {
  name: 'App',
  components: {
    HomeView
  },
  data: () => ({ 
    logo: Logo
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
