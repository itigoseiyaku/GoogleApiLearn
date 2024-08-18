<script setup lang="ts">
import AccountMenu from "@/components/account/AccountMenu.vue";
</script>

<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-app-bar-nav-icon />
    </template>
    <v-app-bar-title>GoogleApiLearn</v-app-bar-title>
    <AccountMenu />
  </v-app-bar>
</template>
