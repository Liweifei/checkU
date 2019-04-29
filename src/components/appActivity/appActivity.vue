<template>
    <div class="appActivity">
        <!-- 头部 -->
        <app-header not-index="true"></app-header>
        <!-- 内容区 -->
        <search-input placeholder="请输入活动关键词"></search-input>
        <ul class="contain">
            <li v-for="(item,index) in typeList">
                <div class="info">
                    <router-link :to="item.url">
                        <el-image :src="item.img"></el-image>
                    </router-link>
                    <router-link :to="item.url">
                        <p>{{item.label}}</p>
                    </router-link>
                </div>
            </li>
        </ul>
        <!-- 底部 -->
        <app-footer></app-footer>
    </div>
</template>

<script type="text/javascript">
    import appHeader from "@/components/appHeader/appHeader";
    import appFooter from "@/components/appFooter/appFooter";
    import appSearchInput from "@/components/appSearchInput/appSearchInput";
    let self;
    export default{
        name: 'appActivity',
        data(){
            return{
                typeList:[
                    {
                        img:require("img/appActivity/hd01.png"),
                        label:"学科竞赛",
                        url:"/activityMain/disciplineCompetition"
                    },
                    {
                        img:require("img/appActivity/hd02.png"),
                        label:"志愿服务",
                        url:"/activityMain/disciplineCompetition"
                    },
                    {
                        img:require("img/appActivity/hd03.png"),
                        label:"科研项目",
                        url:"/activityMain/disciplineCompetition"
                    },
                    {
                        img:require("img/appActivity/hd04.png"),
                        label:"综合能力",
                        url:"/activityMain/disciplineCompetition"
                    },
                ]
            }
        },
        methods: {
        },
        mounted(){
            self=this;
        },
        components:{
            "app-header":appHeader,
            "app-footer":appFooter,   
            "search-input":appSearchInput,   
        }
    }

</script>
<style lang="scss">
    @import './appActivity.scss';
</style>