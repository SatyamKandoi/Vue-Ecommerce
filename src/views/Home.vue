<script setup lang="ts">
import Slider from "../components/Slider.vue";
import ProductCard from "../components/ProductCatalog.vue";
import HeaderNav from "../components/HeaderNav.vue";
</script>

<template>
  <div>
    <header-nav></header-nav>
    <Slider></Slider>
    <product-card></product-card>
    <TableComp></TableComp>
  </div>
</template>

<style scoped></style>
