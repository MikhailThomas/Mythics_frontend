<template>
  <div class="wrapper">
    <h1>Pets looking for new homes</h1>
    <div class="row">
      <div class="col-4" ontouchstart="this.classList.toggle('hover');">
        <div class="container">
          <div
            class="front"
            style="background-image: url(https://i.postimg.cc/SNKbFjKs/Mountain-landscape.jpg/500/500/)"
          >
            <div class="inner">
              <p>Diligord</p>
              <span>Lorem ipsum</span>
            </div>
            <img src="../assets/Tony_dragon-removebg-preview.png" alt="" />
          </div>
          <div class="back">
            <div class="inner">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                cum repellat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- card 2 -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
  font-weight: normal;
  text-align: center;
  margin: 2rem;
}

.wrapper {
  min-height: 100vh;
  max-width: 100%;
  margin: 2rem auto;
  max-width: 80vw;
  z-index: 3;
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
  z-index: 2;
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
