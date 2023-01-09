import { createRouter, createWebHistory } from "vue-router";

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
  ],
});

function setCurrentComponent(page: string) {
  return () => import(`@/views/${page}/index.vue`);
}

export default router;
