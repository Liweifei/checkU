<template>
    <div class="appSearchInput">
        <el-input
            :placeholder="placeholder"
            v-model="searchText">
        </el-input>
        <img :src="searchIcon" alt="">
    </div>
</template>

<script type="text/javascript">
    let self;
    export default{
        name: 'appSearchInput',
        props:['placeholder'],
        data(){
            return{
                searchIcon:require("img/appActivity/sousuo_k.png"),
                searchText:""
            }
        },
        methods: {

        },
        mounted(){
            self=this;
        }
    }

</script>
<style lang="scss">
    @import './appSearchInput.scss';
</style>