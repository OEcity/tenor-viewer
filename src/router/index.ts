import { createRouter, createWebHistory } from "vue-router";
import TrendingView from "../views/TrendingView.vue";
import SearchView from "@/views/SearchView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Trending",
      component: TrendingView,
    },
    {
      path: "/search",
      name: "SearchGif",
      component: SearchView,
    },
  ],
});

export default router;
