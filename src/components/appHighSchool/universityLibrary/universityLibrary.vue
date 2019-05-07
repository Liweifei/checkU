<template>
    <div class="universityLibrary">
        <div class="selectionList containMain">
            <div class="item">
                <span class="name">地区：</span>
                <ul class="area">
                    <li v-for="(item,index) in areaList" :class="{'selected':areaSelected==item.value}" @click="choseAreaType(item.value)">{{item.label}}</li>
                </ul>
            </div>
            <div class="item typeList">
                <span class="name">类型：</span>
                <ul class="area">
                    <li v-for="(item,index) in typeList":class="{'selected':typeSelected==item.value}" @click="choseType(item.value)">{{item.label}}</li>
                </ul>
            </div>
            <div class="item">
                <span class="name">排序：</span>
                <ul class="area">
                    <li v-for="(item,index) in sortList":class="{'selected':sortSelected==item.value}" @click="choseSortType(item.value)">{{item.label}}</li>
                </ul>
                <div class="totalNum">共<span>{{totalNum}}</span>个结果</div>
            </div>
        </div>
        <div class="containMain contain">
            <div class="head">
                <div class="sort">序号</div>
                <div class="schoolBadge">校徽</div>
                <div class="name">学校名称</div>
                <div class="address">地址</div>
                <div class="collection">收藏</div>
            </div>
            <ul class="list">
                <li v-for="(item,index) in universityList">
                    <router-link to="/schoolDetail/schoolInfomation">
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
                            <p class="title">{{item.title}}</p>
                            <p class="subTitle">{{item.subTitle}}</p>
                        </div>
                        <div class="address">{{item.address}}</div>
                        <div class="collection">
                            <img :src="item.attentionType==1?collectioned:notCollection" alt="">
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
        name: 'universityLibrary',
        data(){
            return{
                areaList:[
                    {
                        label:"全球",
                        value:""
                    },
                    {
                        label:"美国",
                        value:"inland"
                    },
                    {
                        label:"英国",
                        value:"foreign"
                    },
                    {
                        label:"加拿大",
                        value:"foreign"
                    },
                    {
                        label:"其他",
                        value:"foreign"
                    },
                    {
                        label:"美洲",
                        value:"foreign"
                    },
                    {
                        label:"欧洲",
                        value:"foreign"
                    },
                    {
                        label:"亚洲",
                        value:"foreign"
                    },
                    {
                        label:"大洋洲",
                        value:"foreign"
                    },
                    {
                        label:"非洲",
                        value:"foreign"
                    }
                ],
                areaSelected:"",
                typeList:[
                    {
                        label:"不限",
                        value:""
                    },
                    {
                        label:"综合性大学",
                        value:"math"
                    },
                    {
                        label:"文理学院",
                        value:"physics"
                    },
                    {
                        label:"夏校",
                        value:"chemistry"
                    },
                ],
                typeSelected:"",
                sortList:[
                    {
                        label:"推荐",
                        value:""
                    },
                    {
                        label:"热度榜",
                        value:"math"
                    },
                    {
                        label:"US NEWS榜 ",
                        value:"physics"
                    },
                    {
                        label:"世界排名榜",
                        value:"chemistry"
                    },
                ],
                sortSelected:"",
                universityList:[
                    {
                        title:"普林斯顿大学",
                        subTitle:"Princeton,NJ",
                        schoolBadge:require("img/appHighSchool/onlyTest/xx_plsd.png"),
                        address:"美国新泽西州的普林斯顿市",
                        attentionType:0,
                    },
                    {
                        title:"普林斯顿大学",
                        subTitle:"Princeton,NJ",
                        schoolBadge:require("img/appHighSchool/onlyTest/xx_plsd.png"),
                        address:"美国新泽西州的普林斯顿市",
                        attentionType:0,
                    },
                    {
                        title:"普林斯顿大学",
                        subTitle:"Princeton,NJ",
                        schoolBadge:require("img/appHighSchool/onlyTest/xx_plsd.png"),
                        address:"美国新泽西州的普林斯顿市",
                        attentionType:0,
                    },
                    {
                        title:"普林斯顿大学",
                        subTitle:"Princeton,NJ",
                        schoolBadge:require("img/appHighSchool/onlyTest/xx_plsd.png"),
                        address:"美国新泽西州的普林斯顿市",
                        attentionType:0,
                    },
                    {
                        title:"普林斯顿大学",
                        subTitle:"Princeton,NJ",
                        schoolBadge:require("img/appHighSchool/onlyTest/xx_plsd.png"),
                        address:"美国新泽西州的普林斯顿市",
                        attentionType:0,
                    },
                    {
                        title:"普林斯顿大学",
                        subTitle:"Princeton,NJ",
                        schoolBadge:require("img/appHighSchool/onlyTest/xx_plsd.png"),
                        address:"美国新泽西州的普林斯顿市",
                        attentionType:0,
                    },
                    {
                        title:"普林斯顿大学",
                        subTitle:"Princeton,NJ",
                        schoolBadge:require("img/appHighSchool/onlyTest/xx_plsd.png"),
                        address:"美国新泽西州的普林斯顿市",
                        attentionType:0,
                    },
                    {
                        title:"普林斯顿大学",
                        subTitle:"Princeton,NJ",
                        schoolBadge:require("img/appHighSchool/onlyTest/xx_plsd.png"),
                        address:"美国新泽西州的普林斯顿市",
                        attentionType:1,
                    },
                    {
                        title:"普林斯顿大学",
                        subTitle:"Princeton,NJ",
                        schoolBadge:require("img/appHighSchool/onlyTest/xx_plsd.png"),
                        address:"美国新泽西州的普林斯顿市",
                        attentionType:0,
                    },
                    {
                        title:"普林斯顿大学",
                        subTitle:"Princeton,NJ",
                        schoolBadge:require("img/appHighSchool/onlyTest/xx_plsd.png"),
                        address:"美国新泽西州的普林斯顿市",
                        attentionType:0,
                    },
                ],
                no1:require("img/appHighSchool/no1.png"),
                no2:require("img/appHighSchool/no2.png"),
                no3:require("img/appHighSchool/no3.png"),
                notCollection:require("img/appActivity/guanzhu_n.png"),
                collectioned:require("img/appActivity/guanzhu.png"),
                currentPage:1,
                totalNum:63,
            }
        },
        methods: {
            choseAreaType(type){
                self.areaSelected=type;
            },
            choseType(type){
                this.typeSelected=type;
            },
            choseSortType(type){
                this.sortSelected=type;
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
    @import './universityLibrary.scss';
</style>