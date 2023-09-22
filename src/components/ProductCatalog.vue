<template>
  <!-- component -->
  <!-- This is an example component -->

  <div class="flex w-screen justify-center items-center">
    <div
      class="mt-10 mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
    >
      <div
        v-for="(product, index) in products"
        :key="index"
        class="bg-white relative h-[400px] w-[310px] shadow-md border pl-4 border-gray-200 rounded-lg max-w-sm"
      >
        <a href="#">
          <img
            class="rounded-t-lg w-[90%] h-[30%] object-contain mt-4"
            :src="product.image"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="text-gray-900 font-bold text-2xl tracking-tight mb-2"
              @click="goToProductsPage(product.id)"
            >
              {{
                isCardExpanded(product)
                  ? product.title.substring(0, 30)
                  : product.title.substring(0, 28)
              }}
            </h5>
          </a>
          <p
            class="font-normal text-gray-700 mb-3 dark:text-gray-800 w-[200px] h-[400px]"
          >
            {{
              isCardExpanded(product)
                ? product.description.substring(0, 80) + "...."
                : product.description.substring(0, 50) + "..."
            }}
            <button
              @click="toggleDescriptionLength(product)"
              class="text-blue-600 hover:underline cursor-pointer"
            >
              {{ isCardExpanded(product) ? "Read Less" : "Read More" }}
            </button>
          </p>
          <div class="flex w-full justify-between absolute bottom-2 right-1 px-4">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              @click="addtocart(product)"
            >
              Add to Cart
            </button>

            <h1 class="text-[20px]">M.R.P $ {{ product.price }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useProductStore, productType } from "../store/products";
import { useRouter } from "vue-router";

const products = ref<productType[]>([]);

const expandedCards = ref<number[]>([]);

export default defineComponent({
  props: ["inputSearch"],
  setup() {
    const productStore = useProductStore();
    const router = useRouter();

    onMounted(async () => {
      await productStore.fetchProducts();
      products.value = productStore.products;
    });
    const toggleDescriptionLength = (product: productType) => {
      const index = expandedCards.value.indexOf(product.id);
      if (index === -1) {
        expandedCards.value.push(product.id); // Card is not expanded, so expand it
      } else {
        expandedCards.value.splice(index, 1); // Card is expanded, so collapse it
      }
    };
    const isCardExpanded = (product: productType) => {
      return expandedCards.value.includes(product.id);
    };
    const goToProductsPage = (id: number) => {
      router.push({ name: "ProductView", params: { id } });
    };
    const addtocart = (product: productType) => {
      productStore.cart.push(product);
    };
    return {
      products,
      addtocart,
      toggleDescriptionLength,
      isCardExpanded,
      goToProductsPage,
    };
  },
});
</script>
