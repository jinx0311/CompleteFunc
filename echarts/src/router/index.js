import Vue from 'vue'
import Router from 'vue-router' 
import Home from '@/view/home.vue'
import pc from '@/view/pc.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/pc',
      name: 'pc',
      component: pc
    }
  ]
})
