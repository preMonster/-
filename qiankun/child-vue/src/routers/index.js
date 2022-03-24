import Vue from "vue";
import VueRouter from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/home/index.vue") },
  { path: "/testPage", component: () => import("@/views/testPage/index.vue") },
];

const router = new VueRouter({
  base: window.__POWERED_BY_QIANKUN__ ? "/app-vue/" : "/",
  mode: "history",
  routes, // `routes: routes` 的缩写
});
Vue.use(router);
Vue.use(VueRouter);

export default router;
