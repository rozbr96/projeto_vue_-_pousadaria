import { createRouter, createWebHistory } from 'vue-router'

import {
  InnsListingView,
  InnDetailsView
} from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: InnsListingView
    },
    {
      name: 'Inn',
      path: '/inns/:id',
      component: InnDetailsView
    }
  ]
})

export default router
