<template>
  <div id="app">
    <router-link to="/vue">加载子应用</router-link>

    <!--  子应用加载时加载的位置 -->
    <div id="vue"></div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>
