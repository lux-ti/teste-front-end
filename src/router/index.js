import { createRouter, createWebHistory } from "vue-router";

import Inicio from "../views/Inicio.vue";
import Favoritos from "../views/Favoritos.vue";
import Search from "../views/Search.vue";
import SearchRepositories from "../views/SearchRepositories.vue";
import User from "../views/User.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Inicio },
    { path: "/favoritos", component: Favoritos },
    { path: "/search", component: Search },
    { path: "/user", component: User },
    { path: "/searchrepositories", component: SearchRepositories },
  ],
});

export default router;