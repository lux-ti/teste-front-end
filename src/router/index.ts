import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Favorites from '../views/Favorites/Favorites.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    }
  ]
})

export default router
