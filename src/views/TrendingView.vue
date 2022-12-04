<template>
  <div class="container">
    <div v-for="gif in storedGifs" :key="gif.id" class="pa-1">
      <CardGIF :gif="gif" />
    </div>
  </div>
  <v-btn
    v-show="storedGifs.length > 0"
    :loading="loadingNewData"
    @click="getData"
    >Show more</v-btn
  >
</template>

<script setup lang="ts">
import Api from "@/api/Api";
import { computed, onMounted, ref } from "vue";
import { useStore } from "@/store";
import CardGIF from "@/components/CardGIF.vue";

const store = useStore();
const loadingNewData = ref(false);

const getData = () => {
  const currentPosition = store.state.lastPosition;
  loadingNewData.value = true;
  Api.getTrendingGifs(currentPosition)
    .then((res) => {
      store.commit("storeData", res.data);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      loadingNewData.value = false;
    });
};

const storedGifs = computed(() => store.state.gifs);

onMounted(() => {
  getData();
});
</script>

<style scoped>
.container {
  list-style: none;
  column-gap: 0;
  padding: 0;
  column-count: 5;
  column-width: 235px;
}
</style>
