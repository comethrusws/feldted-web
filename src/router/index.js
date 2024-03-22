import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/demodrop',
    name: 'Demodrop',
    component: () => import(/* webpackChunkName: "Demodrop" */ '../views/DemoDrop.vue')
  },
  {
    path: '/terms-of-use',
    name: 'TermsUse',
    component: () => import(/* webpackChunkName: "Demodrop" */ '../views/TermUse.vue')
  },
  {
    path: '/help',
    name: 'HelpView',
    component: () => import(/* webpackChunkName: "Demodrop" */ '../views/HelpView.vue')
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import(/* webpackChunkName: "Demodrop" */ '../views/PrivacyPolicy.vue')
  },
  {
    path: '/archive',
    name: 'Archive',
    component: () => import('../views/ArchiveView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
