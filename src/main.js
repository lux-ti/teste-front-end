import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from './FavoritesStore.js';
import { router } from "./routes";

createApp(App).use(router, store).mount("#app");