import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/pets',
    name: 'pets',
    component: () => import('../views/pets.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/user.vue')
  },
  {
    path: '/habitat',
    name: 'habitat',
    component: () => import('../views/habitat.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register.vue')
  },
  {
    path: '/singlepet/:id',
    name: 'singlepet',
    component: () => import('../views/singlepet.vue'),
    props: true
  },
  {
    path: '/singlehabitat',
    name: 'singlehabitat',
    component: () => import('../views/singlehabitat.vue'),
    props: true
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
