<template>
    <div>
        <app-header></app-header>
        <div id="home" class="home"></div>
    </div>
</template>

<script type="text/javascript">
    import appHeader from "@/components/appHeader/appHeader";
    import {mapState} from "vuex";
    export default{
        name: 'Home',
        data(){
            return{
            //    msg:this.$route.query.username,
            //    loginStatus:this.$route.query.loginStatus 
            }
        },
        methods: {
            handleOpen(key) {
                console.log(key);
            },
            handleClose(key) {
                console.log(key);
            },
            // 点击退出登录
            logOutFn() {
                let api = "退出的地址";
                    console.log(api);
                    this.loginStatus=false;
                    
                    // axios.post(api, {
                    //     userName: this.user.name,
                    //     password: this.user.password
                    // })
                    // .then((response)=>{
                    //     console.log(response);
                    //      //退出成功的执行
                    //       this.loginStatus=false;
                    // })
                    // .catch((error)=>{
                    //     console.log(error);
                    // });
            }
        },
        mounted(){
            
        },
        components:{
            "app-header":appHeader,
        }
    }

</script>
<style lang="scss">
    @import './appHome.scss';
</style>