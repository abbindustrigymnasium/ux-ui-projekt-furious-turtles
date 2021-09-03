import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import( '../views/Contact.vue')
  },
  {
    path: '/Cakes',
    name: 'Cakes',
    component: () => import( '../views/Cakes.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: () => import( '../views/Cart.vue')
  },
  {
    path: '/PendingOrders',
    name: 'PendingOrders',
    component: () => import( '../views/PendingOrders.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
