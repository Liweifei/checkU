<template>
    <div class="alumniComments containMain">
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
                            <img :src="commentNumIcon" alt="">
                            {{item.viewCount}}
                        </span>
                    </div>
                </div>
            </li>
        </ul>
        <div class="loadMore">
            <span>{{$t('alumniComments.loadMore')}}</span>
        </div>
    </div>
    
</template>

<script type="text/javascript">
    let self;
    export default{
        name: 'alumniComments',
        data(){
            return{
                totalCount:210,
                
                sortTypeSelected:"hot",
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
                            ]
                        ]
                    },
                    {
                        headProtrait:require("img/appActivity/onlyTest/imo_01.png"),
                        name:"王伟",
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
                ]
            }
        },
        methods: {
            changeSortType(value){
                self.sortTypeSelected=value;
            }
        },
        mounted(){
            self=this;
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
        }
    }

</script>
<style lang="scss">
    @import './alumniComments.scss';
</style>