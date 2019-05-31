<template>
    <div class="activityMain">
        <!-- 头部 -->
        <app-header not-index="true"></app-header>
        <!-- 内容区 -->
        <div class="headSearchBox">
            <div class="contain">
                <ul class="tabs">
                    <li v-for="(item,index) in $t('activityMain.tabs')" :class="{'selected':item.type==thisRoute,'enLi':$i18n.locale=='en'}" @click="changeView(item)">
                        <span>{{item.label}}</span>
                    </li>
                </ul>
                <search-input :placeholder="$t('activityMain.placeholder')"></search-input>
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
        name: 'activityMain',
        data(){
            return{
                tabs:[
                    {
                        label:"学科竞赛",
                        path:"/activityMain/disciplineCompetition",
                        type:"/activityMain/disciplineCompetition",
                    },
                    {
                        label:"志愿服务",
                        path:"/activityMain/voluntaryService",
                        type:"/activityMain/voluntaryService",
                    },
                    {
                        label:"科研项目",
                        path:"/activityMain/scientificProject",
                        type:"/activityMain/scientificProject",
                    },
                    {
                        label:"综合能力",
                        path:"/activityMain/disciplineCompetition4",
                        type:"/activityMain/disciplineCompetition4",
                    },
                ],
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
    @import './activityMain.scss';
</style>