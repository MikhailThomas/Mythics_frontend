<template>
    <div id="habitat" class="100vh">
        <h1>Habitats</h1>
        <p>check which habitat matches your land and use the colored boarders as a reference when looking for a Pet.</p>
        <div class="gallery">
  <img src="https://picsum.photos/id/1040/300/300" alt="a house on a mountain">
  <img src="https://picsum.photos/id/106/300/300" alt="sime pink flowers">
  <img src="https://picsum.photos/id/136/300/300" alt="big rocks with some trees">
  <img src="https://picsum.photos/id/1039/300/300" alt="a waterfall, a lot of tree and a great view from the sky">
  <img src="https://picsum.photos/id/110/300/300" alt="a cool landscape">
  <img src="https://picsum.photos/id/1047/300/300" alt="inside a town between two big buildings">
  <img src="https://picsum.photos/id/1057/300/300" alt="a great view of the sea above the mountain">
  <img src="https://picsum.photos/id/1057/300/300" alt="a great view of the sea above the mountain">
  <img src="https://picsum.photos/id/1057/300/300" alt="a great view of the sea above the mountain">

  <img src="https://picsum.photos/id/1057/300/300" alt="a great view of the sea above the mountain">
</div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.gallery {
  --s: 250px;
  --g: 10px;
  display: grid;
  margin: calc(var(--s) + var(--g));
  place-items: center;
}

.gallery > img {
  grid-area: 1/1;
  width: var(--s);
  aspect-ratio: 1.15;
  object-fit: cover;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%,75% 100%,25% 100%,0 50%);
  transform: rotate(var(--_a,0deg)) translateY(calc(100% + var(--g))) rotate(calc(-1*var(--_a,0deg))) scale(var(--_t,1));
  cursor: pointer;
  filter: grayscale(80%);
  transition: .2s linear;
}
.gallery > img:hover {
  filter: grayscale(0);
  z-index: 1;
  --_t: 1.2;
}

.gallery > img:nth-child(1) {--_a:  0deg}
.gallery > img:nth-child(2) {--_a:  60deg}
.gallery > img:nth-child(3) {--_a:  120deg}
.gallery > img:nth-child(4) {--_a: -60deg}
.gallery > img:nth-child(5) {--_a: -120deg}
.gallery > img:nth-child(6) {--_a:  180deg}
.gallery > img:nth-child(7) {transform: scale(var(--_t,1))}
</style>