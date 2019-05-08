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

// localStorage.setItem("checkUlang",JSON.stringify({'lang':'En'}))
// let checkUlang=localStorage.getItem("checkUlang");
// checkUlang=checkUlang?JSON.parse(checkUlang):{lang:"Cn"};

// router.beforeEach((to, from, next) => {
//   console.log(to.query.lang)
//   if(!to.query.lang){
//     next({
//       path:to.path,
//       query:checkUlang
//     });
//   }else{
//     next()
//   }
  
  // next({
  //   path:to.path,
  //   query:checkUlang
  // });
  // if (to.query.abc) {
  //     next();
  //     return;
  // };
  // if (from.query.abc) {
  //     let toQuery = JSON.parse(JSON.stringify(to.query));
  //     toQuery.abc = from.query.abc;
  //     next({
  //         path: to.path,
  //         query: toQuery
  //     })
  // } else {
  //     next()
  // }

// });
//axios
import axios from "./tools/axiosTool"
Vue.prototype.$http=axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
