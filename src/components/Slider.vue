<template>
  <div>
    <transition-group name="fade" tag="div" class="flex h-[600px] w-screen">
      <button
        type="button"
        class="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:text-white px-3"
        @click="prev"
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
          <p class="ml-2">Prev</p>
        </div>
      </button>
      <div class="h-full w-full">
        <img :src="currentImg" class="h-full object-contain mx-auto" />
      </div>
      <button
        type="button"
        @click="next"
        class="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 px-3"
      >
        <div class="flex flex-row align-middle">
          <span class="mr-2">Next</span>
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
      "https://th.bing.com/th/id/R.6deae59e1270f6b360977aa05d56f9e8?rik=O9ArwgSJaO%2b05A&riu=http%3a%2f%2fwww.shopickr.com%2fwp-content%2fuploads%2f2015%2f10%2famazon-india-electronics-sale-2015-banner1.jpg&ehk=VACx5MRwH8sPudZb9Q5uIdL%2bMRBOxWn%2bBfVFKT5HCvw%3d&risl=&pid=ImgRaw&r=0",
      "https://th.bing.com/th/id/OIP.s0EY9fBQ7BO1ChTYdvWFWAHaD3?w=368&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "https://www.zotezo.com/in/wp-content/uploads/sites/2/2020/08/amazon-pharmacy-banner.jpg",
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

    const currentImg = computed(() => {
      return images[Math.abs(currentIndex.value) % images.length];
    });

    return { currentIndex, currentImg, prev, next, images };
  },
});
</script>
