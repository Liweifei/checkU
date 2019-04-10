<template>
	<div class="appHeader">
        <img :src="logo" alt="error" class="logo">
        <el-dropdown class="highSchool">
            <span class="el-dropdown-link">
                高校<i class="el-icon-arrow-down el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown class="schoolWork">
            <span class="el-dropdown-link">
                学业<i class="el-icon-arrow-down el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <span class="headItem">
            <router-link to="/">高效匹配</router-link>
        </span>
        <span class="headItem">
            <router-link to="/">问答</router-link>
        </span>
        <span class="headItem">
            <router-link to="/">社区</router-link>
        </span>
        <div class="headerRight">
            <i class="el-icon-search iconItem"></i>
            <i class="el-icon-bell iconItem"></i>
            <img :src="headprotrait" alt="" class="headprotrait">
            <el-dropdown class="schoolWork">
                <span class="el-dropdown-link">
                    张3<i class="el-icon-arrow-down el-icon-caret-bottom"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script type="text/javascript">
    import {mapMutations, mapState, mapActions} from "vuex";
	export default{
		name: 'appHeader',
		data(){
			return{
				logo:require("img/logo.png"),
				headprotrait:require("img/headProtrait.png"),
			}
		},
        methods:mapActions({
            setOpenType:"setOpenType"
        })
	}

</script>
<style lang="scss">
    @import './appHeader.scss';
</style>