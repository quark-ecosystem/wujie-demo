import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import WujieVue from "wujie-vue3";

import App from './App.vue';
import hostMap from "../hostMap.js";
import router from './router';
import './assets/main.css';
const { bus, setupApp, preloadApp, destroyApp } = WujieVue;
setupApp({
  name: "react",
  url: hostMap("//localhost:7600/"),
  alive: true,
});

setupApp({
  name: "vue2",
  url: hostMap("//localhost:7200/"),
  alive: true,
});

setupApp({
  name: "angular",
  url: hostMap("//localhost:7400/"),
  alive: true
});

const init = async () => {
    const app = createApp(App);
    app.use(router);
    app.use(ElementPlus);
    app.use(WujieVue);
    app.mount('#app');
};
  
init();

