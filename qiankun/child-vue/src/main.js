import "./public-path";
import Vue from "vue";
import App from "./App.vue";
import router from "@/routers";

Vue.config.productionTip = false;

let instance = null;
function render(props = {}) {
  const { container } = props;

  instance = new Vue({
    router,
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
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
}
