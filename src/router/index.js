import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "TodoList",
    component: () => import("@/containers/TodoList/TodoList.vue"),
  },
  {
    path: "/404",
    name: "NotFound",
    component: () => import("@/containers/NotFoundPage/NotFoundPage.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
