<template>
    <div class="voluntaryService">
        <div class="selectionList containMain">
            <div class="item">
                <span class="name" :class="{'en':$i18n.locale=='en'}">{{$t('voluntaryService.area')}}：</span>
                <ul class="area">
                    <li v-for="(item,index) in $t('voluntaryService.areaList')" :class="{'selected':areaSelected==item.value}" @click="choseAreaType(item.value)">{{item.label}}</li>
                </ul>
            </div>
            <div class="item" :class="{'itemEn':$i18n.locale=='en'}">
                <span class="name" :class="{'en':$i18n.locale=='en'}">{{$t('voluntaryService.subject')}}：</span>
                <ul class="area">
                    <li v-for="(item,index) in $t('voluntaryService.subjectList')":class="{'selected':subjectSelected==item.value}" @click="choseSubjectType(item.value)">{{item.label}}</li>
                </ul>
                <div class="totalNum">{{$t('voluntaryService.total')}}<span>{{totalNum}}</span>{{$t('voluntaryService.result')}}</div>
            </div>
        </div>
        <div class="containMain contain">
            <div class="head">
                <div class="sort">{{$t('voluntaryService.order')}}</div>
                <div class="name">{{$t('voluntaryService.activityName')}}</div>
                <div class="attention">{{$t('voluntaryService.attention')}}</div>
            </div>
            <ul class="list">
                <li v-for="(item,index) in activityList">
                    <router-link :to="{name:'activityDetail',params:{type:'voluntaryService'}}">
                        <div class="sort">{{index+1}}</div>
                        <div class="name">{{$i18n.locale=='zh'?item.title:item.subTitle}}
                            <span class="subTitle" v-if="$i18n.locale=='zh'">（{{item.subTitle}}）</span>
                        </div>
                        <div class="attention">
                            <img :src="item.attentionType==1?attentioned:notAttention" alt="">
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="pagination">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script type="text/javascript">
    let self;
    export default{
        name: 'disciplineCompetition',
        data(){
            return{
                areaSelected:"",
                subjectSelected:"",
                activityList:[
                    {
                        title:"2019年社区微心愿项目",
                        subTitle:"参与微心愿的前景调研及后期活动策划",
                        attentionType:0,
                    },
                    {
                        title:"防毒禁毒公益宣传活动",
                        subTitle:"宣传防毒禁毒知识",
                        attentionType:0,
                    },
                    {
                        title:"慰问孤寡老人志愿活动",
                        subTitle:"传承中华民族尊老美德",
                        attentionType:1,
                    },
                    {
                        title:"巴厘岛海龟国际志愿者",
                        subTitle:"病龟营救，当一次海龟医生",
                        attentionType:0,
                    },
                    {
                        title:"斯里兰卡国际志愿者",
                        subTitle:"志愿教学",
                        attentionType:0,
                    },
                    {
                        title:"亚马逊河环境改善",
                        subTitle:"爱护我们的地球家园",
                        attentionType:1,
                    },
                    {
                        title:"2019年宜川城卫士项目",
                        subTitle:"保护环境，从我做起",
                        attentionType:0,
                    },
                    {
                        title:"收养流浪狗/猫志愿活动",
                        subTitle:"爱护动物，让世界充满爱",
                        attentionType:0,
                    },
                    {
                        title:"珍惜野生动物宣传活动",
                        subTitle:"宣传野生动物知识",
                        attentionType:0,
                    },
                    {
                        title:"向孤儿院献爱心活动",
                        subTitle:"传播家的温暖",
                        attentionType:0,
                    }
                ],
                notAttention:require("img/appActivity/guanzhu_n.png"),
                attentioned:require("img/appActivity/guanzhu.png"),
                currentPage:1,
                totalNum:126,
            }
        },
        methods: {
            choseAreaType(type){
                self.areaSelected=type;
            },
            choseSubjectType(type){
                this.subjectSelected=type;
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
        mounted(){
            self=this;
        }
    }

</script>
<style lang="scss">
    @import './voluntaryService.scss';
</style>