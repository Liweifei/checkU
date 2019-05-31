<template>
    <div class="comingSoon">
        <!-- 头部 -->
        <app-header not-index="true"></app-header>
        <!-- 内容区 -->
        <div class="main">
            <el-image :src="comingSoonImg"></el-image>
            <p class="msg">{{ $t("comingSoon.msg")}}</p>
        </div>
    </div>
    
</template>

<script type="text/javascript">
    import appHeader from "@/components/appHeader/appHeader";
    let self;
    export default{
        name: 'comingSoon',
        data(){
            return{
                comingSoonImg:require("img/appDefaultPage/nothing_figure.png")
            }
        },
        methods: {
            reload(){
                // this.$router.go(-1);
            }
        },
        mounted(){
            self=this;
        },
        components:{
            "app-header":appHeader,
        }
    }

</script>
<style lang="scss">
    @import './comingSoon.scss';
</style>