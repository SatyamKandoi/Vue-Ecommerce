<template>
  <div>
    <transition-group
      name="fade"
      tag="div"
      class="grid grid-cols-3 items-center h-[400px] xs:h-[50%] max-h-[600px] w-screen bg-gray-100"
      :key="currentImg"
    >
      <button
        type="button"
        @click="prev"
        class="text-black rounded-r-md h-full px-3 left-0"
        :key="currentIndex"
      >
        <div class="flex flex-row align-middle">
          <svg
            class="w-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </button>

      <div :key="currentImg">
        <img :src="currentImg" />
      </div>

      <button
        type="button"
        @click="next"
        class="text-black rounded-r-md py-2 h-[full] absolute right-0"
        :key="currentIndex"
      >
        <div class="flex">
          <svg
            class="w-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </button>
      
    </transition-group>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const images: string[] = [
      "https://i.pinimg.com/736x/c5/79/6d/c5796df4f44ea2c26643da920b15d5d7.jpg",
      "https://i.pinimg.com/originals/bc/47/de/bc47deec54383aa62b31e041f71327c7.jpg",
      "https://i.pinimg.com/originals/a6/c0/a2/a6c0a283cde4ff0402099d4d6b2a7417.jpg",
      "https://www.medicinecoupon.in/wp-content/uploads/2019/10/990x450.jpg",
    ];
    const timer = ref<number>();
    const currentIndex = ref<number>(0);

    const startSlide = () => {
      timer.value = setInterval(next, 4000);
    };

    const next = () => {
      if (currentIndex.value > images.length - 1) {
        currentIndex.value = 0;
      }
      currentIndex.value++;
    };
    const prev = () => {
      currentIndex.value -= 1;
    };

    onMounted(() => {
      startSlide();
    });

    const currentImg = computed(() => {
      return images[Math.abs(currentIndex.value) % images.length];
    });

    return { currentIndex, currentImg, prev, next, images };
  },
});
</script>
