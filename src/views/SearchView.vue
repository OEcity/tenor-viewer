<template>
  <div>
    <v-text-field
      :model-value="searchString"
      @update:modelValue="triggerSearch"
      variant="solo"
      placeholder="Vyhledat"
      prepend-inner-icon="mdi-magnify"
    />
    <GifGrid :gif-array="storedGifs" />
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
const searchString = ref("");

const store = useStore();
const loadingNewData = ref(false);
const getData = (triggeredFromButton: boolean) => {
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

const storedGifs = computed(() => store.state.search.gifs);

const triggerSearch = (inputString: string) => {
  searchString.value = inputString;
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
