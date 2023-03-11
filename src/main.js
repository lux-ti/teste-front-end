import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createPinia } from "pinia";

library.add(fas, far);

createApp(App)
  .use(createPinia())
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
