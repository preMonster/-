<template>
  <div>
    <input type="text" v-model="formData.value" />
    <!--
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
     -->
    <micro-app
      name="vue-app"
      url="http://localhost:10001/"
      baseroute="/vue-page"
      destroy
      :data="formData"
      @created="created"
      @beforemount="beforemount"
      @mounted="mounted"
      @unmount="unmount"
      @error="error"
    ></micro-app>
  </div>
</template>

<script>
import microApp from "@micro-zoe/micro-app";
export default {
  data() {
    return {
      formData: { value: "11111" },
    };
  },
  methods: {
    created() {
      console.log("micro-app元素被创建");
    },
    beforemount() {
      console.log("即将被渲染");
    },
    mounted() {
      console.log("已经渲染完成");
    },
    unmount() {
      console.log("已经卸载");
    },
    error() {
      console.log("渲染出错");
    },
  },
  watch: {
    "formData.value"() {
      // 发送数据给子应用 my-app，setData第二个参数只接受对象类型
      microApp.setData("vue-app", { ...this.formData });
    },
  },
};
</script>

<style lang="scss" scoped></style>
