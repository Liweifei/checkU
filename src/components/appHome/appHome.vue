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
                            <span class="circle"></span>
                            {{item}}
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
                                        <el-button size="mini">关注</el-button>
                                    </div>
                                    <p class="descrition">{{item.descrition}}</p>
                                    <ul class="otherInfo">
                                        <li>参与{{item.participants}}</li>
                                        <li>问题{{item.question}}</li>
                                        <li>回答{{item.qa}}</li>
                                    </ul>
                                </div>
                            </li>
                        </el-carousel-item>
                    </el-carousel>
                </ul>
            </div>
            <!-- 热门话题 -->
            <div class="hotTopic">
                <div class="leftContain">
                    <div class="moduleHead moduleHeadBorder">
                        <span class="headIcon">
                            <i class="el-icon-star-on"></i>
                        </span>
                        热门话题
                        <span class="more">更多>></span>
                    </div>
                    <ul class="topicList">
                        <li v-for="(item,index) in topicList">
                            <h3>{{item.title}}</h3>
                            <div class="info">
                                <img :src="item.personImg" alt="error">
                                <span>{{item.person}}</span>
                                <span class="likeNum">
                                    <i class="el-icon-star-off"></i>{{item.likeNum}}
                                </span>
                                <span class="commentNum">
                                    <i class="el-icon-info"></i>{{item.commentNum}}
                                </span>
                            </div>
                            <p class="content">{{item.content | wordLengthControl}}</p>
                        </li>
                    </ul>
                </div>
                <div class="rightContain">
                    <div class="moduleHead moduleHeadBorder">
                        <span class="headIcon">
                            <i class="el-icon-star-on"></i>
                        </span>
                        <ul class="studyTypeList">
                            <li v-for="(item,index) in studyTypeList" :class="{'studyTypeSelected':studyTypeSelected==item.value}" @click="studyTypeSelected=item.value">{{item.label}}</li>
                        </ul>
                    </div>
                    <div class="content">
                        <ul v-for="(item,index) in studyTypeContentList">
                            <li v-for="(list,listIndex) in item.data" class="wEllipsis">
                                <span class="circle"></span>{{list}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- 底部 -->
        <app-footer></app-footer>
    </div>
</template>

<script type="text/javascript">
    import appHeader from "@/components/appHeader/appHeader";
    import appFooter from "@/components/appFooter/appFooter";
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
                newAnnouncementList:[
                    "U.S.News2019全美大学排名公布！",
                    "选校系统遇上大数据，选校也能智能化",
                    "暑研邮件需要注意什么呢？大概需要提到哪些…",
                    "美国留学分享会",
                    "US STAR藤校前招生官巡讲",
                    "2019澳洲名校招生说明会",
                    ],
                goOtherSysList:[
                    {
                        label:"进入院校库",
                        img:require("img/yxk.jpg")
                    },
                    {
                        label:"进入择校系统",
                        img:require("img/zxxt.jpg")
                    }
                ],
                schoolList:[
                    {
                        nameCn:"哈佛大学",
                        nameEn:"Harvard University",
                        followType:false,//关注
                        descrition:"私立研究型学院，共出过8位美国总统和数十位诺贝尔、普利策奖获得者，也是惠…",
                        participants:"1K+",//参与
                        question:89,//问题
                        qa:209,//问答
                        img:require("img/xx_harvard.png"),

                    },
                    {
                        nameCn:"哥伦比亚大学",
                        nameEn:"Columbia University",
                        followType:false,//关注
                        descrition:"美国历史最悠久的五所大学之一，也是培养诺贝尔奖获得者最多的大学之一…",
                        participants:491,//参与
                        question:76,//问题
                        qa:257,//问答
                        img:require("img/xx_Columbia.png"),

                    },
                    {
                        nameCn:"麻省理工大学",
                        nameEn:"Massachusetts Institute of…",
                        followType:false,//关注
                        descrition:"2017-18年US News全美研究生院排名工程学第一、计算机科学第一 ，与斯坦福…",
                        participants:328,//参与
                        question:97,//问题
                        qa:224,//问答
                        img:require("img/xx_Massachusetts.png"),

                    },
                ],
                topicList:[
                    {
                        title:"赴美留学要提前准备什么？",
                        person:"邵明",
                        personImg:require("img/sm.jpg"),
                        commentNum:603,//评论数
                        likeNum:"1K",//点赞数
                        content:"1、申请费,申请人(学生)交给学校用于审核自己申请自己材料的费用。一般来说，美国的高中、本科和研究生阶段的申请费相差不是很大，一般是从30美元到75美元不等。根据统计，中国学生一般会申请8-10所学校，这样算下来，申请费用的花费在240美元到750美元这个区间。一般来说，美国的高中、本科和研究生阶段的申请费相差不是很大，一般是从30美元到75美元不等。根据统计，中国学生一般会申请8-10所学校，这样算下来，申请费用的花费在240美元到750美元这个区间。",
                    },
                    {
                        title:"哪些学校在人工智能专业方向更有竞争力？",
                        person:"Mary",
                        personImg:require("img/ma.jpg"),
                        commentNum:8,//评论数
                        likeNum:"39",//点赞数
                        content:"美国无疑是MIT最好，其次是斯坦福、卡内基梅隆、加州大学伯克利分校、华盛顿大学、德州大学奥斯丁分校、宾州大学、康奈尔等。排名是：1.东京大学2. Kyoto University 京都大学",
                    },
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
            }
        },
        methods: {
            choseSearchType(type){
                this.typeSelected=type;
            }
        },
        mounted(){
            
        },
        filters:{
            wordLengthControl(value){
                console.log(value.length)
                let words=value.length>150?value.substring(0,150)+"...":value;
                return words;
            }
        },
        components:{
            "app-header":appHeader,
            "app-footer":appFooter,
        }
    }

</script>
<style lang="scss">
    @import './appHome.scss';
</style>