import { createRouter, createWebHistory } from "vue-router";

function lazyLoad(view){
  return import(`./views/${view}.vue`)
}

const routes = [
  { 
    path: "/", 
    name: "homePage", 
    component: lazyLoad('HomePage') 
  },
  { 
    path: "/user_details", 
    name: "user_details", 
    component: lazyLoad('UserDetails')
  },
  { 
    path: "/my_favorites", 
    name: "my_favorites", 
    component: lazyLoad('MyFavorites') 
  },
  { 
    path: "/search_user", 
    name: "search_user", 
    component: lazyLoad('SearchUser') 
  },
  { 
    path: "/search_repository", 
    name: "search_repository", 
    component: lazyLoad('SearchRepository') 
  },
  { 
    path: "/:pathMatch(.*)*", 
    name: "page_not_found", 
    component: lazyLoad('PageNotFound') 
  }
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
