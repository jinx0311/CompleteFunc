import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import sobre from "../views/sobre.vue"
import aviso from "../views/Aviso.vue"
import ayuda from "../views/ayuda.vue"
import terminos from '../views/terminos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/home",
  },
  {
    path: '/terminos',
    name: 'terminos',
    component: terminos
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    component: sobre
  },
  {
    path: '/notice',
    name: 'notice',
    component: aviso
  },
  {
    path: '/help',
    name: 'help',
    component: ayuda
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
