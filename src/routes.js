import { createRouter, createWebHistory } from "vue-router";

function showComponent(view) {
  return () => import(`./views/${view}.vue`);
}

const routes = [
  { 
    path: "/", 
    name: "Home", 
    component: showComponent("Home") 
  },
  { 
    path: "/favorites", 
    name: "favorites", 
    component: showComponent("Favorites") 
  },
  {
    path: "/repositories",
    name: "repositories",
    component: showComponent("Repositories"),
  },
  {
    path: "/users",
    name: "users",
    component: showComponent("Users"),
  },
  {
    path: "/user/:username",
    name: "user",
    component: showComponent("InfoUser"),
    props: true,
  },
  {
    path: "/:notFound(.*)",
    name: "notfound",
    component: showComponent("NotFound"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});