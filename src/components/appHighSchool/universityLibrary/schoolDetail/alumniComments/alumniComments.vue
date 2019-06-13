<template>
    <div class="alumniComments containMain">
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

        <div class="header">
            {{$t('alumniComments.total')}}{{totalCount}}{{$t('alumniComments.result')}}
            <ul class="sortType">
                <li v-for="(item,index) in $t('alumniComments.sortTypeList')" :class="{'selected':item.value==sortTypeSelected}" @click="changeSortType(item.value)">{{item.label}}</li>
            </ul>
        </div>
        <h2 class="modelTitle">{{$t('alumniComments.alumniComments')}}</h2>
        <ul class="commentList">
            <li v-for="(item,index) in commentList" class="commentItem">
                <el-image :src="item.headProtrait" class="headProtrait" :key="index"></el-image>
                <div class="info">
                    <h3 class="name">{{item.name}}</h3>
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
                            {{$t('alumniComments.publishIn')}}{{item.time}}
                        </span>
                        <span class="viewCount">
                            {{$t('alumniComments.viewCount')}}{{item.viewCount}}次
                        </span>
                        <span class="share">
                            <img :src="shareIcon" alt="">{{$t('alumniComments.share')}}
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
            <span v-show="loadMoreType" @click="loadMore">{{$t('alumniComments.loadMore')}}</span>
        </div>
        <!-- 评论工具 -->
        <app-commentTool ref="commentTool" @comment="commentNow"></app-commentTool>
    </div>
    
</template>

<script type="text/javascript">
    let self;
    import moment from "moment";
    import appCommentTool from "@/components/appCommentTool/appCommentTool";
    export default{
        name: 'alumniComments',
        data(){
            return{
                totalCount:0,
                sortTypeSelected:"hot",
                commentNumIcon:require("img/appActivity/pinglun.png"),
                likeNumIcon:require("img/appActivity/zan_n.png"),
                likedNumIcon:require("img/appActivity/zan.png"),
                shareIcon:require("img/appHighSchool/share.png"),
                iconShang:require("img/shang.png"),
                iconXia:require("img/xia.png"),
                uploadIcon:require("img/appActivity/photo.png"),
                comment:null,
                fileList:[],
                commentList:[
                    // {
                    //     headProtrait:require("img/appActivity/onlyTest/imo_01.png"),
                    //     name:"Marry",
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
                    //         ]
                    //     ]
                    // }
                ],
                thisCommentItem:{},
                loadMoreType:false,
            }
        },
        methods: {
            changeSortType(value){
                self.sortTypeSelected=value;
                self.sortCommentList();
            },
            sortCommentList(){
                self.commentList.sort((val1,val2)=>{
                    if(self.sortTypeSelected=='hot'){
                        return ((val2.viewCount+val2.commentNum)-(val1.viewCount+val1.commentNum))
                    }else{
                        return (moment(val2.time).unix()-moment(val1.time).unix())
                    }
                })
            },
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
                                    showAll:false,
                                    viewCount:item.view_count,
                                    commentNum:parseInt(item.child_num),
                                    likeNum:item.num,
                                    likeType:likeType,
                                    imgList:[],
                                })
                            })
                            self.sortCommentList();
                            self.totalCount=self.commentList.length;
                            if(self.commentList.length>1){//默认显示2条评论，只有一条的话证明不需要loadMore
                                self.loadMoreType=true;
                            }
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
                        if(!!response.data.listBySchoolId && response.data.listBySchoolId instanceof Array){
                            let res=response.data.listBySchoolId;
                            // 评论
                            self.commentList=[];
                            res.forEach((item)=>{
                                let likeType=!!item.allcommentids.split(",").find(id=>self.$store.getters.getUserId==id)?1:0;
                                self.commentList.push({
                                    headProtrait:item.headUrl,
                                    name:item.nickName,
                                    school_id:item.school_id,
                                    comment_id:item.id,
                                    time:item.comment_time,
                                    content:item.comment_details,
                                    showAll:false,
                                    viewCount:item.view_count,
                                    commentNum:parseInt(item.child_num),
                                    likeNum:item.num,
                                    likeType:likeType,
                                    imgList:[],
                                })
                            })
                            self.sortCommentList();
                            self.loadMoreType=false;//加载完所有数据之后取消显示loadmore
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
                    schoolId: self.id,
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
            commentNow2(){//本页评论
                if(!self.comment){
                    self.$message({
                        message: "请填写评论内容！",
                        type: 'warning'
                    });
                    return;
                }
                self.thisCommentItem.comment_id=0;//评论学校的是传0，对评论进行评论是传评论id，这里手动设置下共用上面的方法
                self.commentNow({msg:self.comment})
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
        },
        created(){
            self=this;
            self.id=self.$route.query.id;
            self.getInfo();
        },
        filters:{
            filterWords(item){
                if(item.content.length<255 || item.showAll){
                    return item.content;
                }else{
                    let words="";
                    if(item.content.length>255){
                        words=item.content.substr(0,255)+"..."
                    }
                    return words;
                }
            }
        },
        components:{
            "app-commentTool":appCommentTool,
        }
    }

</script>
<style lang="scss">
    @import './alumniComments.scss';
</style>