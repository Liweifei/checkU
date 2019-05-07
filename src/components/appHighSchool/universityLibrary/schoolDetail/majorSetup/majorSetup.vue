<template>
    <div class="majorSetup">
        <div class="selectionList containMain">
            <search-input placeholder="搜索专业"></search-input>
            <div class="item">
                <span class="name">专业分类：</span>
                <ul class="area">
                    <li v-for="(item,index) in majorList" :class="{'selected':majorSelected==item.value}" @click="choseMajorType(item.value)">{{item.label}}</li>
                </ul>
            </div>
            <div class="item">
                <span class="name">排名类型：</span>
                <ul class="area">
                    <li v-for="(item,index) in sortTypeList":class="{'selected':sortTypeSelected==item.value}" @click="choseSortType(item.value)">{{item.label}}</li>
                </ul>
                <div class="totalNum">共<span>{{totalNum}}</span>个结果</div>
            </div>
        </div>
        <div class="containMain contain">
            <div class="head">
                <div class="sort">序号</div>
                <div class="major">专业</div>
                <div class="majorClassification">专业分类</div>
                <div class="eductionalSystme ">学制</div>
                <div class="sortUs">排名US<br/>NEWS榜</div>
                <div class="sortWorld">排名<br/>世界排名榜</div>
            </div>
            <ul class="list">
                <li v-for="(item,index) in schoolList">
                    <router-link :to="{name:'activityDetail'}">
                        <div class="sort">{{index+1}}</div>
                        <div class="major">{{item.majorCn}}
                            <span class="majorEn">（{{item.majorEn}}）</span>
                        </div>
                        <div class="majorClassification">{{item.majorClassification}}</div>
                        <div class="eductionalSystme ">{{item.eductionalSystme}}</div>
                        <div class="sortUs" :class="{'front':item.sortUs<4}">{{item.sortUs}}</div>
                        <div class="sortWorld" :class="{'front':item.sortWorld<4}">{{item.sortWorld}}</div>
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
    import appSearchInput from "@/components/appSearchInput/appSearchInput";
    let self;
    export default{
        name: 'majorSetup',
        data(){
            return{
                majorList:[
                    {
                        label:"不限",
                        value:""
                    },
                    {
                        label:"商科",
                        value:"inland"
                    },
                    {
                        label:"工学",
                        value:"foreign"
                    },
                    {
                        label:"理科",
                        value:"foreign"
                    },
                    {
                        label:"社会科学",
                        value:"foreign"
                    }
                ],
                majorSelected:"",
                sortTypeList:[
                    {
                        label:"US NEWS榜",
                        value:"PRAD"
                    },
                    {
                        label:"社区建设",
                        value:"世界排名榜"
                    }
                ],
                sortTypeSelected:"PRAD",
                schoolList:[
                    {
                        majorCn:"人类学",
                        majorEn:"Anthropology",
                        majorClassification:"社会科学",
                        eductionalSystme:"48个月",
                        sortUs:1,
                        sortWorld:2,
                    },
                    {
                        majorCn:"人类学",
                        majorEn:"Anthropology",
                        majorClassification:"社会科学",
                        eductionalSystme:"48个月",
                        sortUs:6,
                        sortWorld:8,
                    },
                    {
                        majorCn:"人类学",
                        majorEn:"Anthropology",
                        majorClassification:"社会科学",
                        eductionalSystme:"48个月",
                        sortUs:6,
                        sortWorld:8,
                    },
                    {
                        majorCn:"人类学",
                        majorEn:"Anthropology",
                        majorClassification:"社会科学",
                        eductionalSystme:"48个月",
                        sortUs:6,
                        sortWorld:8,
                    },
                    {
                        majorCn:"人类学",
                        majorEn:"Anthropology",
                        majorClassification:"社会科学",
                        eductionalSystme:"48个月",
                        sortUs:6,
                        sortWorld:8,
                    },
                    {
                        majorCn:"人类学",
                        majorEn:"Anthropology",
                        majorClassification:"社会科学",
                        eductionalSystme:"48个月",
                        sortUs:6,
                        sortWorld:8,
                    },
                    {
                        majorCn:"人类学",
                        majorEn:"Anthropology",
                        majorClassification:"社会科学",
                        eductionalSystme:"48个月",
                        sortUs:6,
                        sortWorld:8,
                    },
                    {
                        majorCn:"人类学",
                        majorEn:"Anthropology",
                        majorClassification:"社会科学",
                        eductionalSystme:"48个月",
                        sortUs:6,
                        sortWorld:8,
                    },
                ],
                notAttention:require("img/appActivity/guanzhu_n.png"),
                attentioned:require("img/appActivity/guanzhu.png"),
                currentPage:1,
                totalNum:126,
            }
        },
        methods: {
            choseMajorType(type){
                self.majorSelected=type;
            },
            choseSortType(type){
                this.sortTypeSelected=type;
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
        },
        components:{
            "search-input":appSearchInput,   
        }
    }

</script>
<style lang="scss">
    @import './majorSetup.scss';
</style>