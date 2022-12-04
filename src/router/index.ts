import { createRouter, createWebHistory } from "vue-router";
import TrendingView from "../views/TrendingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Trending",
      component: TrendingView,
    },
  ],
});

export default router;
