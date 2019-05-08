
import Vue from 'vue'
import VueI18n from 'vue-i18n'//多语言支持
import locale from 'element-ui/lib/locale';
import zh from '@/assets/lang/zh.js'
import en from '@/assets/lang/en.js'

Vue.use(VueI18n)

// 配置多语言
const i18n = new VueI18n({ 
    locale: 'zh', // 当前语言标识 
    messages: { 
      'zh': zh, 
      'en': en 
    } 
}) 

locale.i18n((key, value) => i18n.t(key, value)) //element 做语言切换

export default i18n