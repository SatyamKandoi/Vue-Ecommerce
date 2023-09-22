<template>
  <div>
    <div
      class="min-w-screen min-h-screen flex items-center p-5 lg:p-10 overflow-hidden relative"
    >
      <div
        class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left"
      >
        <div class="md:flex items-center -mx-10">
          <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
            <div class="relative">
              <img :src="selectedProduct?.image" class="w-full relative z-10" alt="" />
              <div
                class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"
              ></div>
            </div>
          </div>
          <div class="w-full md:w-1/2 px-10">
            <div class="mb-10">
              <h1 class="font-bold uppercase text-2xl mb-5">
                {{ selectedProduct?.title }}
              </h1>
              <p class="text-sm">
                {{ selectedProduct?.description }}
              </p>
            </div>
            <div>
              <div class="inline-block align-bottom mr-5">
                <span class="text-2xl leading-none align-baseline">$</span>
                <span class="font-bold text-5xl leading-none align-baseline">{{
                  selectedProduct?.price.toString().split(".")[0]
                }}</span>
                <span class="text-2xl leading-none align-baseline">{{
                  "." + (Math.floor(selectedProduct?.price as number* 100) % 100)
                }}</span>
              </div>
              <div class="inline-block align-bottom">
                <button
                  class="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"
                >
                  <i class="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";

import { useProductStore } from "../store/products";

import { useRoute } from "vue-router";

const store = useProductStore();

const route = useRoute();

const selectedProduct = computed(() => {
  return store.products.find((item) => item.id === Number(route.params.id));
});
</script>

<style lang=""></style>
