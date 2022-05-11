import Vue from "vue";
import VueRouter from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/home/index.vue") },
  { path: "/child", component: () => import("@/views/child/index.vue") },
];
Vue.use(VueRouter);

export default (basename = "/") => {
  const router = new VueRouter({
    base: basename,
    mode: "hash",
    routes,
  });
  Vue.use(router);

  return router;
};
