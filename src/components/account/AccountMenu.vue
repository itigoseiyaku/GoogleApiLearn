<script setup lang="ts">
import { onMounted, ref } from "vue";

const buttonDivRef = ref<HTMLDivElement>();

function handleCredentialResponse(response: any) {
  // eslint-disable-next-line no-console
  console.log("Encoded JWT ID token: " + response.credential);
}
onMounted(async () => {
  if (!buttonDivRef.value) {
    throw new Error("Google Login Button is not found");
  }

  globalThis.google.accounts.id.initialize({
    client_id: import.meta.env.VITE_ENV_CLIENT_ID,
    callback: handleCredentialResponse,
  });
  globalThis.google.accounts.id.renderButton(buttonDivRef.value, {
    theme: "filled_black",
    type: "standard",
  });
  globalThis.google.accounts.id.prompt(); // also display the One Tap dialog
});
</script>

<template>
  <div ref="buttonDivRef" class="google-login-button"></div>
</template>

<style scoped>
.google-login-button {
  color-scheme: auto;
}
</style>
