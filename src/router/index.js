import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'appHome',
      component: () => import('@/components/appHome/appHome')//首页
    }
  ]
})
