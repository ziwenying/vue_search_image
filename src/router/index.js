import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'

import store from './../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/homepage'
  },
  {
    path: '/homepage/:id',
    name: 'home-image',
    component: () => import('../views/ImgPage.vue')
  },
  {
    path: '/homepage',
    name: 'home-page',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/about',
    name: 'about-page',
    component: () => import('../views/AboutPage.vue')
  },
  {
    path: '/favorite/:id',
    name: 'image-favorite',
    component: () => import('../views/ImgPage.vue')
  },
  {
    path: '/favorite',
    name: 'favorite-page',
    component: () => import('../views/FavoritePage.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'image-favorite' || to.name === "home-image") {
    store.dispatch('visitImagePage')
  }
  next()
})

export default router