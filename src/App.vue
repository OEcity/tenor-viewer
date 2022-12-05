<template>
  <v-app>
    <BaseNavigation />
    <RouterView />
  </v-app>
</template>

<script setup>
import BaseNavigation from "@/components/BaseNavigation.vue";
import { onMounted } from "vue";
import Api from "@/api/Api";
import { useStore } from "@/store";

const store = useStore();
onMounted(() => {
  Api.getTrendingCategories().then((res) => {
    store.commit("favourites/setFavourites", res.data.tags);
  });
});
</script>

<style scoped></style>
