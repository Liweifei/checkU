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
                    <button class="commentIcon"  @click="showCommentTool">
                        <img :src="commentIcon" alt="">{{$t('schoolDetail.commentText')}}
                    </button>
                    <button class="attention" @click.prevent="setCollectType">
                        <img :src="attentionType?attentioned:notAttention" alt="">{{attentionType?$t('schoolDetail.Collected'):$t('schoolDetail.Collect')}}
                    </button>
                </div>
                <ul class="tabs">
                    <li v-for="(item,index) in $t('schoolDetail.tabs')" :class="{'selected':item.type==thisRoute}" @click="changeView(item)">
                        <span>{{item.label}}</span>
                    </li>
                </ul>
                <div class="share">
                    {{$t('schoolDetail.share')}}：
                    <el-image :src="qq" class="qq" :class="{'enqq':$i18n.locale=='en'}"></el-image>
                    <el-image :src="wechat"></el-image>
                    <el-image :src="weibo"></el-image>
                </div>
            </div>
        </div>
        <router-view></router-view>
        <!-- 底部 -->
        <app-footer></app-footer>
        <!-- 评论工具 -->
        <app-commentTool ref="commentTool" @comment="commentNow"></app-commentTool>
    </div>
</template>

<script type="text/javascript">
    import appHeader from "@/components/appHeader/appHeader";
    import appFooter from "@/components/appFooter/appFooter";
    import appSearchInput from "@/components/appSearchInput/appSearchInput";
    import appCommentTool from "@/components/appCommentTool/appCommentTool";
    import merge from 'webpack-merge';
    let self;
    export default{
        name: 'schoolDetail',
        data(){
            return{
                id:null,
                cid:null,
                schoolImg:"",
                nameCn:"",
                nameEn:"",
                notAttention:require("img/appActivity/guanzhu_n.png"),
                attentioned:require("img/appActivity/guanzhu.png"),
                commentIcon:require("img/appActivity/comment.png"),
                attentionType:0,
                qq:require("img/\appHighSchool/qq.png"),
                wechat:require("img/\appHighSchool/wechat.png"),
                weibo:require("img/\appHighSchool/weibo.png"),
                thisRoute:"",
                query:null
            }
        },
        methods: {
            setCollectType(){//添加或取消收藏
                let url=!!self.attentionType?"/schoolCollect/cancelSchoolCollect":"/schoolCollect/addSchoolCollect";//已收藏则取消，反之添加
                let param=!!self.attentionType?{
                    collectId:self.cid
                }:{
                    schoolId:self.id,
                    userId:self.$store.getters.getUserId,
                }
                self.$http.post(self.$api+url,param).then(function (response) {
                    if(!!response){
                        if(response.data.code=="200"){
                            self.attentionType=!self.attentionType;
                            self.cid=self.attentionType?response.data.cid:null;
                            self.$router.replace({
                                query:merge(self.$route.query,{cid:1,attentionType:self.attentionType})
                            })
                            console.log(self.$route.query)
                        }
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },
            showCommentTool(){
                this.$refs["commentTool"].show();
            },
            changeView(item){//点击tab改变路由
                console.log(self.query)
                self.thisRoute=item.type;
                self.$router.replace({
                    path:item.path,
                    query:self.query
                })
            },
            changeViewFromPage(){//从其它界面进入时候需要改变路由
                self.thisRoute=self.$route.path;
            },
            commentNow({msg,img}){//点击评论
                let param={
                    schoolId: self.id,
                    userId: self.$store.getters.getUserId,
                    commentDetails: msg,
                    parentId:0,
                }
                self.$http.post(self.$api+'/schoolcomment/add', param).then(function (response) {
                    if(!!response){
                        if(response.data){
                            // self.$root.eventHelper.$emit("addSchoolComment",msg)
                        }
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        created(){
            self=this;
            console.log(self.$route);
            self.changeViewFromPage();
            self.query=self.$route.query;
            self.id=self.$route.query.id;
            self.cid=self.$route.query.cid;
            self.schoolImg=self.$route.query.schoolImg;
            self.nameCn=self.$route.query.nameCn;
            self.nameEn=self.$route.query.nameEn;
            self.attentionType=self.$route.query.attentionType;
            self.attentionType=typeof(self.attentionType)=="string"?self.attentionType=="false"?false:true:self.attentionType;
            console.log(self.$route.query.attentionType,typeof(self.$route.query.attentionType),self.attentionType)
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
            "app-commentTool":appCommentTool,
        }
    }

</script>
<style lang="scss">
    @import './schoolDetail.scss';
</style>