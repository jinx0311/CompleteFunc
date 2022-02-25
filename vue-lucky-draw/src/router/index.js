import Vue from 'vue'
import Router from 'vue-router'
import LuckyDraw from '@/components/luckyDraw'
import rule from '@/components/rule'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'lucky',
      component: LuckyDraw
    },
    {
      path: '/rule',
      name: 'rule',
      component: rule
    }
  ]
})
