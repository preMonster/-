<template>
  <div id="app-vue-child">
    <div style="margin: 10px">当前数字{{ childCount }}</div>
    <button @click="changeCount">数字加一</button>
    <router-link to="/">加载首页</router-link>

    <router-link to="/testPage">加载测试页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    childCount() {
      return this.$store.state.childCount;
    },
  },
  methods: {
    changeCount() {
      this.$setGlobalState &&
        this.$setGlobalState({
          count: this.childCount + 1,
        });
    },
  },
};
</script>

<style>
#app-vue-child {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
