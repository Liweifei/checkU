import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'appHome',
      component: () => import('@/components/appHome/appHome')//首页
    },
    {
      path: '/appMatching',
      name: 'appMatching',
      component: () => import('@/components/appMatching/appMatching')//匹配
    },
    {
      path: '/appHighSchool',
      name: 'appHighSchool',
      component: () => import('@/components/appHighSchool/appHighSchool')//高校
    },
    {
      path: '/appActivity',
      name: 'appActivity',
      component: () => import('@/components/appActivity/appActivity'),//活动列表
    },
    {
      path: '/activityMain/:type',
      name: 'activityMain',
      component: () => import('@/components/appActivity/activityMain/activityMain'),//活动内容
      children:[
        {
          path: 'disciplineCompetition',//学科竞赛
          name: 'disciplineCompetition',
          component: () => import('@/components/appActivity/activityMain/disciplineCompetition/disciplineCompetition'),//学科竞赛
        },
        {
          path: 'voluntaryService',//志愿服务
          name: 'voluntaryService',
          component: () => import('@/components/appActivity/activityMain/voluntaryService/voluntaryService'),//学科竞赛
        }
      ]
    },
    {
      path: '/activityDetail',//详情
      name: 'activityDetail',
      component: () => import('@/components/appActivity/activityDetail/activityDetail'),
    }
  ]
})
