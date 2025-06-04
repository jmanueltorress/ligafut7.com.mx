import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',

      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',

      component: () => import('../views/privacypolicyView.vue')
    },
    // divisiones-futbol
    {
      path: '/div-fem',
      name: 'div-fem',

      component: () => import('../views/femView.vue')
    },
    {
      path: '/div-inf',
      name: 'div-inf',

      component: () => import('../views/infView.vue')
    },
    {
      path: '/div-var-primera',
      name: 'div-var-primera',

      component: () => import('../views/varPrimeraView.vue')
    },
    {
      path: '/div-var-segunda',
      name: 'div-var-segunda',

      component: () => import('../views/varSegundaView.vue')
    },
    {
      path: '/div-var-intermedia',
      name: 'div-var-intermedia',

      component: () => import('../views/varIntermView.vue')
    },
    //otros-no encontrados
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',

      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
