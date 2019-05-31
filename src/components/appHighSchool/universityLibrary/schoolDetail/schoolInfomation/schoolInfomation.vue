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
                <h2 class="modelTitle">{{$t('schoolInfomation.schoolrRanking')}}</h2>
                <div class="sort">
                    <div class="usNewsBox">
                        <div class="usNews">{{$t('schoolInfomation.usNews')}}</div>
                        <div class="numBox">
                            no.<span class="num" :class="{'front':sort.usNewsSort<4}">{{sort.usNewsSort}}</span>
                        </div>
                    </div>
                    <div class="worldBox">
                        <div class="world">{{$t('schoolInfomation.world')}}</div>
                        <div class="numBox">
                            no.<span class="num" :class="{'front':sort.worldSort<4}">{{sort.worldSort}}</span>
                        </div>
                    </div>
                    <div class="hotBox">
                        <div class="hot">{{$t('schoolInfomation.hot')}}</div>
                        <div class="numBox">
                            no.<span class="num" :class="{'front':sort.hotSort<4}">{{sort.hotSort}}</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="main containMain">
            <div class="synopsis">
                <h2 class="modelTitle">{{$t('schoolInfomation.schoolProfile')}}</h2>
                <div class="content">
                    <p v-html="synopsis"></p>
                </div>
            </div>
            <div class="schoolInfo">
                <h2 class="modelTitle">{{$t('schoolInfomation.information')}}</h2>
                <div class="main" :class="{'enMain':$i18n.locale=='en'}">
                    <div class="list">
                        <div class="title">
                            <p>{{$t('schoolInfomation.general')}}</p>
                        </div>
                        <div class="otherInfo1">
                            <div class="item">
                                <div class="name">{{$t('schoolInfomation.sort')}}：</div>
                                <div class="content">{{basicInfo.sort}}</div>
                            </div>
                            <div class="item">
                                <div class="name">{{$t('schoolInfomation.tuition')}}：</div>
                                <div class="content">{{basicInfo.tuition}}</div>
                            </div>
                            <div class="item noBorder">
                                <div class="name">{{$t('schoolInfomation.type')}}：</div>
                                <div class="content">{{basicInfo.type==1?$t('schoolInfomation.typePrivate'):$t('schoolInfomation.typePublic')}}</div>
                            </div>
                        </div>
                        <div class="otherInfo2">
                            <div class="item">
                                <div class="name">{{$t('schoolInfomation.address')}}：</div>
                                <div class="content">{{basicInfo.address}}</div>
                            </div>
                            <div class="item">
                                <div class="name">{{$t('schoolInfomation.website')}}：</div>
                                <div class="content website"><a :href="'http://'+basicInfo.website" target="_blank">{{basicInfo.website}}</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="title">
                            <p>{{$t('schoolInfomation.teachingInformation')}}</p>
                        </div>
                        <div class="otherInfo1">
                            <div class="item">
                                <div class="name">{{$t('schoolInfomation.studentStaffRatio')}}：</div>
                                <div class="content">{{teachingInfo.studentStaffRatio}}</div>
                            </div>
                            <div class="item noBorder professionalSdvantage">
                                <div class="name">{{$t('schoolInfomation.professionalSdvantage')}}：</div>
                                <div class="content">{{teachingInfo.professionalSdvantage}}</div>
                            </div>
                        </div>
                        <div class="otherInfo2">
                            <div class="item">
                                <div class="name">{{$t('schoolInfomation.maleFemaleRatio')}}：</div>
                                <div class="content">{{teachingInfo.maleFemaleRatio}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="title">
                            <p>{{$t('schoolInfomation.applicationInformation')}}</p>
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
                                <div class="name">{{$t('schoolInfomation.other')}}：</div>
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
                                <div class="content">{{applyInfo.TOEFL}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="title">
                            <p>{{$t('schoolInfomation.feedback')}}</p>
                        </div>
                        <div class="otherInfo1">
                            <div class="item">
                                <div class="name">{{$t('schoolInfomation.environment')}}：</div>
                                <div class="content">
                                    <el-rate
                                    v-model="gradeStudents.environment"
                                    disabled
                                    text-color="#888888"
                                    disabled-void-color="#cccccc"
                                    show-text
                                    :texts="$t('schoolInfomation.te')">
                                    </el-rate>
                                </div>
                            </div>
                            <div class="item">
                                <div class="name">{{$t('schoolInfomation.teachership')}}：</div>
                                <div class="content">
                                    <el-rate
                                    v-model="gradeStudents.teachership"
                                    disabled
                                    text-color="#888888"
                                    disabled-void-color="#cccccc"
                                    show-text
                                    :texts="$t('schoolInfomation.te')">
                                    </el-rate>
                                </div>
                            </div>
                        </div>
                        <div class="otherInfo2">
                            <div class="item noBorder">
                                <div class="name">{{$t('schoolInfomation.hardwareFacility')}}：</div>
                                <div class="content">
                                    <el-rate
                                    v-model="gradeStudents.hardwareFacility"
                                    disabled
                                    text-color="#888888"
                                    disabled-void-color="#cccccc"
                                    show-text
                                    :texts="$t('schoolInfomation.te')">
                                    </el-rate>
                                </div>
                            </div>
                            <div class="item noBorder">
                                <div class="name">{{$t('schoolInfomation.activity')}}：</div>
                                <div class="content">
                                    <el-rate
                                    v-model="gradeStudents.activity"
                                    disabled
                                    text-color="#888888"
                                    disabled-void-color="#cccccc"
                                    show-text
                                    :texts="$t('schoolInfomation.te')">
                                    </el-rate>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="alumniComment">
                <h2 class="modelTitle">{{$t('schoolInfomation.alumniComments')}}</h2>
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
                                    {{$t('schoolInfomation.viewCount')}}{{item.viewCount}}{{$t('schoolInfomation.unit')}}
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
                    <span v-show="loadMoreType" @click="loadMore">{{$t('schoolInfomation.loadMore')}}</span>
                </div>
            </div>
        </div>
        <!-- 评论工具 -->
        <app-commentTool ref="commentTool" @comment="commentNow"></app-commentTool>
    </div>
</template>

<script type="text/javascript">
    import appCommentTool from "@/components/appCommentTool/appCommentTool";
    let self;
    export default{
        name: 'schoolInfomation',
        data(){
            return{
                none:require("img/none.png"),
                carouselList:[
                    // require("img/appActivity/onlyTest/imo_01.png"),
                    // require("img/appActivity/hd03.png"),
                ],
                sort:{
                    usNewsSort:null,
                    worldSort:null,
                    hotSort:null,
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
                commentNumIcon:require("img/appActivity/pinglun.png"),
                likeNumIcon:require("img/appActivity/zan_n.png"),
                likedNumIcon:require("img/appActivity/zan.png"),
                loadMoreType:false,
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
                thisCommentItem:null,
            }
        },
        methods: {
            getInfo(){//获取详细信息
                self.$http.get(self.$api+'/school/school_detail', {
                    params:{
                        userId:self.$store.getters.getUserId,
                        language:self.$i18n.locale,
                        schoolId:self.id,
                    }
                }).then(function (response) {
                    if(!!response){
                        if(response.data.code=="200"){
                            let res=response.data.data;
                            self.carouselList=JSON.parse(res.school[0].rotation_chart_url);
                            if(self.carouselList.length<1)self.carouselList.push(self.none);
                            self.schoolProfile=res.school[0].brief_introduction;
                            // sort:{
                            //     usNewsSort:1,
                            //     worldSort:7,
                            //     hotSort:2,
                            // },
                            // 只有world的
                            self.sort.usNewsSort=res.school[0].us_news;
                            self.sort.worldSort=res.school[0].world_ranking;
                            self.sort.hotSort=res.school[0].hotNum;
                            // sort:"1（来源：US NEWS）",
                            // tuition:"$54,000/年",
                            // type:"私立研究型大学",
                            // address:"美国新泽西州普林斯顿市伊丽莎白镇",
                            // website:"http://www.princeton.edu",
                            self.basicInfo.sort=res.school[0].location;
                            self.basicInfo.tuition=res.school[0].tuition;
                            self.basicInfo.type=res.school[0].type;
                            self.basicInfo.address=res.school[0].location;
                            self.basicInfo.website=res.school[0].website_url;
                            // teachingInfo:{
                            //     studentStaffRatio:"5:1",
                            //     maleFemaleRatio:"1:1",
                            //     professionalSdvantage:"5:1工程技术、自然科学、人文科学、社会科学、生命科学",
                            // },
                            self.teachingInfo.studentStaffRatio=res.school[0].student_staff_ratio;
                            self.teachingInfo.maleFemaleRatio=res.school[0].male_female_ratio;
                            self.teachingInfo.professionalSdvantage=res.school[0].excellent_subject;
                            // applyInfo:{
                            //     SAT1:"1,600",
                            //     ACT:"36",
                            //     SAT2:"1,600",
                            //     TOEFL:"100",
                            //     other:"5,335 / 13.9% / 90.2%",
                            // },
                            self.applyInfo.SAT1=res.school[0].SAT1;
                            self.applyInfo.ACT=res.school[0].ACT;
                            self.applyInfo.SAT2=res.school[0].SAT2;
                            self.applyInfo.TOEFL=res.school[0].TOEFL;
                            self.applyInfo.other=res.school[0].applications+"/"+res.school[0].enrolment+"/"+res.school[0].study_proportion;
                            // gradeStudents:{
                            //     environment:3,
                            //     hardwareFacility:4,
                            //     teachership:5,
                            //     activity:3,
                            // },
                            self.gradeStudents.environment=!!res.commentStudentList[0]?parseInt(res.commentStudentList[0].environment):null;
                            self.gradeStudents.activity=!!res.commentStudentList[0]?parseInt(res.commentStudentList[0].extracurricular_activity):null;
                            self.gradeStudents.hardwareFacility=!!res.commentStudentList[0]?parseInt(res.commentStudentList[0].hardware_facilitie):null;
                            self.gradeStudents.teachership=!!res.commentStudentList[0]?parseInt(res.commentStudentList[0].faculty):null;

                            // 评论
                            self.commentList=[];
                            res.schoolComment.forEach((item)=>{
                                let likeType=!!item.allcommentids.split(",").find(id=>self.$store.getters.getUserId==id)?1:0;
                                self.commentList.push({
                                    headProtrait:item.headUrl,
                                    name:item.nickName,
                                    school_id:item.school_id,
                                    comment_id:item.id,
                                    time:item.comment_time,
                                    content:item.comment_details,
                                    viewCount:item.view_count,
                                    commentNum:parseInt(item.child_num),
                                    likeNum:item.num,
                                    likeType:likeType,
                                    imgList:[],
                                })
                            })
                            if(self.commentList.length>1){//默认显示2条评论，只有一条的话证明不需要loadMore
                                self.loadMoreType=true;
                            }
                        }
                    }
                }).catch(function (error) {
                    console.log(error);
                });
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
            },
            loadMore(){//查看更多评论
                self.$http.get(self.$api+'/schoolcomment/listBySchoolId', {
                    params:{
                        language:self.$i18n.locale,
                        schoolId:self.id,
                    }
                }).then(function (response) {
                    if(!!response){
                        console.log(response)
                        if(!!response.data.listBySchoolId && response.data.listBySchoolId instanceof Array){
                            let res=response.data.listBySchoolId;
                            // 评论
                            console.log(res)
                            self.commentList=[];
                            res.forEach((item)=>{
                                let likeType=!!item.allcommentids.split(",").find(id=>self.$store.getters.getUserId==id)?1:0;
                                self.commentList.push({
                                    headProtrait:self.$http.serverUrl+item.headUrl,
                                    name:item.nickName,
                                    time:item.comment_time,
                                    content:item.comment_details,
                                    viewCount:item.view_count,
                                    commentNum:0,
                                    likeNum:item.num,
                                    likeType:likeType,
                                    imgList:[],
                                })
                            })
                            self.loadMoreType=false;//加载完所有数据之后取消显示loadmore
                        }
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        created(){
            self=this;
            self.id=self.$route.query.id;
            self.getInfo();
        },
        components:{
            "app-commentTool":appCommentTool,
        }
    }

</script>
<style lang="scss">
    @import './schoolInfomation.scss';
</style>