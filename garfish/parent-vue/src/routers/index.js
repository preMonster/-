import Vue from "vue";
import VueRouter from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/home/index.vue") },
  { path: "/vue", component: () => import("@/views/child/index.vue") },
];

const router = new VueRouter({
  base: "/",
  mode: "history",
  routes,
});
Vue.use(router);
Vue.use(VueRouter);

export default router;
