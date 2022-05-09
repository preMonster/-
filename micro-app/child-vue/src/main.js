import Vue from "vue";
import App from "./App.vue";

import router from "./routers/index";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

if (window.__MICRO_APP_ENVIRONMENT__) {
  console.log("我在微前端环境中");
}

//  umd模式

// let app = null;

// function mount() {
//   console.log("进入");
//   app = new Vue({
//     router,
//     render: (h) => h(App),
//   }).$mount("#app");
// }

// function unmount() {
//   console.log("离开");
//   app.$destroy();
//   app.$el.innerHTML = "";
//   app = null;
// }

// if (window.__MICRO_APP_ENVIRONMENT__) {
//   window[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount };
// } else {
//   mount();
// }
