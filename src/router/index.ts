import { createRouter, createWebHistory } from 'vue-router'

import {
  InnsListingView
} from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: InnsListingView
    }
  ]
})

export default router
