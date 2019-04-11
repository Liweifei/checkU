<template>
    <div class="home">
        <app-header></app-header>
        <!-- 轮播 -->
        <div class="carouselBox">
            <div class="carousel">
                <el-carousel arrow="never" :interval="100000">
                    <el-carousel-item v-for="(item,index) in carouselList" :key="index">
                        <img  :style="'background-image:url('+item+')'">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="searchTools">
                <div class="searchBox">
                    <ul class="type">
                        <li v-for="(item,index) in searchTypeList" :class="{'typeSelected':typeSelected==item.value}" @click="choseSearchType(item.value)">{{item.label}}</li>
                    </ul>
                    <el-form ref="form" :model="form">
                        <el-form-item>
                            <div class="searchIcon">
                                <i class="el-icon-search"></i>
                            </div>
                            <el-input v-model="form.name" placeholder="搜索你感兴趣的资讯"></el-input>
                            <button type="button">搜索</button>
                        </el-form-item>
                    </el-form>
                    <div class="btnBox">
                        <div class="searchIcon">
                            <i></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 主内容 -->
        <div class="containMain">
            <!-- 第一排功能 -->
            <div class="headerFunction">
                <div class="newAnnouncement">
                    <div class="moduleHead">
                        <span class="headIcon">
                            <i class="el-icon-bell"></i>
                        </span>
                        最新公告
                    </div>
                    <ul class="list">
                        <li v-for="(item,index) in newAnnouncementList">
                            <i class="el-icon-arrow-right"></i>
                            {{item}}
                        </li>
                    </ul>
                    <ul class="otherFunction">
                        <li v-for="(item,index) in otherFunctionList">
                            <img :src="item.img" alt="error">
                            {{item.label}}
                        </li>
                    </ul>
                </div>
                <ul class="goOtherSys">
                    <li v-for="(item,index) in goOtherSysList">
                        <div class="imgBox">
                            <img :src="item.img" alt="error">
                        </div>
                        <div class="name">{{item.label}}</div>
                    </li>
                </ul>
            </div>
            <!-- 高校社区 -->
            <div class="highSchool">
                <div class="moduleHead moduleHeadBorder">
                    <span class="headIcon">
                        <i class="el-icon-goods"></i>
                    </span>
                    高校社区
                    <span class="more">更多>></span>
                </div>
                <ul class="main">
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import appHeader from "@/components/appHeader/appHeader";
    export default{
        name: 'Home',
        data(){
            return{
                carouselList:[require("img/banner01.jpg"),require("img/banner01.jpg")],
                searchTypeList:[
                    {
                        label:"全部",
                        value:"all"
                    },
                    {
                        label:"高校",
                        value:"highSchool"
                    },
                    {
                        label:"专业",
                        value:"major"
                    },
                    {
                        label:"问答",
                        value:"qa"
                    },
                ],
                typeSelected:"all",
                form:{
                    name:""
                },
                newAnnouncementList:["U.S.News2019全美大学排名公布！","选校系统遇上大数据，选校也能智能化","暑研邮件需要注意什么呢？大概需要提到哪些…"],
                otherFunctionList:[
                    {
                        label:"热门问答",
                        img:require("img/rmwd.png")
                    },
                    {
                        label:"高校匹配",
                        img:require("img/gxpp.png")
                    },
                    {
                        label:"学校点评",
                        img:require("img/xxdp.png")
                    }
                ],
                goOtherSysList:[
                    {
                        label:"进入院校库",
                        img:require("img/yxk.png")
                    },
                    {
                        label:"计算GPA",
                        img:require("img/GPA.png")
                    },
                    {
                        label:"进入择校系统",
                        img:require("img/zxxt.png")
                    }
                ],
            }
        },
        methods: {
            choseSearchType(type){
                this.typeSelected=type;
            }
        },
        mounted(){
            
        },
        components:{
            "app-header":appHeader,
        }
    }

</script>
<style lang="scss">
    @import './appHome.scss';
</style>