<template>
  <!-- component -->
  <!-- This is an example component -->

  <div class="flex w-screen justify-center items-center">
    <div
      class="mt-10 mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <div
        v-for="(post, index) in posts"
        :key="index"
        class="bg-white relative h-[800px] w-[300px] shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img
            class="rounded-t-lg w-[90%] h-[50%] object-contain"
            :src="post.image"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white"
            >
              {{ post.title }}
            </h5>
          </a>
          <p class="font-normal text-gray-700 mb-3 dark:text-gray-400 w-[90%] h-[50%]">
            {{
              isCardExpanded(post)
                ? post.description.substring(0, 200) + "...."
                : post.description.substring(0, 100) + "..."
            }}
            <button
              @click="toggleDescriptionLength(post)"
              class="text-blue-600 hover:underline cursor-pointer"
            >
              {{ isCardExpanded(post) ? "Read Less" : "Read More" }}
            </button>
          </p>
          <div class="flex w-full justify-between absolute bottom-2 right-1 px-4">
            <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to Cart
              <svg
                class="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <h1 class="text-2xl">M.R.P $ {{ post.price }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from "vue";
import { getRequest } from "../axios";
const posts = ref<
  Array<{
    title: string;
    description: string;
    price: number;
    image: string;
  }>
>([]);
const expandedCards = ref([]);
export default defineComponent({
  setup() {
    onMounted(async () => {
      const allposts = await getRequest("https://fakestoreapi.com/products");
      posts.value = allposts;
    });
    const toggleDescriptionLength = (post: {
      id: number;
      title: string;
      description: string;
      price: number;
      image: string;
    }) => {
      const index = expandedCards.value.indexOf(post.id);
      if (index === -1) {
        expandedCards.value.push(post.id); // Card is not expanded, so expand it
      } else {
        expandedCards.value.splice(index, 1); // Card is expanded, so collapse it
      }
    };
    const isCardExpanded = (post) => {
      return expandedCards.value.includes(post.id);
    };
    return {
      posts,
      toggleDescriptionLength,
      isCardExpanded,
    };
  },
});
</script>
