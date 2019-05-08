<template>
    <div class="appCommentTool" v-show="commentVisible">
        <div class="commentBox" :class="{'totalComment':totalNum>0}">
            <el-image :src="closeIcon" class="closeBtn" @click.native="closes"></el-image>
            <div class="comment">
                <el-input placeholder="说说你对此活动的印象，分享给充满好奇心的他们吧…" v-model="comment"></el-input>
                <el-upload
                    class="upload"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                    list-type="picture-card">
                    <img :src="uploadIcon" alt="" class="uploadIcon">
                    <p class="uploadLabel">添加图片</p>
                </el-upload>
                <el-button>评论</el-button>
            </div>
            <div class="commentListBox" v-if="totalNum>0">
                <h2 class="modelTitle">全部回复（{{totalNum}}）</h2>
                <ul class="commentList">
                    <li v-for="(item,index) in commentList" class="commentItem">
                        <el-image :src="item.headProtrait" class="headProtrait" :key="index"></el-image>
                        <div class="info">
                            <h3 class="name">{{item.name}}</h3>
                            <p class="time">{{item.time}}</span></p>
                            <span class="likeNum">
                                <img :src="item.likeType==1?likedNumIcon:likeNumIcon" alt="">
                                {{item.likeNum}}
                            </span>
                            <div class="content">
                                <span class="isMarked" v-if="item.isMarked">回复<font>{{item.markUser}}</font>:</span>{{item.content}}
                            </div>
                            <div class="imgList" v-show="item.imgList.length>0">
                                <el-carousel :autoplay="false" indicator-position="none" :arrow="item.imgList.length>1?'hover':'never'">
                                    <el-carousel-item v-for="(listItem,listItenIndex) in item.imgList" :key="listItenIndex">
                                        <el-image :src="list" class="commemtImg" v-for="(list,listIndex) in listItem" :key="listIndex"></el-image>
                                    </el-carousel-item>
                                </el-carousel>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
</template>

<script type="text/javascript">
    let self;
    export default{
        name: 'appCommentTool',
        data(){
            return{
                commentVisible:false,
                comment:"",
                uploadIcon:require("img/appActivity/photo.png"),
                closeIcon:require("img/\appCommentTool/guanbi.png"),
                fileList:[],
                likeNumIcon:require("img/appActivity/zan_n.png"),
                likedNumIcon:require("img/appActivity/zan.png"),
                totalNum:0
            }
        },
        props:{
            commentList:{
                type:Array,
                default(){
                    return [
                        {
                            headProtrait:require("img/appActivity/onlyTest/imo_01.png"),
                            name:"Marry",
                            content:"我最喜欢普林的一点就是虽然所有的学生生活和做事都非常的driven，但并没有所谓的必须去“融入”的“主流”。学术上无论你是个码农，还是醉心理论物理，还是喜欢研究拉丁经典，还是专注于creative writing，还是研究东亚历史，还是斯拉夫文学，在校园里和别的学生谈起你所学的东西的时候，别人都会真心觉得很cool，甚至会想听你继续讲细节。而校园日常上无论是当个geek，当个橄榄球校队的主力，喜欢加入greek society常常party，还是喜欢喝下午茶纵横古今，都不会觉得是个outcast，也不会成为所有人追求的明星。简单的说就是每个人都能找到自己舒服的圈子和朋友，但同时又对别的圈子和朋友报以开放而欣赏的态度，从某种意义上说这真的有点像与世隔绝的乌托邦式的社会，因此普林也被自己的学生戏称为orange bubble。关于普林的气氛其实有各种传言，比如说这是最保守的常青藤校，有说这是非常elitist的地方，但我个人觉得其实这无非是个大家都能很舒服的找到自己想找到的位置，做自己想做的事情的地方罢了。",
                            time:"2019-04-20",
                            likeNum:"12",
                            likeType:"0",
                            isMarked:false,
                            markUser:"",
                            imgList:[
                                [
                                    require("img/appActivity/hd01.png"),
                                    require("img/appActivity/hd01.png"),
                                    require("img/appActivity/hd01.png"),
                                    require("img/appActivity/hd01.png"),
                                ],
                                [
                                    require("img/appActivity/onlyTest/imo_01.png")
                                ]
                            ]
                        },
                        {
                            headProtrait:require("img/appActivity/onlyTest/imo_01.png"),
                            name:"Marry",
                            content:" writing，还是研究东亚历史，还是斯拉夫文学，在校园里和别的学生谈起你所学的东西的时候，别人都会真心觉得很cool，甚至会想听你继续讲细节。而校园日常上无论是当个geek，当个橄榄球校队的主力，喜欢加入greek society常常party，还是喜欢喝下午茶纵横古今，都不会觉得是个outcast，也不会成为所有人追求的明星。简单的说就是每个人都能找到自己舒服的圈子和朋友，但同时又对别的圈子和朋友报以开放而欣赏的态度，从某种意义上说这真的有点像与世隔绝的乌托邦式的社会，因此普林也被自己的学生戏称为orange bubble。关于普林的气氛其实有各种传言，比如说这是最保守的常青藤校，有说这是非常elitist的地方，但我个人觉得其实这无非是个大家都能很舒服的找到自己想找到的位置，做自己想做的事情的地方罢了。",
                            time:"2019-04-20",
                            likeNum:"12",
                            likeType:"0",
                            isMarked:true,
                            markUser:"@Marry",
                            imgList:[
                                [
                                    require("img/appActivity/hd01.png"),
                                    require("img/appActivity/hd01.png"),
                                    require("img/appActivity/hd01.png"),
                                    require("img/appActivity/hd01.png"),
                                ],
                                [
                                    require("img/appActivity/onlyTest/imo_01.png")
                                ]
                            ]
                        }
                    ]
                }
            }
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            show(){
                this.commentVisible=true;
            },
            closes(){
                this.commentVisible=false;
            }
        },
        mounted(){
            self=this;
        }
    }

</script>
<style lang="scss">
    @import './appCommentTool.scss';
</style>