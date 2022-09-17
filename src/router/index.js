import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    component: HomePage
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

export default router
