import { createApp } from "vue";
import App from "./App.vue";
import { initializeKeycloak } from "./keycloak";
import "./style.css";

initializeKeycloak(() => {
  createApp(App).mount("#app");
});
