import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserListView from '../views/UserListView.vue'
import RepositoryListView from '../views/RepositoryListView.vue'
import UserRepositoriesView from '../views/UserRepositoriesView.vue'
import FavouritesListView from '../views/FavouritesListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/users',
      name: 'users',
      component: UserListView,
      props: route => ({ searchTerm: route.query.q })
    },
    {
      path: '/repositories',
      name: 'repositories',
      component: RepositoryListView,
      props: route => ({ searchTerm: route.query.q })
    },
    {
      path: '/users/:username/repositories',
      name: 'UserRepositoriesView',
      component: UserRepositoriesView,
      props: true
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: FavouritesListView,
      props: true
    }
  ]
})

export default router
