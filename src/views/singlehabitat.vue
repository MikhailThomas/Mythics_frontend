<template>
  <div class="allhabitats">
    <div v-if="monsters">
        <div v-for="monster in monsters" :key="monster" :monster="monster">

        </div>
    </div>
  </div>
</template>

<script>
export default {
    computed:{

    },
    methods:{
        
    }

}
</script>

<style>

</style>