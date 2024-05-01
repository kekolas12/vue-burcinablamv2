import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router"; // Vue Router ekleniyor
import { createPinia } from "pinia";
import axios from "axios";

import Urunler from "./components/Urun-ler.vue";

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);

app.config.globalProperties.$axios = axios;

const routes = [{ path: "/urunler", component: Urunler }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);

app.mount("#app");
