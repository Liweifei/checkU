<template>
    <div class="disciplineCompetition">
        <div class="selectionList containMain">
            <div class="item">
                <span class="name" :class="{'en':$i18n.locale=='en'}">{{$t('disciplineCompetition.area')}}：</span>
                <ul class="area">
                    <li v-for="(item,index) in $t('disciplineCompetition.areaList')" :class="{'selected':areaSelected==item.value}" @click="choseAreaType(item.value)">{{item.label}}</li>
                </ul>
            </div>
            <div class="item">
                <span class="name" :class="{'en':$i18n.locale=='en'}">{{$t('disciplineCompetition.subject')}}：</span>
                <ul class="area">
                    <li v-for="(item,index) in $t('disciplineCompetition.subjectList')":class="{'selected':subjectSelected==item.value}" @click="choseSubjectType(item.value)">{{item.label}}</li>
                </ul>
                <div class="totalNum">{{$t('disciplineCompetition.total')}}<span>{{totalNum}}</span>{{$t('disciplineCompetition.result')}}</div>
            </div>
        </div>
        <div class="containMain contain">
            <div class="head">
                <div class="sort">{{$t('disciplineCompetition.order')}}</div>
                <div class="name">{{$t('disciplineCompetition.activityName')}}</div>
                <div class="attention">{{$t('disciplineCompetition.attention')}}</div>
            </div>
            <ul class="list">
                <li v-for="(item,index) in activityList">
                    <router-link :to="{name:'activityDetail',params:{type:'disciplineCompetition'},query:{id:item.id}}">
                        <div class="sort">{{index+1}}</div>
                        <div class="name">{{$i18n.locale=='zh'?item.title:item.subTitle}}
                            <span class="subTitle" v-if="$i18n.locale=='zh'">（{{item.subTitle}}）</span>
                        </div>
                        <div class="attention">
                            <img :src="!!item.attentionType?attentioned:notAttention" alt="" @click.prevent="setCollectType(item)">
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- <div class="pagination">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="1000">
            </el-pagination>
        </div> -->
    </div>
</template>

<script type="text/javascript">
    let self;
    export default{
        name: 'disciplineCompetition',
        data(){
            return{
                areaSelected:"1",
                subjectSelected:"1",
                activityList:[
                    // {
                    //     title:"全国数学奥林匹克竞赛",
                    //     subTitle:"Chinese mathematical olympiad",
                    //     attentionType:1,
                    // },
                    // {
                    //     title:"全国青少年信息学奥林匹克竞赛",
                    //     subTitle:"National Olympiad in Informatics",
                    //     attentionType:0,
                    // }
                ],
                notAttention:require("img/appActivity/guanzhu_n.png"),
                attentioned:require("img/appActivity/guanzhu.png"),
                currentPage:1,
                totalNum:126,
            }
        },
        methods: {
            getList(){//获取学科竞赛活动列表
                self.$http.get(self.$api+'/activitydetails/selectActivityDetailBytime', {
                    params:{
                        userId:self.$store.getters.getUserId,
                        language:self.$i18n.locale,
                        local: self.areaSelected,
                        subjectType: self.subjectSelected,
                    }
                }).then(function (response) {
                    self.activityList=[];
                    if(!!response){
                        if(response.data.code=="200"){
                            self.totalNum=response.data.data.length;
                            response.data.data.forEach(element => {
                                self.activityList.push({
                                    id:element.id,
                                    cid:element.cid,
                                    title:element.name_zh,
                                    subTitle:element.name_en,
                                    attentionType:element.isCollect=="true"?true:false,
                                })
                            });
                        }
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },
            setCollectType(item){//添加或取消收藏
                let url=!!item.attentionType?"/activityCollect/cancelActivityCollect":"/activityCollect/addActivityCollect";//已收藏则取消，反之添加
                let param=!!item.attentionType?{
                    collectId:item.cid
                }:{
                    activityId:item.id,
                    userId:self.$store.getters.getUserId,
                }
                self.$http.post(self.$api+url,param).then(function (response) {
                    if(!!response){
                        if(response.data.code=="200"){
                            item.attentionType=!item.attentionType;
                            item.cid=item.attentionType?response.data.cid:null;
                        }
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },
            choseAreaType(type){
                self.areaSelected=type;
                self.getList();
            },
            choseSubjectType(type){
                this.subjectSelected=type;
                self.getList();
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
        created(){
            self=this;
            self.getList();
        }
    }

</script>
<style lang="scss">
    @import './disciplineCompetition.scss';
</style>