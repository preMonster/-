import Vue from "vue";
import App from "./App.vue";
import router from "./routers/index";
import microApp from "@micro-zoe/micro-app";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

microApp.start({
  plugins: {
    global: [
      {
        loader(code) {
          return code;
        },
      },
    ],
    modules: {
      "static-app": [
        {
          loader(code, url, options) {
            console.log("----------static-app插件---------");
            console.log(code, url, options);
            if (url.includes("entry.js")) {
              code = code.replace("var a =", "window.a =");
              code = code.replace(
                "console.log('静态子应用', a);",
                "console.log('静态子应用,window', window.a);"
              );
            }
            return code;
          },
        },
      ],
    },
  },
  lifeCycles: {
    created(e) {
      console.log(e);
      console.log("created");
    },
    beforemount() {
      console.log("beforemount");
    },
    mounted() {
      console.log("mounted");
    },
    unmount() {
      console.log("unmount");
    },
    error() {
      console.log("error");
    },
  },
});
