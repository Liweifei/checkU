<template>
	<div class="appHeader" :class="{'notIndexBg':notIndex}">
        <router-link to="/">
            <img :src="logo" alt="error" class="logo">
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
            <i class="el-icon-search iconItem"></i>
            <i class="el-icon-bell iconItem"></i>
            <img :src="headprotrait" alt="" class="headprotrait" v-if="loginType">
            <el-dropdown class="schoolWork">
                <span class="el-dropdown-link" v-if="loginType">
                    张3<i class="el-icon-arrow-down el-icon-caret-bottom"></i>
                </span>
                <span v-else>{{ $t("appHeader.wxLogin")}}</span>
                <el-dropdown-menu slot="dropdown">
                    <!-- <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item> -->
                </el-dropdown-menu>
            </el-dropdown>
            <div class="headItem changeLang">
                <span @click="$i18n.locale='en'">En</span>/<span @click="$i18n.locale='zh'">中</span>
            </div>
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
				logo:require("img/logo.png"),
                headprotrait:require("img/headProtrait.png"),
                // activitityList:[
                //     {
                //         url:"/appHighSchool",
                //         label:"学科竞赛"
                //     },
                //     {
                //         url:"/",
                //         label:"志愿服务"
                //     },
                //     {
                //         url:"/",
                //         label:"科研项目"
                //     },
                //     {
                //         url:"/",
                //         label:"综合能力"
                //     },
                // ]
			}
		},
        methods:{
            openUrl(url){
                this.$message(url);
                this.$router.push({
                    path:url
                })
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