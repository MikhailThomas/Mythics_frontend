<template>
    <div id="page" class="container vh-100">
  <div class="row">
    <div class="item1 col-sm-4">
        <img src="https://i.postimg.cc/25WfcJS7/aquatic-landscape.jpg" alt="">
        <h3>Name</h3>
        <h5>haibo</h5>
        <h3>Surname</h3>
        <h5>haibo</h5>
        <h3>Email</h3>
        <h5>haibo</h5>
        <h3>Home</h3>
        <h5>haibo</h5>
        <h3>Favorite Creature</h3>
        <h5>haibo</h5>
    </div>
    <div class="block col-sm-8">
      <h1>A little about me</h1>
          <p>A little about myself</p>
          <div id="carousel-con" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://i.postimg.cc/kMZvmjxX/Tony-dragon.jpg" class="d-block w-100" alt="..." />
      </div>
    </div>
    <button id="click"
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carousel-con"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button id="click"
      class="carousel-control-next"
      type="button"
      data-bs-target="#carousel-con"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
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
  .row{
    border: 1px solid black;
    position: absolute;
    padding-top: 2rem;
    margin-top: 2rem;
    justify-content: center;
    min-height: 650px;
    width: 1200px;
}
.item1 img{
    width: 30vh;
    height: 30vh;
    background-size: contain;
    background-position: center;
    border: 6px solid ;
    margin-bottom: 1rem;
}

</style>