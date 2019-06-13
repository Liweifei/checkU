<template>
    <div class="activityDetail" @scroll="scrollEvent">
        <!-- 头部 -->
        <app-header not-index="true"></app-header>
        <!-- 内容区 -->
        <div class="fixedHeader" v-show="fixedHeaderShow">
            <div class="containMain">
                <span class="nameCn">{{nameCn}}</span>
                <span class="nameEn">（{{nameEn}}）</span>
                <div class="btnGroup">
                    <button class="attention" @click="setCollectType">
                        <img :src="!!attentionType?attentioned:notAttention" alt="">{{!!attentionType?$t('activityDetail.Collected'):$t('activityDetail.Collect')}}
                    </button>
                    <button class="commentIcon" @click="showCommentTool">
                        <img :src="commentIcon" alt="">{{$t('activityDetail.commentText')}}
                    </button>
                </div>
            </div>
        </div>
        <div class="head">
            <div class="containMain">
                <div class="carousel">
                    <el-carousel arrow="never" :interval="100000">
                        <el-carousel-item v-for="(item,index) in carouselList" :key="index">
                            <el-image :src="item" fit="cover"></el-image>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="right">
                    <div class="name">
                        <h3 class="nameCn">{{$i18n.locale=='en'?nameEn:nameCn}}</h3>
                        <h3 class="nameEn" v-if="$i18n.locale=='zh'">{{nameEn}}</h3>
                    </div>
                    <div class="btnGroup">
                        <button class="attention" @click="setCollectType">
                            <img :src="attentionType==1?attentioned:notAttention" alt="">{{attentionType==1?$t('activityDetail.Collected'):$t('activityDetail.Collect')}}
                        </button>
                        <button class="commentIcon" @click="showCommentTool">
                            <img :src="commentIcon" alt="">{{$t('activityDetail.commentText')}}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="containMain">
            <div class="introduction" :class="{'scientificProject':$route.params.type=='scientificProject' && $i18n.locale=='en'}">
                <h2 class="title">{{$t('activityDetail.introduction')}}</h2>
                <ul class="otherInfo" :class="{'ohterInfoEn':$i18n.locale=='en'}" v-if="$route.params.type=='disciplineCompetition'">
                    <li><span class="itemName">{{$t('activityDetail.activityTime')}}：</span>{{ohterInfo.activityTime}}</li>
                    <li><span class="itemName">{{$t('activityDetail.applyTime')}}：</span>{{ohterInfo.applyTime}}</li>
                    <li><span class="itemName">{{$t('activityDetail.applyType')}}：</span>{{ohterInfo.applyType}}</li>
                    <li><span class="itemName">{{$t('activityDetail.website')}}：</span><a :href="ohterInfo.website" class="website">{{ohterInfo.website}}</a></li>
                </ul>
                <ul class="otherInfo" v-if="$route.params.type=='voluntaryService'">
                    <li><span class="itemName">{{$t('activityDetail.activityTime')}}：</span>{{ohterInfo.activityTime}}</li>
                    <li><span class="itemName">{{$t('activityDetail.website')}}：</span><a :href="ohterInfo.website" class="website">{{ohterInfo.website}}</a></li>
                </ul>
                <ul class="otherInfo" v-if="$route.params.type=='scientificProject'">
                    <li><span class="itemName">{{$t('activityDetail.address')}}：</span>{{ohterInfo.activityTime}}</li>
                    <li><span class="itemName">{{$t('activityDetail.PlanRecruit')}}：</span>{{ohterInfo.activityTime}}</li>
                    <li><span class="itemName">{{$t('activityDetail.serviceObj')}}：</span>{{ohterInfo.activityTime}}</li>
                    <li><span class="itemName">{{$t('activityDetail.Recruited')}}：</span>{{ohterInfo.activityTime}}</li>
                    <li><span class="itemName">{{$t('activityDetail.activityDate')}}：</span>{{ohterInfo.activityTime}}</li>
                    <li><span class="itemName">{{$t('activityDetail.jobDescription')}}：</span>{{ohterInfo.activityTime}}</li>
                    <li><span class="itemName">{{$t('activityDetail.releaseDate')}}：</span>{{ohterInfo.activityTime}}</li>
                    <li><span class="itemName">{{$t('activityDetail.PostConditions')}}：</span>{{ohterInfo.applyTime}}</li>
                    <li><span class="itemName">{{$t('activityDetail.volunteerProtection')}}：</span>{{ohterInfo.applyType}}</li>
                    <li><span class="itemName">{{$t('activityDetail.website')}}：</span><a :href="ohterInfo.website" class="website">{{ohterInfo.website}}</a></li>
                </ul>
            </div>
            <div class="comment">
                <el-input :placeholder="$t('activityDetail.placeholder')" v-model="comment"></el-input>
                <el-upload
                    class="upload"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                    list-type="picture-card">
                    <img :src="uploadIcon" alt="" class="uploadIcon">
                    <p class="uploadLabel">{{$t('activityDetail.addImgText')}}</p>
                </el-upload>
                <el-button @click="commentNow2">{{$t('activityDetail.commentText')}}</el-button>
            </div>
            <div class="studentsComment">
                <h2 class="title">{{$t('activityDetail.studentCommentText')}}</h2>
                <ul class="commentList">
                    <li v-for="(item,index) in commentList">
                        <el-image :src="item.headProtrait" class="headProtrait" :key="index"></el-image>
                        <div class="info">
                            <h3 class="name">{{item.name}}</h3>
                            <p class="time">{{item.time}}</p>
                            <p class="content">{{item.content}}</p>
                            <div class="imgList">
                                <el-image :src="list" class="commemtImg" v-for="(list,listIndex) in item.imgList" :key="listIndex"></el-image>
                            </div>
                            <div class="count">
                                <span class="viewCount">
                                    {{$t('activityDetail.viewCount')}}{{item.viewCount}}{{$t('activityDetail.unit')}}
                                </span>
                                <span class="likeNum">
                                    <img :src="item.likeType==1?likedNumIcon:likeNumIcon" alt="">
                                    {{item.likeNum}}
                                </span>
                                <span class="commentNum">
                                    <img :src="commentNumIcon" alt="" @click="showCommentTool2(item)">
                                    {{item.commentNum}}
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
                <p class="noMore">{{$t('activityDetail.noMore')}}</p>
            </div>
        </div>
        <!-- 底部 -->
        <app-footer></app-footer>
        <!-- 评论工具 -->
        <app-commentTool ref="commentTool" @comment="commentNow"></app-commentTool>
    </div>
    
</template>

<script type="text/javascript">
    import appHeader from "@/components/appHeader/appHeader";
    import appFooter from "@/components/appFooter/appFooter";
    import appCommentTool from "@/components/appCommentTool/appCommentTool";
    let self;
    export default{
        name: 'activityDetail',
        data(){
            return{
                id:null,
                cid:null,
                activity_id:null,
                fixedHeaderShow:false,
                carouselList:[
                    require("img/appActivity/onlyTest/imo_01.png"),
                    require("img/appActivity/hd03.png"),
                ],
                fileList:[],
                notAttention:require("img/appActivity/guanzhu_n.png"),
                attentioned:require("img/appActivity/guanzhu.png"),
                commentIcon:require("img/appActivity/comment.png"),
                attentionType:0,
                nameCn:"国际数学奥林匹克竞赛",
                nameEn:"International Mathematical Olympiad",
                ohterInfo:{
                    activityTime:"2019/10/08",
                    applyTime:"2019/07/03-2019/08/03",
                    applyType:"学校统一报名",
                    website:"http://www.imo-official.org",
                },
                comment:"",
                uploadIcon:require("img/appActivity/photo.png"),
                commentNumIcon:require("img/appActivity/pinglun.png"),
                likeNumIcon:require("img/appActivity/zan_n.png"),
                likedNumIcon:require("img/appActivity/zan.png"),
                commentList:[
                    // {
                    //     headProtrait:require("img/appActivity/onlyTest/imo_01.png"),
                    //     name:"Marry",
                    //     time:"3天前",
                    //     content:"准备一年了，终于开始报名了！",
                    //     viewCount:"45",
                    //     commentNum:"0",
                    //     likeNum:"12",
                    //     likeType:"0",
                    //     imgList:[]
                    // }
                ],
                commentType:"",
                thisCommentItem:"",
            }
        },
        methods: {
            getInfo(){//获取详细信息
                self.$http.get(self.$api+'/activitydetails/selectActivityById', {
                    params:{
                        userId:self.$store.getters.getUserId,
                        language:self.$i18n.locale,
                        activity_id:self.id,
                    }
                }).then(function (response) {
                    if(!!response){
                        let res=response.data;
                        if(res.code=="200"){
                            // attentionType:0,
                            // nameCn:"国际数学奥林匹克竞赛",
                            // nameEn:"International Mathematical Olympiad",
                            // ohterInfo:{
                            //     activityTime:"2019/10/08",
                            //     applyTime:"2019/07/03-2019/08/03",
                            //     applyType:"学校统一报名",
                            //     website:"http://www.imo-official.org",
                            // },
                            let acitveDetail=res.activityDetail[0];
                            self.attentionType=acitveDetail.isCollect=="true"?true:false;
                            self.nameCn=acitveDetail.name_zh;
                            self.cid=acitveDetail.cid;
                            self.activityId=acitveDetail.id;
                            self.nameEn=acitveDetail.name_en;
                            self.ohterInfo.activityTime=acitveDetail.activity_time;
                            self.ohterInfo.applyTime=acitveDetail.registration_starttime+"-"+acitveDetail.registration_endtime;
                            self.ohterInfo.applyType=acitveDetail.registration_type;
                            self.ohterInfo.website=acitveDetail.website_url;

                            // 评论
                            //     headProtrait:require("img/appActivity/onlyTest/imo_01.png"),
                            //     name:"Marry",
                            //     time:"3天前",
                            //     content:"准备一年了，终于开始报名了！",
                            //     viewCount:"45",
                            //     commentNum:"0",
                            //     likeNum:"12",
                            //     likeType:"0",
                            //     imgList:[]
                            self.commentList=[];
                            res.activityCommentList.forEach((item)=>{
                                let likeType=!!item.allcommentids.split(",").find(id=>self.$store.getters.getUserId==id)?1:0;
                                self.commentList.push({
                                    headProtrait:item.headUrl,
                                    name:item.nick_name,
                                    time:item.create_time,
                                    content:item.comment_details,
                                    viewCount:item.view_count?item.view_count:0,
                                    commentNum:parseInt(item.child_num),
                                    likeNum:item.num,
                                    comment_id:item.id,
                                    likeType:likeType,
                                    imgList:[],
                                })
                            })
                        }
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },
            setCollectType(){//添加或取消收藏
                let url=!!self.attentionType?"/activityCollect/cancelActivityCollect":"/activityCollect/addActivityCollect";//已收藏则取消，反之添加
                let param=!!self.attentionType?{
                    collectId:self.cid
                }:{
                    activityId:self.id,
                    userId:self.$store.getters.getUserId,
                }
                self.$http.post(self.$api+url,param).then(function (response) {
                    if(!!response){
                        if(response.data.code=="200"){
                            self.attentionType=!self.attentionType;
                            self.cid=self.attentionType?response.data.cid:null;
                            console.log(self.$route.query)
                        }
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },
            showCommentTool2(item){
                self.commentType="list";
                self.thisCommentItem=item;
                self.$refs["commentTool"].show();
            },
            showCommentTool(){
                self.commentType="activity";
                this.$refs["commentTool"].show();
            },
            commentNow2(){//本页评论
                if(!self.comment){
                    self.$message({
                        message: "请填写评论内容！",
                        type: 'warning'
                    });
                    return;
                }
                self.commentNow({msg:self.comment})
            },
            commentNow({msg,img}){//点击评论
                let param=self.commentType=="activity"?{
                    activityId: self.activityId,
                    userId: self.$store.getters.getUserId,
                    commentDetails: msg,
                    parentId:0,
                }:{
                    activityId: self.activityId,
                    userId: self.$store.getters.getUserId,
                    commentDetails: msg,
                    parentId:self.thisCommentItem.comment_id,
                }
                self.$http.post(self.$api+'/activitycomment/add', param).then(function (response) {
                    if(!!response){
                        if(response.data){
                            if(self.commentType=="list"){
                                self.thisCommentItem.commentNum++;
                            }
                        }
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },
            choseAreaType(type){
                self.areaSelected=type;
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            scrollEvent(e){
                if(e.srcElement.scrollTop<338){
                    if(self.fixedHeaderShow==true){
                        self.fixedHeaderShow=false;
                    }
                }else{
                    if(self.fixedHeaderShow==false){
                        self.fixedHeaderShow=true; 
                    }
                }
            }
        },
        created(){
            self=this;
            self.id=self.$route.query.id;
            self.getInfo();
        },
        components:{
            "app-header":appHeader,
            "app-footer":appFooter,
            "app-commentTool":appCommentTool,
        }
    }

</script>
<style lang="scss">
    @import './activityDetail.scss';
</style>