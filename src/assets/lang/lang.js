
import Vue from 'vue'
import axios from "../../tools/axiosTool"
import VueI18n from 'vue-i18n'//多语言支持
import locale from 'element-ui/lib/locale'
import zh from '@/assets/lang/zh.js'
import en from '@/assets/lang/en.js'

Vue.use(VueI18n)
// ip设置语言
let checkUlang=null;
let ip=localStorage.getItem("Ip");
console.log(ip)
axios.get("/school/isChina", {
  params:{
    ip:ip
  }
}).then(function (response) {
  if(response.data[0].isChina){
    checkUlang=response.data[0].isChina.indexOf("中国")>=0?"zh":"en";
  }
}).catch(function (error) {
  console.log(error);
});
// 本地存储设置语言
let localLang=localStorage.getItem("checkUlang");
if(localLang=="en" || localLang=="zh"){
  checkUlang=localLang;
}
if(checkUlang==null){
  checkUlang="zh";
}
// 配置多语言
const i18n = new VueI18n({ 
    locale: checkUlang, // 当前语言标识 
    messages: { 
      'zh': zh, 
      'en': en 
    } 
}) 

locale.i18n((key, value) => i18n.t(key, value)) //element 做语言切换

export default i18n