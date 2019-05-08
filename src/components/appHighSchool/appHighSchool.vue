<template>
    <div class="appHighSchool">
        <!-- 头部 -->
        <app-header not-index="true"></app-header>
        <!-- 内容区 -->
        <div class="headSearchBox">
            <div class="contain">
                <ul class="tabs">
                    <li v-for="(item,index) in $t('appHighSchool.tabs')" :class="{'selected':item.type==thisRoute}" @click="changeView(item)">
                        <span>{{item.label}}</span>
                    </li>
                </ul>
                <search-input :placeholder="$t('appHighSchool.placeholder')"></search-input>
            </div>
        </div>
        <router-view></router-view>
        <!-- 底部 -->
        <app-footer></app-footer>
    </div>
</template>

<script type="text/javascript">
    import appHeader from "@/components/appHeader/appHeader";
    import appFooter from "@/components/appFooter/appFooter";
    import appSearchInput from "@/components/appSearchInput/appSearchInput";
    let self;
    export default{
        name: 'appHighSchool',
        data(){
            return{
                // tabs:[
                //     {
                //         label:"高校库",
                //         path:"/appHighSchool/universityLibrary",
                //         type:"/appHighSchool/universityLibrary",
                //     },
                //     {
                //         label:"高校榜单",
                //         path:"/appHighSchool/listOfUniversities",
                //         type:"/appHighSchool/listOfUniversities",
                //     },
                //     {
                //         label:"专业库",
                //         path:"/appHighSchool/optionalLibrary",
                //         type:"/appHighSchool/optionalLibrary",
                //     }
                // ],
                thisRoute:null,
            }
        },
        methods: {
            changeView(item){//点击tab改变路由
                self.thisRoute=item.type;
                self.$router.replace({
                    path:item.path,
                })
            },
            changeViewFromPage(){//从其它界面进入时候需要改变路由
                self.thisRoute=self.$route.path;
            }
        },
        created(){
            self=this;
            self.changeViewFromPage();
        },
        watch:{
            $route(){
                if(this.$route.path!==this.thisRoute){
                    this.changeViewFromPage();
                }
            }
        },
        components:{
            "app-header":appHeader,
            "app-footer":appFooter,
            "search-input":appSearchInput,
        }
    }

</script>
<style lang="scss">
    @import './appHighSchool.scss';
</style>