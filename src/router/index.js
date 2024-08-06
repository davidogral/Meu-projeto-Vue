import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue') // Lazy Loading
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/ProfileView.vue') // Lazy Loading
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
