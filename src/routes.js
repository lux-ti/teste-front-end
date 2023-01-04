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
  {
    path: "/users",
    name: "users",
    component: lazyLoad("Users"),
  },
  {
    path: "/user/:username",
    name: "user",
    component: lazyLoad("UserInfos"),
    props: true,
  },
  {
    path: "/:notFound(.*)",
    name: "notfound",
    component: lazyLoad("NotFound"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
