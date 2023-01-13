import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import Repositorios from './views/Repositorios.vue';
import Usuarios from './views/Usuarios.vue';
import Usuario from './views/Usuario.vue';
import Favoritos from './views/Favoritos.vue';
import NotFound from './views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/repositorios',
    name: 'repositorios',
    component: Repositorios,
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: Usuarios,
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: Usuario,
  },
  {
    path: '/favoritos',
    name: 'favoritos',
    component: Favoritos,
  },
  {
    path: '/:notFound(.*)',
    name: 'notfound',
    component: NotFound,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
