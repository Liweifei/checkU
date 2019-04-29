<template>
	<div class="appHeader" :class="{'notIndexBg':notIndex}">
        <img :src="logo" alt="error" class="logo">
        <el-dropdown class="highSchool" @command="openUrl">
            <span class="el-dropdown-link">
                高校<i class="el-icon-arrow-down el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(item,index) in highSchoolList" :command="item.url">{{item.label}}</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown class="schoolWork">
            <span class="el-dropdown-link" @click="openUrl('/appActivity')">
                活动<i class="el-icon-arrow-down el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <span class="headItem">
            <router-link to="appMatching">高校匹配</router-link>
        </span>
        <span class="headItem">
            <router-link to="/">问答</router-link>
        </span>
        <span class="headItem">
            <router-link to="/">社区</router-link>
        </span>
        <div class="headerRight">
            <i class="el-icon-search iconItem"></i>
            <i class="el-icon-bell iconItem"></i>
            <img :src="headprotrait" alt="" class="headprotrait">
            <el-dropdown class="schoolWork">
                <span class="el-dropdown-link">
                    张3<i class="el-icon-arrow-down el-icon-caret-bottom"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script type="text/javascript">
	export default{
        name: 'appHeader',
        props:["notIndex"],
		data(){
			return{
				logo:require("img/logo.png"),
                headprotrait:require("img/headProtrait.png"),
                highSchoolList:[
                    {
                        url:"/appHighSchool",
                        label:"高校"
                    },
                    {
                        url:"/",
                        label:"高校榜单"
                    },
                    {
                        url:"/",
                        label:"专业"
                    },
                    {
                        url:"/",
                        label:"点评"
                    },
                ],
                activitityList:[
                    {
                        url:"/appHighSchool",
                        label:"学科竞赛"
                    },
                    {
                        url:"/",
                        label:"志愿服务"
                    },
                    {
                        url:"/",
                        label:"科研项目"
                    },
                    {
                        url:"/",
                        label:"综合能力"
                    },
                ]
			}
		},
        methods:{
            openUrl(url){
                this.$message(url);
                this.$router.push({
                    path:url
                })
            }
        }
	}

</script>
<style lang="scss">
    @import './appHeader.scss';
</style>