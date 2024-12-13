"use strict";
const { createApp } = Vue;
import App from "./App.js";
import router from "./router/index.js";
import store from "./store/index.js";

createApp(App).use(store).use(router).mount("#app");