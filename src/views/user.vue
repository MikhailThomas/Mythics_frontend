<template>
    <div id="page" class="container vh-100">
  <div class="grid">
    <div class="item1">
        <img src="https://i.postimg.cc/25WfcJS7/aquatic-landscape.jpg" alt="">
        <h3>Name</h3>
        <h3>Surname</h3>
        <h3>Email</h3>
        <h3>Home</h3>
        <h3>Favorite Creature</h3>
    </div>
    <div class="block">
      <h1>Cover letter</h1>
          <p>A little about myself</p>
    </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#page{
    height: 100vh;
}
.grid{
    display: flex;
    position: absolute;
    padding-top: 2rem;
    display: grid;
    grid-template:1fr / 1fr 1fr;
    justify-content: center;
    width: 100vw;
}
.item1 img{
    width: 30vh;
    height: 30vh;
    background-size: contain;
    background-position: center;
}

</style>