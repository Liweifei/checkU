<template>
    <div class="schoolInfomation">
        <div class="schoolSort containMain">
            <div class="carousel">
                <el-carousel arrow="never" :interval="100000">
                    <el-carousel-item v-for="(item,index) in carouselList" :key="index">
                        <el-image :src="item" fit="cover"></el-image>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="right">
                <h2 class="modelTitle">学校排名</h2>
                <div class="sort">
                    <div class="usNewsBox">
                        <div class="usNews">US NEWS排行</div>
                        <div class="numBox">
                            no.<span class="num" :class="{'front':sort.usNewsSort<4}">{{sort.usNewsSort}}</span>
                        </div>
                    </div>
                    <div class="worldBox">
                        <div class="world">世界排行榜</div>
                        <div class="numBox">
                            no.<span class="num" :class="{'front':sort.worldSort<4}">{{sort.worldSort}}</span>
                        </div>
                    </div>
                    <div class="hotBox">
                        <div class="hot">热度榜</div>
                        <div class="numBox">
                            no.<span class="num" :class="{'front':sort.hotSort<4}">{{sort.hotSort}}</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="main containMain">
            <div class="synopsis">
                <h2 class="modelTitle">学校简介</h2>
                <div class="content">
                    <p v-html="synopsis"></p>
                </div>
            </div>
            <div class="schoolInfo">
                <h2 class="modelTitle">学校信息</h2>
                <div class="main">
                    <div class="list">
                        <div class="title">
                            <p>基本信息</p>
                        </div>
                        <div class="otherInfo1">
                            <div class="item">
                                <div class="name">排名：</div>
                                <div class="content">{{basicInfo.sort}}</div>
                            </div>
                            <div class="item">
                                <div class="name">学费：</div>
                                <div class="content">{{basicInfo.tuition}}</div>
                            </div>
                            <div class="item noBorder">
                                <div class="name">学校类型：</div>
                                <div class="content">{{basicInfo.type}}</div>
                            </div>
                        </div>
                        <div class="otherInfo2">
                            <div class="item">
                                <div class="name">地理位置：</div>
                                <div class="content">{{basicInfo.address}}</div>
                            </div>
                            <div class="item">
                                <div class="name">学校官网：</div>
                                <div class="content website">{{basicInfo.website}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="title">
                            <p>教学信息</p>
                        </div>
                        <div class="otherInfo1">
                            <div class="item">
                                <div class="name">师生比例：</div>
                                <div class="content">{{teachingInfo.studentStaffRatio}}</div>
                            </div>
                            <div class="item noBorder">
                                <div class="name">优势专业：</div>
                                <div class="content">{{teachingInfo.professionalSdvantage}}</div>
                            </div>
                        </div>
                        <div class="otherInfo2">
                            <div class="item">
                                <div class="name">男女比例：</div>
                                <div class="content">{{teachingInfo.maleFemaleRatio}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="title">
                            <p>申请信息</p>
                        </div>
                        <div class="otherInfo1">
                            <div class="item">
                                <div class="name">SAT1：</div>
                                <div class="content">{{applyInfo.SAT1}}</div>
                            </div>
                            <div class="item">
                                <div class="name">ACT：</div>
                                <div class="content">{{applyInfo.ACT}}</div>
                            </div>
                            <div class="item noBorder long">
                                <div class="name">申请人数/录取率/就读率：</div>
                                <div class="content">{{applyInfo.other}}</div>
                            </div>
                        </div>
                        <div class="otherInfo2">
                            <div class="item">
                                <div class="name">SAT2：</div>
                                <div class="content">{{applyInfo.SAT2}}</div>
                            </div>
                            <div class="item">
                                <div class="name">TOEFL：</div>
                                <div class="content">{{applyInfo.other}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="title">
                            <p>教学信息</p>
                        </div>
                        <div class="otherInfo1">
                            <div class="item">
                                <div class="name">师生比例：</div>
                                <div class="content">{{basicInfo.sort}}</div>
                            </div>
                            <div class="item">
                                <div class="name">优势专业：</div>
                                <div class="content">{{basicInfo.tuition}}</div>
                            </div>
                        </div>
                        <div class="otherInfo2">
                            <div class="item noBorder">
                                <div class="name">男女比例：</div>
                                <div class="content">{{basicInfo.address}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="title">
                            <p>学生打分</p>
                        </div>
                        <div class="otherInfo1">
                            <div class="item">
                                <div class="name">学校环境：</div>
                                <div class="content">
                                    <el-rate
                                    v-model="gradeStudents.environment"
                                    disabled
                                    text-color="#888888"
                                    disabled-void-color="#cccccc"
                                    show-text
                                    :texts="te">
                                    </el-rate>
                                </div>
                            </div>
                            <div class="item">
                                <div class="name">师资力量：</div>
                                <div class="content">
                                    <el-rate
                                    v-model="gradeStudents.teachership"
                                    disabled
                                    text-color="#888888"
                                    disabled-void-color="#cccccc"
                                    show-text
                                    :texts="te">
                                    </el-rate>
                                </div>
                            </div>
                        </div>
                        <div class="otherInfo2">
                            <div class="item noBorder">
                                <div class="name">硬件设施：</div>
                                <div class="content">
                                    <el-rate
                                    v-model="gradeStudents.hardwareFacility"
                                    disabled
                                    text-color="#888888"
                                    disabled-void-color="#cccccc"
                                    show-text
                                    :texts="te">
                                    </el-rate>
                                </div>
                            </div>
                            <div class="item noBorder">
                                <div class="name">课外活动：</div>
                                <div class="content">
                                    <el-rate
                                    v-model="gradeStudents.activity"
                                    disabled
                                    text-color="#888888"
                                    disabled-void-color="#cccccc"
                                    show-text
                                    :texts="te">
                                    </el-rate>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="alumniComment">
                <h2 class="modelTitle">校友评论</h2>
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
                                    浏览了{{item.viewCount}}次
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
                <div class="loadMore">
                    <span>查看更多</span>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script type="text/javascript">
    let self;
    export default{
        name: 'schoolInfomation',
        data(){
            return{
                carouselList:[
                    require("img/appActivity/onlyTest/imo_01.png"),
                    require("img/appActivity/hd03.png"),
                ],
                sort:{
                    usNewsSort:1,
                    worldSort:7,
                    hotSort:2,
                },
                synopsis:"普林斯顿大学（英语：Princeton University），又译普林斯敦大学， 位于美国新泽西州的普林斯顿，是美国一所着名的私立研究型大学，八所常春藤盟校之一。 学校于1746年在新泽西州伊丽莎白镇创立，是美国殖民时期第四所成立的高等教育学院， 当时名为“新泽西学院”，1747年迁至新泽西州，1756年迁至普林斯顿，并于1896年正式改名为普林斯顿大学。（现今位于新泽西州Ewing的新泽西学院与本校无从属关系。） 虽然它最初是长老制的教育机构，但是现在已经成为非宗教大学，对学生亦无任何宗教上的要求。该校与普林斯顿高等研究院、普林斯顿神学院以及莱德大学西敏唱诗班学院有着较为密切的关系。普林斯顿保有浓厚的欧式教育学风，非常重视本科生教育，创立宗旨上强调训练学生具有人文及科学的综合素养。",
                basicInfo:{
                    sort:"1（来源：US NEWS）",
                    tuition:"$54,000/年",
                    type:"私立研究型大学",
                    address:"美国新泽西州普林斯顿市伊丽莎白镇",
                    website:"http://www.princeton.edu",
                },
                teachingInfo:{
                    studentStaffRatio:"5:1",
                    maleFemaleRatio:"1:1",
                    professionalSdvantage:"5:1工程技术、自然科学、人文科学、社会科学、生命科学",
                },
                applyInfo:{
                    SAT1:"1,600",
                    ACT:"36",
                    SAT2:"1,600",
                    TOEFL:"100",
                    other:"5,335 / 13.9% / 90.2%",
                },
                gradeStudents:{
                    environment:3,
                    hardwareFacility:4,
                    teachership:5,
                    activity:3,
                },
                te:['极差','失望','一般','好','非常好'],
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
        },
        mounted(){
            self=this;
        },
        components:{
        }
    }

</script>
<style lang="scss">
    @import './schoolInfomation.scss';
</style>