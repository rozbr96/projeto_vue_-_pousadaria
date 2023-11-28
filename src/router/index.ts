import { createRouter, createWebHistory } from 'vue-router'

import {
  InnsListingView,
  InnDetailsView,
  RoomDetailsView
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
      name: 'Inns',
      path: '/inns',
      component: InnsListingView
    },
    {
      name: 'Inn',
      path: '/inns/:id',
      component: InnDetailsView
    },
    {
      name: 'Room',
      path: '/rooms/:id',
      component: RoomDetailsView
    }
  ]
})

export default router
