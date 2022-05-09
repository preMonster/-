<template>
  <div id="app">
    <router-link to="/">首页</router-link>
    <router-link to="/vue-page/#/">vue子应用</router-link>
    <router-link to="/static-page/#/">静态子应用</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
window.a = 1;
console.log(window);
export default {
  name: "App",
};
</script>
