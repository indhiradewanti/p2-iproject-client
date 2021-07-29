<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Maps/>
    <HFooter/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Maps from '@/components/Maps.vue'
import HFooter from 'vue-hacktiv8-footer'

export default {
  name : 'App',
  components : {
    Navbar,
    HFooter,
    Maps
  }
}
</script>

<style>
@import '/assets/css/style.css'
</style>
