<template>
  <div class="w-full relative parallax">
    <div class="flex flex-col">
      <HomeParallax1a />
      <HomeParallax1b />
    </div>
  </div>
</template>

<script setup>
import HomeParallax1b from './HomeParallax1b.vue'
import HomeParallax1a from './HomeParallax1a.vue'
</script>

<style scoped>
.parallax {
  height: 1470px;
}
.parallax::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1470px;
  background-image: linear-gradient(rgba(16, 16, 16, 0.6), rgba(16, 16, 16, 0.6)),
    url('../../assets/images/ibfe-07.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  z-index: -2;
}
@media screen and (max-width: 576px) {
  .parallax {
    height: 2490px;
  }
  .parallax::before {
    height: 2490px;
  }
}
</style>
