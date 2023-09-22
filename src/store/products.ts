import { defineStore } from "pinia";
import { getRequest } from "../axios";

export type productType = {
    id: number;
    title: string;
    category: string;
    description: string;
    price: number;
    image: string;
};

export const useProductStore = defineStore("products", {
    state: () => ({
        products: [] as productType[],
        cart: [] as productType[],
        setCart: false,
        searchBarData:""
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
        removefromcart(id: number) {
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i].id === id) {
                    this.cart.splice(i, 1);
                    break; // Exit the loop once the object is removed.
                }
            }
        },
       
        setcartaction() {
            this.setCart = !this.setCart;
        },
        
        setSearchBarData(data:string){
            this.searchBarData = data
          this.products=this.products.filter((obj) => {
                obj.title.includes(data)
          })
        }
    },
});
