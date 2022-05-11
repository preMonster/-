import Vue from "vue";
import App from "./App.vue";

import createRouter from "./routers/index";
import { vueBridge } from "@garfish/bridge";

Vue.config.productionTip = false;

export const provider = vueBridge({
  Vue,
  // 根组件
  rootComponent: App,
  // 返回一个 promise, 可在 mounting 前执行异步操作
  loadRootComponent: () => {
    return Promise.resolve(App);
  },
  // received vueInstance, do something
  handleInstance: (vueInstance, { basename, dom, appName, props }) => {
    console.log(vueInstance, basename, dom, appName, props);
  },
  appOptions: ({ basename }) => {
    return {
      el: "#app",
      router: createRouter(basename),
    };
  },
});

// 这能够让子应用独立运行起来，以保证后续子应用能脱离主应用独立运行，方便调试、开发
if (!window.__GARFISH__) {
  new Vue({
    router: createRouter(),
    render: (h) => h(App),
  }).$mount("#app");
}
