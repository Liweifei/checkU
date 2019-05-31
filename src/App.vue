<template>
  <div id="app">
    <router-view  v-if="isRouterAlive" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      isRouterAlive:true,
    }
  },
  methods:{
    reload(){//刷新界面方法
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true
      });
    }
  },
  created(){
    let self=this;
    self.$root.eventHelper.$on("reloadPage",()=>{//非子父组件通信，监听reload操作
      self.reload();
    })
  }
}
</script>