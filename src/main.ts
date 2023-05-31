import { defineCustomElement } from "vue";
import "./style.css";
import { createCEApp } from "@unplugin-vue-ce/ce-app";

import { createI18n } from "vue-i18n";
import createdStore from "./vuex/store.vuex";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import router from "./router";

import App from "./App.vue";
import Entry from "./Entry.vue";

const app = createCEApp(App);

//Vuex
app.use(createdStore);

//Pinia
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

//Vue Router
app.use(router);

//Vue I18n
const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
});
app.use(i18n);

app.mount("vue-app");

const ceEntry = defineCustomElement(Entry);
customElements.define("ce-entry", ceEntry);
