import { defineStore } from "pinia";
import { getRequest } from "../axios";

export type productType = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
};

export const useProductStore = defineStore("products", {
    state: () => ({
        products: [] as productType[],
        cart: [],
    }),
    actions: {
        async fetchProducts() {
            try {
                this.products = await getRequest(
                    "https://fakestoreapi.com/products"
                );
            } catch (error) {
                console.log(error);
            }
        },
    },
});
