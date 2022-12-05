<template>
  <v-card
    @click="openGIFLink"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
  >
    <v-img width="235" :src="imgSrc" :alt="gif.content_description">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <v-card-actions class="d-flex justify-space-between pa-4" id="div-actions">
      <v-btn
        height="35"
        width="35"
        icon
        elevation="2"
        @click.stop="copyLinkToClipboard"
      >
        <v-icon size="19" icon="mdi-content-copy" />
      </v-btn>
      <v-btn
        height="30"
        width="30"
        icon
        elevation="2"
        @click.stop="toggleFavourite"
      >
        <v-icon size="19" icon="mdi-heart" :color="heartColor" />
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { GIFObject } from "@/store/types/GIFObject";
import { computed, ref } from "vue";
import { useStore } from "@/store";

const props = defineProps({
  gif: Object as PropType<GIFObject>,
});

const copyLinkToClipboard = () => {
  navigator.clipboard.writeText(props.gif!.media_formats.gif.url);
};

const mouseHovered = ref(false);
const interval = ref<ReturnType<typeof setTimeout>>();
const onMouseOver = () => {
  if (interval.value != undefined) {
    clearTimeout(interval.value);
  }
  mouseHovered.value = true;
};

const onMouseLeave = () => {
  if (interval.value != undefined) {
    clearTimeout(interval.value);
  }
  interval.value = setTimeout(() => {
    mouseHovered.value = false;
  }, 2500);
};

const imgSrc = computed(() => {
  if (props.gif == undefined) return "";
  return mouseHovered.value
    ? props.gif.media_formats.gif.url
    : props.gif.media_formats.gifpreview.url;
});

const openGIFLink = () => {
  window.open(props.gif!.itemurl, "_blank");
};

const store = useStore();
const toggleFavourite = () => {
  store.commit("favourites/toggleFavouriteGif", props.gif);
};

const favouriteGIFsIds = computed(() =>
  store.state.favourites.gifs.map((gif) => gif.id)
);
const heartColor = computed(() =>
  favouriteGIFsIds.value.includes(props.gif!.id) ? "red" : null
);
</script>

<style scoped>
#div-actions {
  background-color: #faf8f7;
}
</style>
