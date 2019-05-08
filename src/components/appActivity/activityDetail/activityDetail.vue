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
                    <button class="attention">
                        <img :src="attentionType==1?attentioned:notAttention" alt="">{{attentionType==1?$t('activityDetail.Collected'):$t('activityDetail.Collect')}}
                    </button>
                    <button class="commentIcon">
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
                        <h3 class="nameCn">{{nameCn}}</h3>
                        <h3 class="nameEn">{{nameEn}}</h3>
                    </div>
                    <div class="btnGroup">
                        <button class="attention">
                            <img :src="attentionType==1?attentioned:notAttention" alt="">{{attentionType==1?$t('activityDetail.Collected'):$t('activityDetail.Collect')}}
                        </button>
                        <button class="commentIcon">
                            <img :src="commentIcon" alt="">{{$t('activityDetail.commentText')}}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="containMain">
            <div class="introduction" :class="{'scientificProject':$route.params.type=='scientificProject' && $i18n.locale=='en'}">
                <h2 class="title">{{$t('activityDetail.introduction')}}</h2>
                <ul class="otherInfo" v-if="$route.params.type=='disciplineCompetition'">
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
                <el-button>{{$t('activityDetail.commentText')}}</el-button>
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
                                    <img :src="commentNumIcon" alt="">
                                    {{item.viewCount}}
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
    </div>
    
</template>

<script type="text/javascript">
    import appHeader from "@/components/appHeader/appHeader";
    import appFooter from "@/components/appFooter/appFooter";
    let self;
    export default{
        name: 'activityDetail',
        data(){
            return{
                fixedHeaderShow:false,
                carouselList:[
                    require("img/appActivity/onlyTest/imo_01.png"),
                    require("img/appActivity/hd03.png"),
                ],
                fileList:[],
                notAttention:require("img/appActivity/guanzhu_n.png"),
                attentioned:require("img/appActivity/guanzhu.png"),
                commentIcon:require("img/appActivity/comment.png"),
                attentionType:1,
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
                    {
                        headProtrait:require("img/appActivity/onlyTest/imo_01.png"),
                        name:"Marry",
                        time:"3天前",
                        content:"准备一年了，终于开始报名了！",
                        viewCount:"45",
                        commentNum:"0",
                        likeNum:"12",
                        likeType:"0",
                        imgList:[]
                    },
                    {
                        headProtrait:require("img/appActivity/onlyTest/imo_01.png"),
                        name:"王伟",
                        time:"1-18",
                        content:"听说今年的试题比往年难多了，挑战啊…",
                        viewCount:"45",
                        commentNum:"0",
                        likeNum:"105",
                        likeType:"0",
                        imgList:[
                            require("img/appActivity/hd01.png"),
                            require("img/appActivity/hd03.png")
                        ]
                    },
                    {
                        headProtrait:require("img/appActivity/onlyTest/imo_01.png"),
                        name:"王伟",
                        time:"1-18",
                        content:"有些人为什么那么优秀？为什么那么成功？而大部分人都是那么平庸，原因在那？我觉得关键的原因在于优秀的人、成功的人比平常的人多努力一点，早计划一点，也就是说善于改变自己的惰性、积极的面对人生、面对现实，他们不会那么遵循原来的本性，而是不断的向美好目标迈进；所以他们会比一般人创造更多财富，做出令一般人无法想象的成绩和效果，让人羡慕和敬仰。",
                        viewCount:"45",
                        commentNum:"0",
                        likeNum:"1k+",
                        likeType:"1",
                        imgList:[

                        ]
                    }
                ]
            }
        },
        methods: {
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
        mounted(){
            self=this;
        },
        components:{
            "app-header":appHeader,
            "app-footer":appFooter,
        }
    }

</script>
<style lang="scss">
    @import './activityDetail.scss';
</style>