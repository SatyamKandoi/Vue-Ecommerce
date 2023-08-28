<template>
  <div>
    <transition-group name="fade" tag="div">
      <div v-for:"i in [currentIndex]" :key="i">

      </div>

    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const images: string[] = [
      "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg",
    ];
    const timer = ref<number>();
    const currentIndex = ref<number>(0);

    const startSlide = () => {
      timer.value = setInterval(next, 4000);
    };
    const next = () => {
      currentIndex.value++;
    };
    const prev = () => {
      currentIndex.value -= 1;
    };

    onMounted(() => {
      startSlide();
    });
  },
});
</script>
