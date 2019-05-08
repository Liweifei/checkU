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
                        <li v-for="(item,index) in $t('appHome.searchTypeList')" :class="{'typeSelected':typeSelected==item.value}" @click="choseSearchType(item.value)">{{item.label}}</li>
                    </ul>
                    <el-form ref="form" :model="form">
                        <el-form-item>
                            <div class="searchIcon">
                                <i class="el-icon-search"></i>
                            </div>
                            <el-input v-model="form.name" :placeholder="$t('appHome.placeholder')"></el-input>
                            <button type="button">{{ $t("appHome.searchBoxText")}}</button>
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
                        {{ $t("appHome.news")}}
                    </div>
                    <ul class="list">
                        <li v-for="(item,index) in $t('appHome.newAnnouncementList')">
                            <span class="circle"></span>
                            {{item}}
                        </li>
                    </ul>
                </div>
                <ul class="goOtherSys">
                    <li v-for="(item,index) in $t('appHome.goOtherSysList')">
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
                    {{ $t("appHome.highSchool")}}
                    <span class="subTitle">{{ $t("appHome.subTitle")}}</span>
                    <span class="more">{{ $t("appHome.more")}}</span>
                </div>
                <ul class="main">
                    <el-carousel :autoplay="false">
                        <el-carousel-item v-for="ii in 3" :key="ii">
                            <li v-for="(item,index) in schoolList" class="schoolItem">
                                <div class="school">
                                    <div class="head">
                                        <img :src="item.img" alt="error" class="schoolImg">
                                        <div class="name">
                                            <p class="nameCn wEllipsis">{{item.nameCn}}</p>
                                            <p class="nameEn wEllipsis">{{item.nameEn}}</p>
                                        </div>
                                        <el-button size="mini">{{ $t("appHome.attentionBtn")}}</el-button>
                                    </div>
                                    <p class="descrition">{{item.descrition}}</p>
                                    <ul class="otherInfo">
                                        <li>{{ $t("appHome.join")}}{{item.participants}}</li>
                                        <li>{{ $t("appHome.qa")}}{{item.qa}}</li>
                                    </ul>
                                </div>
                            </li>
                        </el-carousel-item>
                    </el-carousel>
                </ul>
            </div>
            <!-- 校友评论 -->
            <div class="alumniComments">
                <h2 class="modelTitle">{{ $t("appHome.alumniComments")}}</h2>
                <ul class="commentList">
                    <li v-for="(item,index) in commentList" class="commentItem">
                        <el-image :src="item.headProtrait" class="headProtrait" :key="index"></el-image>
                        <div class="info">
                            <h3 class="name">{{item.name}}</h3>
                            <p class="school">{{ $t("appHome.commentOn")}}<span>{{item.school}}</span></p>
                            <p class="content">{{item | filterWords}}</p>
                            <span class="showAll" v-if="item.content.length>255" @click="item.showAll=!item.showAll">{{item.showAll?"收起":"阅读全文"}}<el-image :src="item.showAll?iconShang:iconXia"></el-image></span>
                            <div class="imgList" v-show="item.imgList.length>0">
                                <el-carousel :autoplay="false" indicator-position="none" :arrow="item.imgList.length>1?'hover':'never'">
                                    <el-carousel-item v-for="(listItem,listItenIndex) in item.imgList" :key="listItenIndex">
                                        <el-image :src="list" class="commemtImg" v-for="(list,listIndex) in listItem" :key="listIndex"></el-image>
                                    </el-carousel-item>
                                </el-carousel>
                            </div>
                            <div class="count">
                                <span class="time">
                                    {{ $t("appHome.publishIn")}}{{item.time}}
                                </span>
                                <span class="viewCount">
                                    {{ $t("appHome.viewCount")}}{{item.viewCount}}{{ $t("appHome.unit")}}
                                </span>
                                <span class="share">
                                    <img :src="shareIcon" alt="">{{ $t("appHome.share")}}
                                </span>
                                <span class="likeNum">
                                    <img :src="item.likeType==1?likedNumIcon:likeNumIcon" alt="">
                                    {{item.likeNum}}
                                </span>
                                <span class="commentNum">
                                    <img :src="commentNumIcon" alt="" @click="showCommentTool">
                                    {{item.viewCount}}
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="loadMore">
                    <span>{{ $t("appHome.loadMore")}}</span>
                </div>
            </div>
        </div>
        <!-- 底部 -->
        <app-footer></app-footer>
        <!-- 评论工具 -->
        <app-commentTool ref="commentTool"></app-commentTool>
    </div>
</template>

<script type="text/javascript">
    import appHeader from "@/components/appHeader/appHeader";
    import appFooter from "@/components/appFooter/appFooter";
    import appCommentTool from "@/components/appCommentTool/appCommentTool";
    export default{
        name: 'Home',
        data(){
            return{
                carouselList:[require("img/banner01.jpg"),require("img/banner01.jpg")],
                // searchTypeList:[
                //     {
                //         label:"全部",
                //         value:"all"
                //     },
                //     {
                //         label:"高校",
                //         value:"highSchool"
                //     },
                //     {
                //         label:"专业",
                //         value:"major"
                //     },
                //     {
                //         label:"问答",
                //         value:"qa"
                //     },
                // ],
                typeSelected:"all",
                form:{
                    name:""
                },
                // newAnnouncementList:[
                //     "U.S.News2019全美大学排名公布！",
                //     "选校系统遇上大数据，选校也能智能化",
                //     "暑研邮件需要注意什么呢？大概需要提到哪些…",
                //     "美国留学分享会",
                //     "US STAR藤校前招生官巡讲",
                //     "2019澳洲名校招生说明会",
                // ],
                // goOtherSysList:[
                //     {
                //         label:"进入院校库",
                //         img:require("img/yxk.jpg")
                //     },
                //     {
                //         label:"进入择校系统",
                //         img:require("img/zxxt.jpg")
                //     }
                // ],
                schoolList:[
                    {
                        nameCn:"哈佛大学",
                        nameEn:"Harvard University",
                        followType:false,//关注
                        descrition:"私立研究型学院，共出过8位美国总统和数十位诺贝尔、普利策奖获得者，也是惠…",
                        participants:"1K+",//参与
                        qa:209,//问答
                        img:require("img/xx_harvard.png"),

                    },
                    {
                        nameCn:"哥伦比亚大学",
                        nameEn:"Columbia University",
                        followType:false,//关注
                        descrition:"美国历史最悠久的五所大学之一，也是培养诺贝尔奖获得者最多的大学之一…",
                        participants:491,//参与
                        qa:257,//问答
                        img:require("img/xx_Columbia.png"),

                    },
                    {
                        nameCn:"麻省理工大学",
                        nameEn:"Massachusetts Institute of…",
                        followType:false,//关注
                        descrition:"2017-18年US News全美研究生院排名工程学第一、计算机科学第一 ，与斯坦福…",
                        participants:328,//参与
                        qa:224,//问答
                        img:require("img/xx_Massachusetts.png"),
                    },
                ],
                commentNumIcon:require("img/appActivity/pinglun.png"),
                likeNumIcon:require("img/appActivity/zan_n.png"),
                likedNumIcon:require("img/appActivity/zan.png"),
                shareIcon:require("img/appHighSchool/share.png"),
                iconShang:require("img/shang.png"),
                iconXia:require("img/xia.png"),
                commentList:[
                    {
                        headProtrait:require("img/appActivity/onlyTest/imo_01.png"),
                        name:"Marry",
                        school:"普林斯顿大学",
                        content:"我最喜欢普林的一点就是虽然所有的学生生活和做事都非常的driven，但并没有所谓的必须去“融入”的“主流”。学术上无论你是个码农，还是醉心理论物理，还是喜欢研究拉丁经典，还是专注于creative writing，还是研究东亚历史，还是斯拉夫文学，在校园里和别的学生谈起你所学的东西的时候，别人都会真心觉得很cool，甚至会想听你继续讲细节。而校园日常上无论是当个geek，当个橄榄球校队的主力，喜欢加入greek society常常party，还是喜欢喝下午茶纵横古今，都不会觉得是个outcast，也不会成为所有人追求的明星。简单的说就是每个人都能找到自己舒服的圈子和朋友，但同时又对别的圈子和朋友报以开放而欣赏的态度，从某种意义上说这真的有点像与世隔绝的乌托邦式的社会，因此普林也被自己的学生戏称为orange bubble。关于普林的气氛其实有各种传言，比如说这是最保守的常青藤校，有说这是非常elitist的地方，但我个人觉得其实这无非是个大家都能很舒服的找到自己想找到的位置，做自己想做的事情的地方罢了。",
                        showAll:false,
                        time:"2019-04-20",
                        viewCount:"45",
                        commentNum:"0",
                        likeNum:"12",
                        likeType:"0",
                        imgList:[
                            [
                                require("img/appActivity/hd01.png"),
                                require("img/appActivity/hd01.png"),
                                require("img/appActivity/hd01.png"),
                                require("img/appActivity/hd01.png"),
                                require("img/appActivity/hd01.png"),
                                require("img/appActivity/hd03.png")
                            ],
                            [
                                require("img/appActivity/onlyTest/imo_01.png")
                            ]
                        ]
                    },
                    {
                        headProtrait:require("img/appActivity/onlyTest/imo_01.png"),
                        name:"王伟",
                        school:"哈佛大学",
                        content:"听说今年的试题比往年难多了，挑战啊…",
                        showAll:false,
                        time:"2019-04-20",
                        viewCount:"45",
                        commentNum:"0",
                        likeNum:"105",
                        likeType:"0",
                        imgList:[
                            [
                                require("img/appActivity/hd01.png"),
                                require("img/appActivity/hd03.png")
                            ]
                        ]
                    },
                    {
                        headProtrait:require("img/appActivity/onlyTest/imo_01.png"),
                        name:"王伟",
                        school:"普林斯顿大学",
                        content:"有些人为什么那么优秀？为什么那么成功？而大部分人都是那么平庸，原因在那？我觉得关键的原因在于优秀的人、成功的人比平常的人多努力一点，早计划一点，也就是说善于改变自己的惰性、积极的面对人生、面对现实，他们不会那么遵循原来的本性，而是不断的向美好目标迈进；所以他们会比一般人创造更多财富，做出令一般人无法想象的成绩和效果，让人羡慕和敬仰。",
                        showAll:false,
                        time:"2019-04-20",
                        viewCount:"45",
                        commentNum:"0",
                        likeNum:"1k+",
                        likeType:"1",
                        imgList:[

                        ]
                    }
                ],
                studyTypeList:[
                    {
                        label:"留学",
                        value:"studyAbroad"
                    },
                    {
                        label:"选校",
                        value:"chooseSchool"
                    },
                    {
                        label:"选专业",
                        value:"chooseMajor"
                    }
                ],
                studyTypeSelected:"studyAbroad",
                studyTypeContentList:[
                    {
                        type:"studyAbroad",
                        data:[
                            "史上最全的留学申请全套课程",
                            "最值得收藏的2019出国选校与定位攻略",
                            "九月不选校，十月徒伤悲 | 选校定位专业群",
                            "美国本科早申请分析，EA/ED规则解读",
                            "2019法国研究生留学政策变动，必看！",
                            "【HOT】2018高考生留学美国四大方案",
                            "【HOT】美国名校有哪些录取标准？",
                            "留学之热门专业PK冷门专业",
                            "2019年英国本科留学申请方案",
                            "美国留学必看时间指南！",
                        ]
                    },
                    {
                        type:"chooseSchool"
                    },
                    {
                        type:"chooseMajor"
                    }
                ],
                commentVisible:false,
                totalComments:[]
            }
        },
        methods: {
            choseSearchType(type){
                this.typeSelected=type;
            },
            showCommentTool(){
                this.$refs["commentTool"].show();
            }
        },
        mounted(){
            
        },
        filters:{
            filterWords(item){
                if(item.content.length<255 ||  item.showAll){
                    return item.content;
                }else{
                    let words="";
                    if(item.content.length>255){
                        words=item.content.substr(0,255)+"..."
                    }
                    return words;
                }
            },
            wordLengthControl(value){
                console.log(value.length)
                let words=value.length>150?value.substring(0,150)+"...":value;
                return words;
            }
        },
        components:{
            "app-header":appHeader,
            "app-footer":appFooter,
            "app-commentTool":appCommentTool,
        }
    }

</script>
<style lang="scss">
    @import './appHome.scss';
</style>