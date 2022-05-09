import Vue from "vue";
import VueRouter from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/home/index.vue") },
  { path: "/child", component: () => import("@/views/child/index.vue") },
];

const router = new VueRouter({
  // 👇 设置基础路由，子应用可以通过window.__MICRO_APP_BASE_ROUTE__获取基座下发的baseroute，如果没有设置baseroute属性，则此值默认为空字符串
  base: window.__MICRO_APP_BASE_ROUTE__ || "/",
  mode: "hash",
  routes,
});
Vue.use(router);
Vue.use(VueRouter);

export default router;
