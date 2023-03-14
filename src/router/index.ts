import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Favorites from '../views/Favorites/Favorites.vue'
import Users from '../views/Users/Users.vue'
import Profile from '../views/Profile/Profile.vue'
import Repositories from '../views/Repositories/Repositories.vue'

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
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/repositories',
      name: 'repositories',
      component: Repositories
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})

export default router
