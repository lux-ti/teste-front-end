import { createRouter, createWebHistory } from "vue-router";

function lazyLoad(view) {
  return () => import(`./components/${view}.vue`);
}

const routes = [
  { path: "/", name: "home", component: lazyLoad("Home") },
  { path: "/favoritos", name: "favoritos", component: lazyLoad("Favoritos") },
  {
    path: "/repositories",
    name: "repositories",
    component: lazyLoad("Repositories"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
