import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: () => import('./views/qrcode.vue')
    },
    {
      path: '/weui',
      name: 'weui',
      component: () => import('./views/weui.vue')
    }
  ]
})
