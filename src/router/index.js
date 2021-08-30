import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import 'bootstrap/dist/css/bootstrap.min.css'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
]

const router = new VueRouter({
  routes
})

export default router
