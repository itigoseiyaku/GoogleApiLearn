<script setup lang="ts">
import { useAccountStore } from "@/store/Account";

const accountStore = useAccountStore();

const menuList: { text: string; action: () => void }[] = [
  {
    text: "ログアウト",
    action: () => {
      accountStore.logout();
    },
  },
];
</script>

<template>
  <v-menu v-if="accountStore.isLogin">
    <template v-slot:activator="{ props: menu }">
      <v-btn icon="mdi-account" v-bind="menu" />
    </template>

    <v-card
      :min-width="250"
      :title="accountStore.username ?? ''"
      :subtitle="accountStore.mail ?? ''"
    >
      <v-divider />
      <v-list>
        <v-list-item
          v-for="(item, index) in menuList"
          :key="index"
          :value="index"
          @click="item.action"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list></v-card
    >
  </v-menu>
</template>
