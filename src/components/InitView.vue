<template>
  <v-row class="d-flex" align="center" justify="center">
    <v-col cols="12" align="center" class="px-10">
      <v-img :src="logo" max-width="700" class="logo-rounded mb-5" @load="onImgLoad" />
      <span class="font-weight-light text-secondary text-body-2" :class="{ mobile: $vuetify.display.mobile }" v-if="isLoaded">
        CONECTA CONTIGO MISMO<br />LAS NAVAS DE LA CONCEPCIÓN, SEVILLA
      </span>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '@/assets/img/logo.png'

export default {
  name: 'InitView',
  data() {
    return {
      isLoaded: false,
      logo: Logo
    }
  },
  created() {
    this.isLoaded = false
  },
  methods: {
    onImgLoad() {
      return this.isLoaded = true
    }
  }
}
</script>
<style>
#app .v-row span {
  animation: fade-in 1s ease;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
