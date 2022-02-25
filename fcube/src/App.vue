<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "add",
  data() {
    return {

    }
  },
  mounted(){
    window.addEventListener('hashchange',()=>{
      var currentPath = window.location.hash.slice(1); // 获取输入的路由
      if(this.$router.path !== currentPath){
        this.$router.push(currentPath); // 动态跳转
      }
    },false);
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
img {
  width: 100%;
  height: 100%;
  display: block;
}
p, ul {
  margin: 0;
}
a {
  text-decoration: none;
  cursor: pointer;
}
.mainContent {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
</style>
