<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

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
export default {
  name: "App",
};
</script>

<style></style>
