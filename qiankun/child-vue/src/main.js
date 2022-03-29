import "./public-path";
import Vue from "vue";
import App from "./App.vue";
import router from "@/routers";
import store from "@/store";

let setGlobalState = null;
Vue.config.productionTip = false;

let instance = null;
function render(props = {}) {
  const { container, propStore } = props;

  Vue.use({
    install: function (Vue) {
      Vue.prototype.$setGlobalState = setGlobalState;
      Vue.prototype.$propStore = propStore;
    },
  });

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(
    container ? container.querySelector("#app-vue-child") : "#app-vue-child"
  );
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {}
export async function mount(props) {
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log("child-vue", state, prev);
    store.commit("changeCount", state.count);
  });
  setGlobalState = props.setGlobalState;
  render(props, setGlobalState);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
}
