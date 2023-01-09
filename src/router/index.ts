import { createRouter, createWebHistory } from "vue-router";

function setCurrentComponent(page: string) {
  return () => import(`@/views/${page}/index.vue`);
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: setCurrentComponent("Home"),
    },
    {
      path: "/repositories",
      name: "repositories",
      component: setCurrentComponent("Repositories"),
    },
    {
      path: "/favorites",
      name: "favorites",
      component: setCurrentComponent("Favorites"),
    },
    {
      path: "/users",
      name: "users",
      component: setCurrentComponent("Users"),
    },
    {
      path: "/user/:username",
      name: "user",
      component: setCurrentComponent("UserPage"),
      props: true,
    },
    {
      path: "/:page(.*)",
      name: "pageNotFound",
      component: setCurrentComponent("PageNotFound"),
    },
  ],
});

export default router;
