<script setup lang="ts">
import keycloak from "../keycloak";
import { appWindow, WebviewWindow } from '@tauri-apps/plugin-window';

defineProps<{ msg: string }>();

console.log(keycloak);

function logout() {
  keycloak.logout();
}

function changePassword() {
  keycloak.login({
    action: "UPDATE_PASSWORD",
  });
}

function openPopup() {
  const isTauri = !!window.__TAURI_METADATA__;

  if (isTauri) {
    const newWindow = new WebviewWindow('popup-window', {
      url: '/',
      title: 'Popup Tauri',
      resizable: true,
      alwaysOnTop: true,
      theme: 'dark',
      visible: true,
    });
    newWindow.once('tauri://created', () => {
      console.log(keycloak)
    });
    newWindow.once('tauri://error', (e: any) => {
      console.log(e.payload)
      console.log(e);
    });
  }
  else {
    window.open('/', '_blank', 'width=500px,height=500px,popup=true')
  }
}
</script>

<template>
  <h1>Keycloak Options:</h1>
  <button @click="logout()">Logout</button>
  <button @click="changePassword()">Change Password</button>
  <button @click="openPopup()">Open Popup</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
