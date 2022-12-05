<template>
  <div id="container" class="flex-wrap justify-center">
    <v-card
      v-for="category in props.categories"
      :key="category.name"
      height="50"
      width="232"
      class="ma-1 position-relative"
      @click="onClick(category)"
    >
      <v-img :src="category.image" :alt="category.name" :cover="true" />
      <div id="div-overlay" />
      <span id="title-category">{{ category.name }}</span>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { Category } from "@/store/types/Category";

const props = defineProps({
  categories: Array as PropType<Category[]>,
});

const emit = defineEmits(["onCategoryClick"]);

const onClick = (category: Category) => {
  emit("onCategoryClick", category.searchterm);
};
</script>

<style scoped>
#container {
  display: flex;
}

#div-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.32);
}

#title-category {
  position: absolute;
  color: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
}
</style>
