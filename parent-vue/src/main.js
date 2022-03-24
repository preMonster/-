import Vue from "vue";
import router from "@/routers";
import { registerApplication, start } from "single-spa";
import App from "./App.vue";

Vue.config.productionTip = false;

async function loadScript(url) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;

    document.head.appendChild(script);
  });
}

//  注册配置， 别名随便取
registerApplication(
  "myVueApp",
  async () => {
    //  systemJS
    await loadScript("http://localhost:10001/js/chunk-vendors.js");
    await loadScript("http://localhost:10001/js/app.js");

    return window.singleVue;
  },
  (location) => location.pathname.startsWith("/vue") // 用户切换到了/vue的路由下，我需要加载刚才定义的子应用
);

start();

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
