<template>
  <div class="container mb-4">
    <div v-for="gif in props.gifArray" :key="gif.id" class="pa-1">
      <GifCard :gif="gif" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import GifCard from "@/components/GifCard.vue";
import type { GIFObject } from "@/store/types/GIFObject";

const props = defineProps({
  gifArray: {
    type: Array as PropType<GIFObject[]>,
  },
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
