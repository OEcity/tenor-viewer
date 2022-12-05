<template>
  <GifGrid :gif-array="storedGifs" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";
import GifGrid from "@/components/GifGrid.vue";

const store = useStore();

const storedGifs = computed(() => store.state.favourites.gifs);
</script>

<style scoped></style>
