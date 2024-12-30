import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import router from "./router";

import Tag from "@/components/UI/Tag.vue";

const app = createApp(App);

app.component("Tag", Tag);

app.use(router);
app.mount("#app");
