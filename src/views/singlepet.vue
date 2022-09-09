<template>
  <div id="page">
    <div id="content" class="row">
      <div id="monster"
            class="col-lg-6 " v-if="monster"
            style="background-image: url(https://i.postimg.cc/SNKbFjKs/Mountain-landscape.jpg/500/500/)"
          >
            <img :src="monster[0].img" alt="pet"/>
          </div>
      <div class="col-lg-6">
      <h2>More information on monster.name</h2>
      <p>{{monster[0].description}}</p>
    </div>
    <div id="info" class="row">
      <div class="col-2">
        <h3>Name:</h3>
        <p>{{monster[0].name}}</p>
        <h3>species</h3>
        <p>{{monster[0].species}}</p>
      </div>
      <div class="col-2">
        <h3>height</h3>
        <p>{{monster[0].height}}</p>
        <h3>length</h3>
        <p>{{monster[0].length}}</p>
      </div>
      <div class="col-2">
        <h3>family</h3>
        <p>{{monster[0].family}}</p>
        <h3>difficulty to raise</h3>
        <p>{{monter[0].difficulty}}</p>
      </div>
      <div class="col-2">
        <h3>habitats</h3>
        <p>{{monster[0].habitats}}</p>
        <h3>how long </h3>
        <p>{{monster[0].delivery}}</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    this.$store.dispatch("getMonster", this.$route.params.id);
  },
  computed:{
    monster(){
      return this.$store.state.monster;
    },
    user(){
      return this.$store.state.user
    }
  }

};
</script>

<style scoped>
#page {
  background: linear-gradient(black, rgba(128, 128, 128, 0.615)), url(https://i.postimg.cc/3RtnN3zr/desert-landscape.jpg)center/cover no-repeat;
  min-height: 100vh;
  color: white;
}
#content {
  max-width: 1100px;
  margin: auto;
  padding-top: 2rem;
}
#monster{
  border: 4px solid black;
  border-radius: 10%;
}
img {
  max-width: 500px;
  max-height: 500px;
  transform: translateZ(30px) scale(1.2);
}
#info{
  margin-top: 2rem;
}
.row{
  --bs-gutter-x: 0rem;
}
h3{
  margin-top: 2rem;
}
.col-6{
  margin-top: 1rem;
}
.col-2{
  margin: auto;
  margin-top: 1rem;
  background: rgba(0, 0, 0, 0.456);
  border-radius: 10%;
  height: 15em;
  width: 15em;
}
</style>
