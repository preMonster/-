<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>父应用</h1>
    <a href="/child">跳转子应用</a>
  </div>
</template>

<script>
export default {
  name: "App",
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
