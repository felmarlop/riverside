<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!---->
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon color="white" @click="drawer = !drawer" />

      <v-toolbar-title>navasecreta</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <img alt="Vue logo" src="./assets/logo.png" />
      <HelloWorld msg="navasecreta" />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => ({ drawer: null })
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
