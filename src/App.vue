<template>
  <NavBar />
  <Transition name="page-opacity" mode="out-in">
    <RouterView />
  </Transition>
  <FooterBar />
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './layout/components/NavBar.vue'
import FooterBar from './layout/components/FooterBar.vue'
</script>

<style scoped>
.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: 600ms ease all;
}

.page-opacity-enter-from,
.page-opacity-leave-to {
  opacity: 0;
}
main {
  min-height: calc(100vh - 96px);
}
</style>
