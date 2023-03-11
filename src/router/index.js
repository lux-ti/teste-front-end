import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import Users from "../views/UsersView.vue";
import UserProfile from "../views/UserView.vue";
import Favorites from "../views/FavoritesView.vue";
import Repositories from "../views/ReposView.vue";
import NotFound from "../views/404View.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Search",
    component: SearchView,
  },
  {
    path: "/repositories",
    name: "Repositories",
    component: Repositories,
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: Favorites,
  },
  {
    path: "/404",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "404",
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/user",
    name: "UserProfile",
    component: UserProfile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
