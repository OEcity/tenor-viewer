<template>
  <div>
    <v-text-field
      :model-value="searchString"
      @update:modelValue="triggerSearch"
      variant="solo"
      placeholder="Vyhledat"
      prepend-inner-icon="mdi-magnify"
    />
    <CategoriesGrid
      v-show="searchString.length === 0"
      :categories="categories"
      @onCategoryClick="triggerSearch"
    />
    <GifGrid :loading="showLoading" :gif-array="storedGifs" />
    <v-btn
      v-show="storedGifs.length > 0"
      :loading="loadingNewData"
      @click="getData(true)"
      width="100%"
      >Show more</v-btn
    >
  </div>
</template>

<script setup lang="ts">
import Api from "@/api/Api";
import { computed, onUnmounted, ref } from "vue";
import GifGrid from "@/components/GifGrid.vue";
import { useStore } from "@/store";
import CategoriesGrid from "@/components/CategoriesGrid.vue";
const searchString = ref("");

const store = useStore();
const loadingNewData = ref(false);
const storedGifs = computed(() => store.state.search.gifs);
const categories = computed(() => store.state.favourites.categories);

const showLoading = computed(
  () => loadingNewData.value === true && storedGifs.value.length === 0
);

const getData = (triggeredFromButton: boolean) => {
  if (searchString.value.length === 0) return;

  const currentPosition = triggeredFromButton
    ? store.state.search.lastPosition
    : undefined;

  loadingNewData.value = true;
  Api.searchGifs(searchString.value, currentPosition)
    .then((res) => {
      if (triggeredFromButton) {
        store.commit("search/appendData", res.data);
      } else {
        store.commit("search/storeNewData", res.data);
      }
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      loadingNewData.value = false;
    });
};

const interval = ref<ReturnType<typeof setTimeout>>();
const triggerSearch = (inputString: string) => {
  searchString.value = inputString;
  if (inputString.length === 0) {
    store.commit("search/clearData");
    return;
  }
  if (interval.value != null) {
    clearTimeout(interval.value);
  }
  interval.value = setTimeout(() => {
    getData(false);
  }, 200);
};

onUnmounted(() => {
  store.commit("search/clearData");
});
</script>

<style scoped></style>
