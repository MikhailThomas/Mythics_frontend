<template>
  <div id="page">
    <div id="content" class="row">
      <div id="monster"
            class="front col-6"
            style="background-image: url(https://i.postimg.cc/SNKbFjKs/Mountain-landscape.jpg/500/500/)"
          >
            <img src="../assets/Tony_dragon-removebg-preview.png" alt=""/>
          </div>
      <div class="col-6">
      <h2>pet information</h2>
      <p>Hela info</p>
    </div>
    <div id="info" class="row">
      <div class="col-2">
        <h3>name</h3>
        <h3>species</h3>
      </div>
      <div class="col-2">
        <h3>family</h3>
        <h3>height</h3>
      </div>
      <div class="col-2">
        <h3>length</h3>
        <h3>difficulty to raise</h3>
      </div>
      <div class="col-2">
        <h3>habitats</h3>
        <h3>how long it will take to deliver the beast that is your mom</h3>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {};
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
h3{
  margin-top: 2rem;
}
.col-6{
  margin-top: 1rem;
}
.col-2{
  margin-top: 2rem;
  background: rgba(0, 0, 0, 0.456);
  border-radius: 10%;
  margin: auto;
  height: 15em;
  width: 15em;
}
</style>
