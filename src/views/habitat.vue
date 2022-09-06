<template>
    <div id="habitat" class="100vh">
        <h2>HOVER</h2>
        <div class="gallery">
          <div class="hexa"><img id="img1" src="https://picsum.photos/id/1040/300/300" alt="a house on a mountain"></div>
          <div class="hexa"><img id="img2" src="https://picsum.photos/id/106/300/300" alt="sime pink flowers"></div>
          <div class="hexa"><img id="img3" src="https://picsum.photos/id/136/300/300" alt="big rocks with some trees"></div>
          <div class="hexa"><img id="img4" src="https://picsum.photos/id/1039/300/300" alt="a waterfall, a lot of tree and a great view from the sky"></div>
          <div class="hexa"><img id="img5" src="https://picsum.photos/id/110/300/300" alt="a cool landscape"></div>
          <div class="hexa"><img id="img6" src="https://picsum.photos/id/1047/300/300" alt="inside a town between two big buildings"></div>
          <div class="center"><a id="all" href="#allhabitats"><h1>HABITATS</h1></a>
          </div>
</div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #habitat{
    background: linear-gradient(rgba(108, 152, 157, 0.493),rgb(0, 0, 0)), url(https://i.postimg.cc/SNKbFjKs/Mountain-landscape.jpg) center / cover no-repeat;
    height: 100vh;
    overflow-y: hidden;
  }
  #all{
    color: yellow;
    font-weight: 700;
    text-decoration-line: none;
  }
.gallery {
  display: grid;
  margin: 230px  10px;
  place-items: center;
}

.center{
  position: absolute;
}

.hexa{
  grid-area: 1/1;
  width: 200px;
  height: 200px;
  object-fit: cover;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%,75% 100%,25% 100%,0 50%);
  transform: rotate(var(--_a,)) translateY(calc(100% + 0px)) rotate(calc(-1*var(--_a))) scale(var(--_t,1));
  cursor: pointer;
  filter: grayscale(80%);
  transition: .2s linear;
}
.hexa:hover {
  filter: grayscale(0);
  z-index: 1;
  --_t: 1.2;
}

.hexa:nth-child(1) {--_a:  0deg}
.hexa:nth-child(2) {--_a:  60deg}
.hexa:nth-child(3) {--_a:  120deg}
.hexa:nth-child(4) {--_a: -60deg}
.hexa:nth-child(5) {--_a: -120deg}
.hexa:nth-child(6) {--_a:  180deg}
.hexa:nth-child(7) {transform: scale(var(--_t,1))}




</style>