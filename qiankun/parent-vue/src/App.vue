<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div style="margin: 10px 0">当前数字：{{ count }}</div>
    <div class="btn">
      <button @click="changeNum">让当前数字加一</button>
    </div>

    <router-link to="/">加载自己的首页</router-link>

    <router-link to="/app-vue">加载vue子应用</router-link>

    <router-link to="/app-react">加载react子应用</router-link>

    <router-link to="/app-static">加载静态子应用</router-link>

    <template>
      <div>
        <router-view></router-view>
        <div id="container"></div>
      </div>
    </template>
  </div>
</template>

<script>
import setGlobalState from "@/qiankunState";
export default {
  name: "App",
  computed: {
    count() {
      return this.$store.state.count || 0;
    },
  },
  methods: {
    changeNum() {
      setGlobalState({
        count: this.count + 1,
      });
    },
  },
};
</script>

<style></style>
