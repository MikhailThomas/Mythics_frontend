<template>
  <navbar/>
  <router-view/>
</template>

<script>
import navbar from './components/navbar'
export default {
  components: {
    navbar
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
