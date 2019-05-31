<template>
    <div class="home">
        <app-header></app-header>
        <!-- 轮播 -->
        <div class="carouselBox">
            <div class="carousel">
                <el-carousel arrow="never" :interval="5000">
                    <el-carousel-item v-for="(item,index) in carouselList" :key="index">
                        <img  :src="item">
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
                            <a :href="item.link" target="_blank">
                                <span class="circle"></span>
                                {{item.label}}
                            </a>
                        </li>
                    </ul>
                </div>
                <ul class="goOtherSys">
                    <li v-for="(item,index) in $t('appHome.goOtherSysList')">
                        <router-link :to="item.link">
                            <div class="imgBox">
                                <img :src="item.img" alt="error">
                            </div>
                            <div class="name">{{item.label}}</div>
                        </router-link>
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
                        <el-carousel-item v-for="(list,listIndex) in schoolList" :key="listIndex">
                                <li v-for="(item,index) in list" class="schoolItem" @click="goInformation(item)">
                                    <div class="school">
                                        <div class="head">
                                            <!-- <img :src="item.image_url" alt="error" class="schoolImg"> -->
                                            <el-image :src="item.image_url" class="schoolImg"></el-image>
                                            <div class="name" :class="{'en':$i18n.locale=='en'}">
                                                <p class="nameCn wEllipsis">{{item.name_zh}}</p>
                                                <p class="nameEn wEllipsis">{{item.name_en}}</p>
                                            </div>
                                            <el-button size="mini" @click.native.stop="setCollectType(item)">{{item.attentionType?$t("appHome.attentionedBtn"):$t("appHome.attentionBtn")}}</el-button>
                                        </div>
                                        <p class="descrition">{{item.brief_introduction}}</p>
                                        <ul class="otherInfo">
                                            <li>{{ $t("appHome.join")}}{{item.comment_people}}</li>
                                            <li>{{ $t("appHome.qa")}}{{item.comment_num}}</li>
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
                            <span class="showAll" v-if="item.content.length>255" @click="item.showAll=!item.showAll">{{item.showAll?$t('alumniComments.Packup'):$t('alumniComments.readAll')}}<el-image :src="item.showAll?iconShang:iconXia"></el-image></span>
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
                                    <img :src="commentNumIcon" alt="" @click="showCommentTool(item)">
                                    {{item.commentNum}}
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
        <app-commentTool ref="commentTool" @comment="commentNow"></app-commentTool>
    </div>
</template>

<script type="text/javascript">
    import appHeader from "@/components/appHeader/appHeader";
    import appFooter from "@/components/appFooter/appFooter";
    import appCommentTool from "@/components/appCommentTool/appCommentTool";
    let self;
    export default{
        name: 'Home',
        data(){
            return{
                carouselList:[
                    // require("img/banner01.jpg"),require("img/banner01.jpg")
                ],
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
                    // {
                    //     name_zh:"哈佛大学",
                    //     name_en:"Harvard University",
                    //     followType:false,//关注
                    //     brief_introduction:"私立研究型学院，共出过8位美国总统和数十位诺贝尔、普利策奖获得者，也是惠…",
                    //     comment_people:"1K+",//参与
                    //     comment_num:209,//问答
                    //     img:require("img/xx_harvard.png"),

                    // }
                ],
                commentNumIcon:require("img/appActivity/pinglun.png"),
                likeNumIcon:require("img/appActivity/zan_n.png"),
                likedNumIcon:require("img/appActivity/zan.png"),
                shareIcon:require("img/appHighSchool/share.png"),
                iconShang:require("img/shang.png"),
                iconXia:require("img/xia.png"),
                commentList:[
                    // {
                    //     headProtrait:require("img/appActivity/onlyTest/imo_01.png"),
                    //     name:"Marry",
                    //     school:"普林斯顿大学",
                    //     content:"我最喜欢普林的一点就是虽然所有的学生生活和做事都非常的driven，但并没有所谓的必须去“融入”的“主流”。学术上无论你是个码农，还是醉心理论物理，还是喜欢研究拉丁经典，还是专注于creative writing，还是研究东亚历史，还是斯拉夫文学，在校园里和别的学生谈起你所学的东西的时候，别人都会真心觉得很cool，甚至会想听你继续讲细节。而校园日常上无论是当个geek，当个橄榄球校队的主力，喜欢加入greek society常常party，还是喜欢喝下午茶纵横古今，都不会觉得是个outcast，也不会成为所有人追求的明星。简单的说就是每个人都能找到自己舒服的圈子和朋友，但同时又对别的圈子和朋友报以开放而欣赏的态度，从某种意义上说这真的有点像与世隔绝的乌托邦式的社会，因此普林也被自己的学生戏称为orange bubble。关于普林的气氛其实有各种传言，比如说这是最保守的常青藤校，有说这是非常elitist的地方，但我个人觉得其实这无非是个大家都能很舒服的找到自己想找到的位置，做自己想做的事情的地方罢了。",
                    //     showAll:false,
                    //     time:"2019-04-20",
                    //     viewCount:"45",
                    //     commentNum:"0",
                    //     likeNum:"12",
                    //     likeType:"0",
                    //     imgList:[
                    //         [
                    //             require("img/appActivity/hd01.png"),
                    //             require("img/appActivity/hd01.png"),
                    //             require("img/appActivity/hd01.png"),
                    //             require("img/appActivity/hd01.png"),
                    //             require("img/appActivity/hd01.png"),
                    //             require("img/appActivity/hd03.png")
                    //         ],
                    //         [
                    //             require("img/appActivity/onlyTest/imo_01.png")
                    //         ]
                    //     ]
                    // }
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
                totalComments:[],
                thisCommentItem:null,//当前评论的item
            }
        },
        methods: {
            getCarouselList(){//获取轮播图片
                console.log(self.$api)
                self.$http.get(self.$api+'/school/getHomeImage', {
                }).then(function (response) {
                    self.carouselList=response.data.resultMap.map(item=>self.$http.serverUrl+item.img_url);
                    console.log(self.carouselList);
                }).catch(function (error) {
                    console.log(error);
                });
            },
            getSchoolList(){//获取高校社区
                console.log(self.$api)
                self.$http.get(self.$api+'/school/selectTop9School', {
                    params:{
                        language:self.$i18n.locale
                    }
                }).then(function (response) {
                    let list=response.data[0].data;
                    let total=Math.ceil(list.length/3)
                    self.schoolList=[]
                    for(let i=0;i<total;i++){
                        self.schoolList[i]=[]
                    }
                    list.forEach((item,index)=>{
                        item.image_url=self.$http.serverUrl+item.image_url;
                        self.$set(item,"attentionType",item.isCollect=="true"?true:false)
                        let arrIndex=Math.floor(index/3)
                        self.schoolList[arrIndex].push(item)
                    })
                    console.log(self.schoolList)
                    
                }).catch(function (error) {
                    console.log(error);
                });
            },
            goInformation(item){//学校跳转到详情
                self.$router.push({
                    name:"schoolInfomation",
                    query:{
                        id:item.id,
                        cid:item.cid,
                        nameCn:item.name_zh,
                        nameEn:item.name_en,
                        attentionType:item.attentionType,
                        schoolImg:item.image_url
                    }
                })
            },
            setCollectType(item){//添加或取消收藏
                let url=item.attentionType?"/schoolCollect/cancelSchoolCollect":"/schoolCollect/addSchoolCollect";//已收藏则取消，反之添加
                let param=item.attentionType?{
                    collectId:item.cid
                }:{
                    schoolId:item.school_id,
                    userId:self.$store.getters.getUserId,
                }
                self.$http.post(self.$api+url,param).then(function (response) {
                    if(!!response){
                        if(response.data.code=="200"){
                            let schoolList=self.schoolList;
                            item.attentionType=!item.attentionType;
                            item.cid=!item.attentionType?response.data.cid:null;
                            self.schoolList=[];//轮播图的关系，需要置空一次
                            self.schoolList=schoolList;
                        }
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },
            getSchoolComment(){//获取高校评论
                self.$http.get(self.$api+'/schoolcomment/getHot9Comment', {
                    params:{
                        language:self.$i18n.locale
                    }
                }).then(function (response) {
                    let list=response.data.hotCommentTop9;
                    self.commentList=list.map((item)=>{
                        console.log(item.allcommentids.split(","))
                        return {
                            headProtrait:self.$http.serverUrl+item.headUrl,
                            school_id:item.school_id,
                            comment_id:item.comment_id,
                            name:item.nickName,
                            school:item.name,
                            content:item.comment_details,
                            showAll:false,
                            time:item.comment_time,
                            viewCount:item.view_count,
                            commentNum:parseInt(item.child_num),
                            likeNum:item.num,
                            likeType:item.allcommentids.split(",").find(id=>self.$store.getters.getUserId==id)?1:0,
                            imgList:JSON.parse(item.comment_imgs).map(imgItem=>self.$http.serverUrl+imgItem)
                        }
                    })
                    console.log(self.commentList)
                    
                }).catch(function (error) {
                    console.log(error);
                });
            },
            choseSearchType(type){
                self.typeSelected=type;
            },
            showCommentTool(item){
                self.thisCommentItem=item;
                self.$refs["commentTool"].show();
            },
            commentNow({msg,img}){//点击评论
                let param={
                    schoolId: self.thisCommentItem.school_id,
                    userId: self.$store.getters.getUserId,
                    commentDetails: msg,
                    parentId:self.thisCommentItem.comment_id,
                }
                self.$http.post(self.$api+'/schoolcomment/add', param).then(function (response) {
                    if(!!response){
                        if(response.data){
                            self.thisCommentItem.commentNum++;
                        }
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        created(){
            self=this;
            self.getCarouselList();
            self.getSchoolList();
            self.getSchoolComment();
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