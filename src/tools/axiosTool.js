import axios from 'axios';
import { Loading } from 'element-ui';
import router from '../router';
const qs = require('qs');//解决后端取不到值问题
// axios.defaults.baseURL = "https://192.168.2.171:8443"; // 配置axios请求的地址
axios.defaults.baseURL = process.env.NODE_ENV === 'production'?"http://115.29.67.135:8080":"http://192.168.2.171:8080"; // 配置axios请求的地址
// axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';
axios.defaults.crossDomain = true;
axios.serverUrl = process.env.NODE_ENV === 'production'?"http://115.29.67.135:8080":"http://192.168.2.171:8080";
let loadingNum=0;
let loadingInstance=null;

//配置发送请求前的拦截器 可以设置token信息 格式化参数等
axios.interceptors.request.use(config => {
    //loading开始
    if(config.method=="post")config.data=qs.stringify(config.data);
    showLoading();
    return config;
 }, error => {
     //出错，也要loading结束
     hideLoading();
     return Promise.reject(error);
 });
 
 axios.interceptors.response.use(
    res => {
        // if (res.data.code === -2004) {
        //     // 登录失效，清楚token，刷新页面
        //     util.localStorage.remove('token');
        //     window.location.href = window.location.origin + "/#/login";
        //     return;
        // }
        // if (res.data.code === -2006) {
        //     window.location.href = window.location.origin + "/#/unauthorizedPage";
        //     return;
        // }
        // if (res.status !== 200 || res.data.code === '-1') {
        //     return Promise.reject(res)
        // }
        hideLoading();
        return res;
    },
    err => {
        hideLoading();
        if(err.response.status==500){
            router.push({
                path:"/500"
            })
        }else if(err.response.status==404){
            router.push({
                path:"/404"
            })
        }
        return Promise.reject(err)
    }
)

let showLoading=()=>{
    if (loadingNum === 0) {
        loadingInstance = Loading.service({ 
            fullscreen: true,
            background: "rgba(255,255,255,0.2)",
            // text: "努力加载中。。。",
        });
    }
    loadingNum++
}

let hideLoading=()=>{
    if (loadingNum <= 0) return
    loadingNum--;
    if (loadingNum === 0) {
        loadingInstance.close()
    }
}
export default axios