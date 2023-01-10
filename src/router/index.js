import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
   
    component: () => import(/* webpackChunkName: "favoritos" */ '../views/Favoritos.vue')
  },
  {
    path: '/usuarios',
    name: 'Users',
   
    component: () => import(/* webpackChunkName: "favoritos" */ '../views/Users.vue')
  },
  {
    path: '/repositorios',
    name: 'Repos',
   
    component: () => import(/* webpackChunkName: "favoritos" */ '../views/Repos.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
