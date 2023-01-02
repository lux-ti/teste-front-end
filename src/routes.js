import { createRouter, createWebHistory } from "vue-router";

function lazyLoad(view) {
  return () => import(`./components/${view}.vue`);
}

const routes = [{ path: "/", name: "home", component: lazyLoad("Home") }];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
