<template>
    <div class="majorSetup">
        <div class="selectionList containMain">
            <search-input :placeholder="$t('majorSetup.placeholder')"></search-input>
            <div class="item">
                <span class="name">{{$t('majorSetup.majorClassification')}}：</span>
                <ul class="area">
                    <li v-for="(item,index) in $t('majorSetup.majorList')" :class="{'selected':majorSelected==item.value}" @click="choseMajorType(item.value)">{{item.label}}</li>
                </ul>
            </div>
            <div class="item">
                <span class="name">{{$t('majorSetup.ranking')}}：</span>
                <ul class="area">
                    <li v-for="(item,index) in $t('majorSetup.sortTypeList')":class="{'selected':sortTypeSelected==item.value}" @click="choseSortType(item.value)">{{item.label}}</li>
                </ul>
                <div class="totalNum">{{$t('majorSetup.total')}}<span>{{totalNum}}</span>{{$t('majorSetup.result')}}</div>
            </div>
        </div>
        <div class="containMain contain">
            <div class="head">
                <div class="sort">{{$t('majorSetup.sort')}}</div>
                <div class="major">{{$t('majorSetup.major')}}</div>
                <div class="majorClassification">{{$t('majorSetup.majorClassification')}}</div>
                <div class="eductionalSystme ">{{$t('majorSetup.eductionalSystme')}}</div>
                <div class="sortUs" v-html="$t('majorSetup.sortUs')"></div>
                <div class="sortWorld" v-html="$t('majorSetup.sortWorld')"></div>
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
                majorSelected:"",
                sortTypeSelected:"US",
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