import Vue from "vue";
import router from "@/routers";
import App from "./App.vue";

//  引入single-spa
import singleSpaVue from "single-spa-vue";

Vue.config.productionTip = false;

//  声明配置，说明子应用要挂载在父应用哪个标签下
const appOptions = {
  el: "#vue", // 挂载到父应用中id为vue的标签中
  router,
  render: (h) => h(App),
};

//  代替我们手动去写bootstrap mount unmount这些方法
const vueLifCycle = singleSpaVue({
  Vue,
  appOptions,
});

//  如果是父应用引用我需要把__webpack_public_path__设置为自己的域名。
if (window.singleSpaNavigate) {
  __webpack_public_path__ = "http://localhost:10001/";
} else {
  //  不是子应用
  delete appOptions.el;
  new Vue(appOptions).$mount("#app");
}

//  协议接入 我定好协议 父应用会调用这些方法
export const bootstrap = vueLifCycle.bootstrap;
export const mount = vueLifCycle.mount;
export const unmount = vueLifCycle.unmount;

//  我们需要父应用加载子应用 将子应用打包成一个个的lib去给父应用使用
//  bootstrap mount unmount
// single-spa / single-spa-vue
