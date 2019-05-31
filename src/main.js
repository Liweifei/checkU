// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'babel-polyfill';//解决ie下 vuex使用问题
Vue.use(ElementUI)

// 多语言
import i18n from '@/assets/lang/lang.js'

//引入vuex
import store from './store/store.js'//注意文件路径


router.beforeEach((to, from, next) => {
  let lang=to.query.lang;
  if(lang==="en" || lang==="zh" ){//语言切换
    i18n.locale=lang;
    localStorage.setItem("checkUlang",lang)
  }
  next()
});
router.afterEach((to,form,next)=>{window.scrollTo(0,0)});
//axios
import axios from "./tools/axiosTool"
Vue.prototype.$http=axios;

// 设置proxyTable变量，主要解决打包上线时替换回原来的（这里是针对一个服务器上面部署）
Vue.prototype.$api = process.env.NODE_ENV === 'production' ? '' : '' 

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  data:{
    eventHelper:new Vue()
  },
  components: { App },
  template: '<App/>'
})
