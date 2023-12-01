import { createApp } from "vue";
import "./reset.scss";
import "./style.scss";
import App from "./App.vue";
import store from "@/store/headerStoreVuex.js";

const app = createApp(App);
app.use(store);
app.mount("#app");
