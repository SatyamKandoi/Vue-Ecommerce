import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Hello from "../views/Hello.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Hello,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
