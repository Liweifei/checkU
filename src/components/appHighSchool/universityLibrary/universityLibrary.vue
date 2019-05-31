<template>
    <div class="universityLibrary">
        <div class="selectionList containMain">
            <!-- <div class="item">
                <span class="name">{{$t('universityLibrary.area')}}：</span>
                <ul class="area" :class="{'en':$i18n.locale=='en'}">
                    <li v-for="(item,index) in $t('universityLibrary.areaList')" :class="{'selected':areaSelected==item.value}" @click="choseAreaType(item.value)">{{item.label}}</li>
                </ul>
            </div> -->
            <div class="item typeList">
                <span class="name">{{$t('universityLibrary.type')}}：</span>
                <ul class="area" :class="{'en':$i18n.locale=='en'}">
                    <li v-for="(item,index) in $t('universityLibrary.typeList')" :class="{'selected':typeSelected==item.value}" @click="choseType(item.value)">{{item.label}}</li>
                </ul>
            </div>
            <div class="item">
                <span class="name">{{$t('universityLibrary.sortText')}}：</span>
                <ul class="area">
                    <li v-for="(item,index) in $t('universityLibrary.sortList')":class="{'selected':sortSelected==item.value}" @click="choseSortType(item.value)">{{item.label}}</li>
                </ul>
                <div class="totalNum">{{$t('universityLibrary.total')}}<span>{{totalNum}}</span>{{$t('universityLibrary.result')}}</div>
            </div>
        </div>
        <div class="containMain contain">
            <div class="head">
                <div class="sort">{{$t('universityLibrary.sortNum')}}</div>
                <div class="schoolBadge">{{$t('universityLibrary.schoolBadge')}}</div>
                <div class="name">{{$t('universityLibrary.nameText')}}</div>
                <div class="address">{{$t('universityLibrary.address')}}</div>
                <div class="collection">{{$t('universityLibrary.collection')}}</div>
            </div>
            <ul class="list">
                <li v-for="(item,index) in universityList">
                    <router-link :to="{name:'schoolInfomation',query:{id:item.id,cid:item.cid,nameCn:item.title,nameEn:item.subTitle,attentionType:item.attentionType,schoolImg:item.schoolBadge}}">
                        <div class="sort">
                            <el-image :src="no1" v-if="index==0"></el-image>
                            <el-image :src="no2" v-else-if="index==1"></el-image>
                            <el-image :src="no3" v-else-if="index==2"></el-image>
                            <span v-else>{{index+1}}</span>
                        </div>
                        <div class="schoolBadge">
                            <el-image :src="item.schoolBadge"></el-image>
                        </div>
                        <div class="name">
                            <p class="title" v-if="$i18n.locale=='zh'">{{item.title}}</p>
                            <p class="subTitle" :class="{'enSubTitle':$i18n.locale=='en'}">{{item.subTitle}}</p>
                        </div>
                        <div class="address">{{item.address}}</div>
                        <div class="collection">
                            <img :src="!!item.attentionType?collectioned:notCollection" alt="" @click.prevent="setCollectType(item)">
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
        name: 'universityLibrary',
        data(){
            return{
                areaSelected:"",
                typeSelected:"1",
                sortSelected:"hot",
                universityList:[
                    // {
                    //     title:"普林斯顿大学",
                    //     subTitle:"Princeton,NJ",
                    //     schoolBadge:require("img/appHighSchool/onlyTest/xx_plsd.png"),
                    //     address:"美国新泽西州的普林斯顿市",
                    //     attentionType:0,
                    // }
                ],
                no1:require("img/appHighSchool/no1.png"),
                no2:require("img/appHighSchool/no2.png"),
                no3:require("img/appHighSchool/no3.png"),
                notCollection:require("img/appActivity/guanzhu_n.png"),
                collectioned:require("img/appActivity/guanzhu.png"),
                currentPage:1,
                totalNum:0,
            }
        },
        methods: {
            getList(){//获取大学列表
                self.$http.get(self.$api+'/school/getSchoolListByType', {
                    params:{
                        userId:self.$store.getters.getUserId,
                        language:self.$i18n.locale,
                        ranking:self.sortSelected,
                        schoolType:self.typeSelected,
                    }
                }).then(function (response) {
                    self.universityList=[];
                    if(!!response){
                        if(response.data.code=="200"){
                            self.totalNum=response.data.data.length;
                            response.data.data.forEach(element => {
                                self.universityList.push({
                                    id:element.id,
                                    cid:element.cid,
                                    title:element.name_zh,
                                    subTitle:element.name_en,
                                    schoolBadge:self.$http.serverUrl+element.image_url,
                                    address:element.location,
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
                let url=!!item.attentionType?"/schoolCollect/cancelSchoolCollect":"/schoolCollect/addSchoolCollect";//已收藏则取消，反之添加
                let param=!!item.attentionType?{
                    collectId:item.cid
                }:{
                    schoolId:item.id,
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
            },
            choseType(type){
                this.typeSelected=type;
                self.getList();
            },
            choseSortType(type){
                this.sortSelected=type;
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
    @import './universityLibrary.scss';
</style>