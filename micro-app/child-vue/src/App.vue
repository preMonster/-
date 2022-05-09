<template>
  <div id="app">
    <router-link to="/">首页</router-link>
    <router-link to="/child">子页面</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    console.log("1111111111111");
    console.log(window);
    console.log(window.rawWindow);
    // 子应用卸载
    window.addEventListener("unmount", function () {
      // 执行卸载相关操作
      console.log("子应用卸载");
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
