import { createRouter, createWebHistory } from "vue-router";

function showView(view) {
  return () => import(`./views/${view}.vue`);
}

const routes = [
  { 
    path: "/", 
    name: "Home", 
    component: showView("Home") 
  },
  { 
    path: "/favorites", 
    name: "favorites", 
    component: showView("Favorites") 
  },
  {
    path: "/repositories",
    name: "repositories",
    component: showView("Repositories"),
  },
  {
    path: "/users",
    name: "users",
    component: showView("Users"),
  },
  {
    path: "/user/:username",
    name: "user",
    component: showView("InfoUser"),
    props: true,
  },
  {
    path: "/:notFound(.*)",
    name: "notfound",
    component: showView("NotFound"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});