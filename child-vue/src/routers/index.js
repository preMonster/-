import Vue from "vue";
import VueRouter from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/home/index.vue") },
  { path: "/test", component: () => import("@/views/test/index.vue") },
];

const router = new VueRouter({
  mode: "history",
  base: "/vue",
  routes, // `routes: routes` 的缩写
});

Vue.use(VueRouter);
export default router;
