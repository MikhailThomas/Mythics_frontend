<template>
  <div class="wrap">
      <!-- things -->
      <div
      class="row"
    >
      <div id="card" style="width: 18rem" class="col-lg-4" ontouchstart="this.classList.toggle('hover');">
    <div class="container">
      <div class="front" style="background-image: url(monster.habitatimg);" >
  <div class="inner">
    <p>{{monster.name}}</p>
    <span>{{monster.family}}</span>
  </div>
  <img :src="monster.img" class="card-img-top" :alt="monster.species" />
      </div>
        <div class="back">
          <div class="inner">
            <p>{{monster.smalldescription}}</p>
          </div>
          <router-link class="btn" :to="{name:'singlepet', params: {id: monster.monsterID}}"><button id="btn" class="custom-btn" >More Info</button></router-link>
        </div>
        </div>
      </div>
    </div>
    </div>
   
</template>

<script>
export default {
  props:['monster']
};
</script>

<style scoped>

  h1 {
    font-size: 2.5rem;
    font-weight: normal;
    text-align: center;
    margin: 2rem;
  }
  
#search {
  margin: 3rem;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.container {
  transform-style: preserve-3d;
}

img {
  width: 100%;
  transform: translateZ(30px) scale(1.2);
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
