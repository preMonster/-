<template>
  <div id="app">
    <div>父应用值：{{ parentValue }}</div>
    <router-link to="/">首页</router-link>
    <router-link to="/child">子页面</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      parentValue: "",
    };
  },
  created() {
    console.log("1111111111111");
    console.log(window);
    console.log(window.rawWindow);
    // 子应用卸载
    window.addEventListener("unmount", function () {
      // 执行卸载相关操作
      console.log("子应用卸载");
    });

    const data = window.microApp.getData(); // 返回基座下发的data数据
    console.log("--------父应用传值--------");
    console.log(data);
    this.parentValue = data.value;

    // 在初次绑定监听函数时如果有缓存数据，是否需要主动触发一次，默认为false
    window.microApp.addDataListener(this.dataListener, true);
  },
  destroyed() {
    // 解绑监听函数
    // window.microApp.removeDataListener(this.dataListener);
    // 清空当前子应用的所有绑定函数(全局数据函数除外)
    window.microApp.clearDataListener();
  },
  methods: {
    dataListener(data) {
      console.log("来自基座应用的数据", data);
      this.parentValue = data.value;
    },
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
