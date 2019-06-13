<template>
	<div class="appHeader" :class="{'notIndexBg':notIndex}">
        <router-link to="/">
            <img :src="$t('appHeader.logo')" alt="error" class="logo">
        </router-link>
        <el-dropdown class="highSchool" @command="openUrl">
            <span class="el-dropdown-link">
                {{ $t("appHeader.school")}}<i class="el-icon-arrow-down el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(item,index) in $t('appHeader.highSchoolList')" :command="item.url" :key="index">{{item.label}}</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <!-- <el-dropdown class="schoolWork">
            <span class="el-dropdown-link" @click="openUrl('/appActivity')">
                活动<i class="el-icon-arrow-down el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown> -->
        <span class="headItem schoolWork">
            <router-link :to="{name:'appActivity'}">{{ $t("appHeader.activity")}}</router-link>
        </span>
        <span class="headItem">
            <router-link :to="{name:'appMatching'}">{{ $t("appHeader.matching")}}</router-link>
        </span>
        <div class="headerRight">
            <i class="el-icon-search iconItem" @click="openUrl('/404')"></i>
            <i class="el-icon-bell iconItem" @click="$router.push({'name':'500'})"></i>
            <img :src="headprotrait" alt="" class="headprotrait" v-if="loginType">
            <el-dropdown class="schoolWork" v-if="loginType">
                <span class="el-dropdown-link">
                    张3<i class="el-icon-arrow-down el-icon-caret-bottom"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <!-- <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item> -->
                </el-dropdown-menu>
            </el-dropdown>
            <span class="schoolWork loginBtn" @click="wxLogin" v-else>{{ $t("appHeader.wxLogin")}}</span>
            <div class="headItem changeLang">
                <span @click="setLang('en')">En</span>/<span @click="setLang('zh')">中</span>
            </div>
            <div id="login_container"></div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import {mapState} from "vuex";
	export default{
        name: 'appHeader',
        props:["notIndex"],
		data(){
			return{
                headprotrait:require("img/headProtrait.png"),
			}
		},
        methods:{
            openUrl(url){
                this.$router.push({
                    path:url
                })
            },
            linkTo(url){
                this.$router.replace({
                    path:url
                })
            },
            setLang(type){
                if(type==this.$i18n.locale)return;
                localStorage.setItem("checkUlang",type)
                this.$i18n.locale=type;
                this.$root.eventHelper.$emit("reloadPage")
            },
            wxLogin(){//
                // let urls=encodeURI("http://www.03863.com/wxLogin/index.html");
                // let urls2="http%3a%2f%2fwww.03863.com%2fwxLogin%2findex.html";
                // let url1="https://open.weixin.qq.com/connect/qrconnect?appid=wx4e679768dcac7b78&redirect_uri=http%3a%2f%2fwww.03863.com%2fwxLogin%2findex.html&response_type=code&scope=snsapi_login";
                // let url3="https://open.weixin.qq.com/connect/qrconnect?appid=wxbdc5610cc59c1631&redirect_uri=https%3A%2F%2Fpassport.yhd.com%2Fwechat%2Fcallback.do&response_type=code&scope=snsapi_login"    
                // window.open(url1)
                // this.$http.get('https://open.weixin.qq.com/connect/qrconnect', {
                //     params:{//传参方式，必须用params关键字
                //         appid:"wx4e679768dcac7b78",
                //         redirect_uri:this.$http.defaults.baseURL,
                //         scope:"snsapi_login",
                //     }
                // }).then(function (response) {
                //     console.log(response);
                // })
                // .catch(function (error) {
                //     console.log(error);
                // });

                // var obj = new WxLogin
                // ({
                //     id:"login_container",//div的id
                //     appid: "wx4e679768dcac7b78",
                //     scope: "snsapi_login",//写死
                //     redirect_uri:encodeURI("http://www.03863.com/wxLogin/index.html") ,
                //     state: "",
                //     style: "black",//二维码黑白风格      
                // });
            }
        },
        computed:mapState({
            loginType:state=>state.userInfo.loginType
        }),
	}

</script>
<style lang="scss">
    @import './appHeader.scss';
</style>