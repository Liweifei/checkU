import axios from 'axios';
axios.defaults.baseURL = "http://115.29.67.135:8080"; // 配置axios请求的地址
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.crossDomain = true;

export default axios