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
      component: () => import('@/components/appHighSchool/appHighSchool'),//高校
      children:[
        {
          path: 'universityLibrary',//高校库
          name: 'universityLibrary',
          component: () => import('@/components/appHighSchool/universityLibrary/universityLibrary'),
        },
        {
          path: 'listOfUniversities',//高校榜单
          name: 'listOfUniversities',
          component: () => import('@/components/appHighSchool/listOfUniversities/listOfUniversities'),
        },
        {
          path: 'optionalLibrary',//专业库
          name: 'optionalLibrary',
          component: () => import('@/components/appHighSchool/optionalLibrary/optionalLibrary'),
        },
      ]
    },
    {
      path: '/schoolDetail',
      component: () => import('@/components/appHighSchool/universityLibrary/schoolDetail/schoolDetail'),//高校库详情
      children:[
        {
          path: 'schoolInfomation',//学校资料
          name: 'schoolInfomation',
          component: () => import('@/components/appHighSchool/universityLibrary/schoolDetail/schoolInfomation/schoolInfomation'),
        },
        {
          path: 'majorSetup',//专业设置
          name: 'majorSetup',
          component: () => import('@/components/appHighSchool/universityLibrary/schoolDetail/majorSetup/majorSetup'),
        },
        {
          path: 'alumniComments',//校友评论
          name: 'alumniComments',
          component: () => import('@/components/appHighSchool/universityLibrary/schoolDetail/alumniComments/alumniComments'),
        },
      ]
    },
    {
      path: '/appActivity',
      name: 'appActivity',
      component: () => import('@/components/appActivity/appActivity'),//活动列表
    },
    {
      path: '/activityMain',
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
        },
        {
          path: 'scientificProject',//科研项目
          name: 'scientificProject',
          component: () => import('@/components/appActivity/activityMain/scientificProject/scientificProject'),//科研项目
        }
      ]
    },
    {
      path: '/activityDetail/:type',//活动详情
      name: 'activityDetail',
      component: () => import('@/components/appActivity/activityDetail/activityDetail'),
    }
  ]
})
