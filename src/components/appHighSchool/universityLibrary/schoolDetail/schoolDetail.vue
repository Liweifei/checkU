<template>
    <div class="schoolDetail">
        <!-- 头部 -->
        <app-header not-index="true"></app-header>
        <!-- 内容区 -->
        <div class="header">
            <div class="contain">
                <div class="school">
                    <el-image :src="schoolImg"></el-image>
                    <span class="nameCn">{{nameCn}}</span>
                    <span class="nameEn">（{{nameEn}}）</span>
                    <button class="commentIcon">
                        <img :src="commentIcon" alt="">评论
                    </button>
                    <button class="attention">
                        <img :src="attentionType==1?attentioned:notAttention" alt="">已关注
                    </button>
                </div>
                <ul class="tabs">
                    <li v-for="(item,index) in tabs" :class="{'selected':item.type==thisRoute}" @click="changeView(item)">
                        <span>{{item.label}}</span>
                    </li>
                </ul>
                <div class="share">
                    分享到：
                    <el-image :src="qq" class="qq"></el-image>
                    <el-image :src="wechat"></el-image>
                    <el-image :src="weibo"></el-image>
                </div>
            </div>
        </div>
        <router-view></router-view>
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
        name: 'schoolDetail',
        data(){
            return{
                schoolImg:require("img/appHighSchool/onlyTest/xx_plsd.png"),
                nameCn:"普林斯顿大学",
                nameEn:"Princeton University",
                notAttention:require("img/appActivity/guanzhu_n.png"),
                attentioned:require("img/appActivity/guanzhu.png"),
                commentIcon:require("img/appActivity/comment.png"),
                attentionType:1,
                qq:require("img/\appHighSchool/qq.png"),
                wechat:require("img/\appHighSchool/wechat.png"),
                weibo:require("img/\appHighSchool/weibo.png"),
                tabs:[
                    {
                        label:"学校资料",
                        path:"/schoolDetail/schoolInfomation",
                        type:"/schoolDetail/schoolInfomation",
                    },
                    {
                        label:"专业设置",
                        path:"/schoolDetail/majorSetup",
                        type:"/schoolDetail/majorSetup",
                    },
                    {
                        label:"校友评论",
                        path:"/schoolDetail/alumniComments",
                        type:"/schoolDetail/alumniComments",
                    }
                ],
                thisRoute:"",
            }
        },
        methods: {
            changeView(item){//点击tab改变路由
                self.thisRoute=item.type;
                self.$router.replace({
                    path:item.path,
                })
            },
            changeViewFromPage(){//从其它界面进入时候需要改变路由
                self.thisRoute=self.$route.path;
            }
        },
        created(){
            self=this;
            self.changeViewFromPage();
        },
        watch:{
            $route(){
                this.changeViewFromPage();
            }
        },
        components:{
            "app-header":appHeader,
            "app-footer":appFooter,
            "search-input":appSearchInput,
        }
    }

</script>
<style lang="scss">
    @import './schoolDetail.scss';
</style>