<template>
    <div class="notFound">
        <!-- 头部 -->
        <app-header not-index="true"></app-header>
        <!-- 内容区 -->
        <div class="main">
            <el-image :src="notFoundImg"></el-image>
            <p class="msg">{{ $t("notFound.msg")}}</p>
            <span class="reload" @click="reload">{{ $t("notFound.reload")}}</span>
            <button class="back">{{ $t("notFound.back")}}</button>
        </div>
    </div>
    
</template>

<script type="text/javascript">
    import appHeader from "@/components/appHeader/appHeader";
    let self;
    export default{
        name: 'notFound',
        data(){
            return{
                notFoundImg:require("img/appDefaultPage/404_figure.png")
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
    @import './notFound.scss';
</style>