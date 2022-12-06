<template>
  <v-navigation-drawer :width="60" color="#faf8f7" elevation="5" :rail="true">
    <div class="d-flex flex-column align-center">
      <v-btn class="mt-2 mb-2" icon size="40" to="/">
        <v-icon icon="mdi-trending-up" size="20" />
      </v-btn>
      <v-btn class="mb-2" icon size="40" to="/search">
        <v-icon icon="mdi-magnify" size="20" />
      </v-btn>
      <v-btn icon size="40" to="/favourites">
        <v-icon icon="mdi-heart" size="20" />
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
