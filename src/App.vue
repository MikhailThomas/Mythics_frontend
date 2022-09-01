<template>
  <navbar/>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
    <component :is="Component">
    </component>
    </transition>
  </router-view>
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

.route-enter-from{
  opacity: 0;
  transform: translateX(100vh);
}
.route-enter-active{
  transition: all 3s ease-out;
}
.route-leave-to{
  opacity: 0;
  transform: translateX(-100vh);
}
</style>
