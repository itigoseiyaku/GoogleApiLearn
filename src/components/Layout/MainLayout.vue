<script setup lang="ts">
import AppBar from "@/components/Layout/AppBar.vue";
</script>

<template>
  <AppBar />
  <v-main>
    <slot />
  </v-main>
</template>
