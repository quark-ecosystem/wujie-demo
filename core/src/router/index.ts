import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/webcomponents',
      name: 'webcomponents',
      component: () => import('../views/webcomponents.vue')
    },
    {
      path: '/react',
      name: 'react',
      component: () => import('../views/react.vue')
    },
    {
      path: '/vue2',
      name: 'vue2',
      component: () => import('../views/vue2.vue')
    },
    {
      path: '/angular',
      name: 'angular',
      component: () => import('../views/angular.vue')
    },
  ]
});

export default router;
