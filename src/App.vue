<template>
  <navbar/>
  <router-view/>
  <footercon/>
</template>

<script>
import navbar from './components/navbar'
import footercon from './components/footercon.vue'
export default {
  components: {
    navbar,
  footercon
}
}
</script>
<style>
#app {
  text-align: center;
}
::-webkit-scrollbar{
  display: hidden;
}
</style>
