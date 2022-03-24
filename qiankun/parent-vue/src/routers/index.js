import Vue from "vue";
import VueRouter from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/home/index.vue") },
];

const router = new VueRouter({
  mode: "history",
  routes, // `routes: routes` 的缩写
});
Vue.use(router);
Vue.use(VueRouter);

export default router;
