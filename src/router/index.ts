import { createRouter, createWebHistory } from "vue-router";
import TrendingView from "../views/TrendingView.vue";
import SearchView from "@/views/SearchView.vue";
import FavouritesView from "@/views/FavouritesView.vue";

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
    {
      path: "/favourites",
      name: "FavouriteGIFs",
      component: FavouritesView,
    },
  ],
});

export default router;
