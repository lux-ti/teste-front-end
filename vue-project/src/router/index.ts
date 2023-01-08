import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/index.vue";
import Repositories from "../views/Repositories/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/repositories",
      name: "repositories",
      component: Repositories,
    },
  ],
});

export default router;
