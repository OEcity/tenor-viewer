<template>
  <GifGrid :gif-array="storedGifs" :loading="showLoading" />
  <v-btn
    v-show="storedGifs.length > 0"
    :loading="loadingNewData"
    @click="getData"
    >Show more</v-btn
  >
</template>

<script setup lang="ts">
import Api from "@/api/Api";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useStore } from "@/store";
import GifGrid from "@/components/GifGrid.vue";

const store = useStore();
const loadingNewData = ref(false);
const storedGifs = computed(() => store.state.trending.gifs);

const showLoading = computed(
  () => loadingNewData.value === true && storedGifs.value.length === 0
);

const getData = () => {
  const currentPosition = store.state.trending.lastPosition;
  loadingNewData.value = true;
  Api.getTrendingGifs(currentPosition)
    .then((res) => {
      store.commit("trending/storeData", res.data);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      loadingNewData.value = false;
    });
};

onMounted(() => {
  getData();
});

onUnmounted(() => {
  store.commit("trending/clearData");
});
</script>

<style scoped></style>
