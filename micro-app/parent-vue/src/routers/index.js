import Vue from "vue";
import VueRouter from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/home/index.vue") },
  {
    path: "/vue-page/*",
    name: "vue-page",
    component: () => import("@/views/childVue/index.vue"),
  },
  {
    path: "/static-page/*",
    name: "static-page",
    component: () => import("@/views/childStatic/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
Vue.use(router);
Vue.use(VueRouter);

export default router;
