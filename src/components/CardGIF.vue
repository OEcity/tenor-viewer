<template>
  <v-card @click="openGIFLink">
    <v-img
      width="235"
      :src="imgSrc"
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
      :alt="gif.content_description"
    >
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
      <v-btn height="30" width="30" icon elevation="2">
        <v-icon size="19" icon="mdi-heart" />
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { GIFObject } from "@/store/types/GIFObject";
import { computed, ref } from "vue";

const props = defineProps({
  gif: Object as PropType<GIFObject>,
});

const openGIFLink = () => {
  window.open(props.gif!.itemurl, "_blank");
};

const mouseHovered = ref(false);

const onMouseOver = () => {
  mouseHovered.value = true;
};

const copyLinkToClipboard = () => {
  navigator.clipboard.writeText(props.gif!.media_formats.gif.url);
};

const onMouseLeave = () => {
  setTimeout(() => {
    mouseHovered.value = false;
  }, 2500);
};

const imgSrc = computed(() => {
  if (props.gif == undefined) return "";
  return mouseHovered.value
    ? props.gif.media_formats.gif.url
    : props.gif.media_formats.gifpreview.url;
});
</script>

<style scoped>
#div-actions {
  background-color: #faf8f7;
}
</style>
