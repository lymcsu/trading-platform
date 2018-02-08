import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import HelpCenter from '@/views/help-center'
import News from '@/views/news'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/help-center',
      name: 'helpCenter',
      component: HelpCenter
    },
    {
      path: '/news',
      name: 'news',
      component: News
    }
  ]
})
