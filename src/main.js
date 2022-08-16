import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

const app = createApp(App);

// Make BootstrapVue available throughout your project

app.use(router);

app.mount("#app");

// app.use(BootstrapVue)
// app.use(IconsPlugin)

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
