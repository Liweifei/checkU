<template>
    <div class="disciplineCompetition">
        <div class="selectionList containMain">
            <div class="item">
                <span class="name">地区：</span>
                <ul class="area">
                    <li v-for="(item,index) in areaList" :class="{'selected':areaSelected==item.value}" @click="choseAreaType(item.value)">{{item.label}}</li>
                </ul>
            </div>
            <div class="item">
                <span class="name">学科：</span>
                <ul class="area">
                    <li v-for="(item,index) in subjectList":class="{'selected':subjectSelected==item.value}" @click="choseSubjectType(item.value)">{{item.label}}</li>
                </ul>
                <div class="totalNum">共<span>{{totalNum}}</span>个结果</div>
            </div>
        </div>
        <div class="containMain contain">
            <div class="head">
                <div class="sort">序号</div>
                <div class="name">活动名称</div>
                <div class="attention">关注</div>
            </div>
            <ul class="list">
                <li v-for="(item,index) in activityList">
                    <router-link :to="{name:'activityDetail'}">
                        <div class="sort">{{index+1}}</div>
                        <div class="name">{{item.title}}
                            <span class="subTitle">（{{item.subTitle}}）</span>
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
                areaList:[
                    {
                        label:"不限",
                        value:""
                    },
                    {
                        label:"国内",
                        value:"inland"
                    },
                    {
                        label:"国外",
                        value:"foreign"
                    }
                ],
                areaSelected:"",
                subjectList:[
                    {
                        label:"不限",
                        value:""
                    },
                    {
                        label:"数学",
                        value:"math"
                    },
                    {
                        label:"物理",
                        value:"physics"
                    },
                    {
                        label:"化学",
                        value:"chemistry"
                    },
                    {
                        label:"生物",
                        value:"biology"
                    }
                ],
                subjectSelected:"",
                activityList:[
                    {
                        title:"国际数学奥林匹克竞赛",
                        subTitle:"International Mathematical Olympiad",
                        attentionType:0,
                    },
                    {
                        title:"全国高中学生化学竞赛",
                        subTitle:"Chinese Chemistry Olympiad",
                        attentionType:0,
                    },
                    {
                        title:"国际化学奥林匹克竞赛",
                        subTitle:"International chemical olympiad",
                        attentionType:1,
                    },
                    {
                        title:"国际生物奥林匹克竞赛",
                        subTitle:"International biological olympiad",
                        attentionType:0,
                    },
                    {
                        title:"英特尔国际科学与工程大奖赛",
                        subTitle:"Intel ISEF",
                        attentionType:0,
                    },
                    {
                        title:"全国数学奥林匹克竞赛",
                        subTitle:"Chinese mathematical olympiad",
                        attentionType:1,
                    },
                    {
                        title:"全国青少年信息学奥林匹克竞赛",
                        subTitle:"National Olympiad in Informatics",
                        attentionType:0,
                    },
                    {
                        title:"全国大学生电子设计竞赛",
                        subTitle:"全国大学生电子设计竞赛",
                        attentionType:0,
                    },
                    {
                        title:"全国中学生生物学竞赛",
                        subTitle:"China High School Biology Olympiad",
                        attentionType:0,
                    },
                    {
                        title:"国际地理奥林匹克竞赛",
                        subTitle:"国际地理奥林匹克竞赛",
                        attentionType:0,
                    },
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
    @import './disciplineCompetition.scss';
</style>