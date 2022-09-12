<template>
  <div class="wrap">
    <!-- filter -->
    <h1>Pets looking for new homes</h1>
    <div class="row">
    <div class="dropdown">
      <button
        class="btn dropdown-toggle col-6"
        type="button"
        id="drop"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="true"
      >
        Filter
      </button>
      <div class="dropdown-menu" aria-labelledby="drop">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
      <!-- sort -->
        <button
          class="btn btn-secondary dropdown-toggle col-4"
          type="button"
          id="drop"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sort
        </button>
        <div class="dropdown-menu" aria-labelledby="drop">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
    </div>
    </div>
    <!-- search -->
    <form id="search" class="" role="search">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </form>
    <!-- cards -->
    <div
      class="row d-flex justify-content-evenly" v-if="monsters">
      <Card v-for="monster in monsters" :key="monster" :monster="monster"/>
    </div>
    
  </div>
</template>

<script>
import Card from '@/components/card.vue';
export default {
    computed: {
        monsters() {
            return this.$store.state.monsters;
        },
    },
    mounted() {
        this.$store.dispatch("getMonsters");
    },
    components: { Card }
};
</script>

<style scoped>
  
  .wrap {
    background: linear-gradient(rgba(0, 0, 0, 0.278),rgba(0, 128, 0, 0.355)), url(https://i.postimg.cc/2j7CNPFH/forest-landscape.jpg)center/cover no-repeat;
    min-height: 100vh;
    max-width: 100vw;
   padding-top: 4rem;
  }

  h1 {
    font-size: 2.5rem;
    color: white;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  
#drop{
  max-width: 400px;
}

#search {
  margin: 1rem auto;
  margin-bottom: 3rem;
  max-width: 500px;
  box-shadow: 2px 2px 2px;
  border-radius: 10px;
}

.container {
  transform-style: preserve-3d;
}

.row{
  margin: 0;
}

img {
  width: 100%;
  transform: translateZ(30px) scale(1.2);
}
.dropdown{
  display: flex;
  justify-content: space-evenly;
}
.front,
.back {
  background-size: cover;
  background-position: center;
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  backface-visibility: hidden;
  text-align: center;
  min-height: 280px;
  height: auto;
  border-radius: 10px;
  color: #fff;
}

.back {
  background: #cedce7;
  background: linear-gradient(45deg, #cedce7 0%, #596a72 100%);
}

.front:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  display: block;
  opacity: 0.6;
  backface-visibility: hidden;
  border-radius: 10px;
}
.container:hover .front,
.container:hover .back {
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
}

.back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.inner {
  transform: translateY(-50%) translateZ(50px) scale(0.94);
  bottom: 0;
  position: absolute;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  outline: 1px solid transparent;
  perspective: inherit;
}

.container .back {
  transform: rotateY(180deg);
  transform-style: preserve-3d;
}

.container .front {
  transform: rotateY(0deg);
  transform-style: preserve-3d;
}

.container:hover .back {
  transform: rotateY(0deg);
  transform-style: preserve-3d;
}
#btn {
  width: 130px;
  height: 40px;
  color: white;
  border-radius: 5px;
  padding: 10px 25px;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all o.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(176, 176, 176, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}
#btn {
  border: none;
  background: linear-gradient(
    0deg,
    rgb(203, 203, 203) 0%,
    rgb(150, 141, 141) 100%
  );
  color: white;
  overflow: hidden;
}
#btn:hover {
  color: #fff;
}
#btn:before {
  position: absolute;
  content: "";
  display: inline-block;
  top: -180px;
  left: 0;
  width: 30px;
  height: 100%;
  background: #fff;
  animation: shiny-btn 3s ease-in-out infinite;
}
#btn:hover {
  opacity: 0.7;
}
#btn:active {
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
    -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
    inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
}
@keyframes shiny-btn {
  0% {
    transform: scale(0) rotate(45deg);
    opacity: 0;
  }
  80% {
    transform: scale(0) rotate(45deg);
    opacity: 0.5;
  }
  81% {
    transform: scale(4) rotate(45deg);
    opacity: 1;
  }
  100% {
    transform: scale(50) rotate(45deg);
    opacity: 0;
  }
}
.container:hover .front {
  transform: rotateY(-180deg);
  transform-style: preserve-3d;
}

.front .inner p {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
}

.front .inner p:after {
  content: "";
  width: 4rem;
  height: 2px;
  position: absolute;
  background: #c6d4df;
  display: block;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -0.5rem;
}

@media screen and (max-width: 64rem) {
  .col {
    width: calc(33.333333% - 2rem);
  }
}

@media screen and (max-width: 48rem) {
  .col {
    width: calc(50% - 2rem);
  }
}

@media screen and (max-width: 32rem) {
  .col {
    width: 100%;
    margin: 0 0 2rem 0;
  }
}
</style>
