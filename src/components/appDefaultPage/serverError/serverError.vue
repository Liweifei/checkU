<template>
    <div class="serverError">
        <!-- 头部 -->
        <app-header not-index="true"></app-header>
        <!-- 内容区 -->
        <div class="main">
            <el-image :src="serverErrorImg"></el-image>
            <p class="msg">{{ $t("serverError.msg")}}</p>
            <span class="back" @click="back">{{ $t("serverError.back")}}</span>
            <button class="backHome">{{ $t("serverError.backHome")}}</button>
        </div>
    </div>
    
</template>

<script type="text/javascript">
    import appHeader from "@/components/appHeader/appHeader";
    let self;
    export default{
        name: 'serverError',
        data(){
            return{
                serverErrorImg:require("img/appDefaultPage/500_figure.png")
            }
        },
        methods: {
            back(){
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
    @import './serverError.scss';
</style>