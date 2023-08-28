<script setup lang="ts">
import Home from "./components/Header.vue";
import Slider from "./components/Slider.vue";
import { ref } from "vue";

const example = ref("");
</script>

<template>
  <div>
    <Home></Home>
    <Slider></Slider>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
