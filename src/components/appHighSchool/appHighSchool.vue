<template>
    <div class="appHighSchool">
        <app-header not-index="true"></app-header>
        高校
    </div>
</template>

<script type="text/javascript">
    import appHeader from "@/components/appHeader/appHeader";
    let self;
    export default{
        name: 'appHighSchool',
        data(){
            return{
            }
        },
        methods: {
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
    @import './appHighSchool.scss';
</style>