import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import type { ThemeDefinition } from "vuetify/vuetify";
import { key, store } from "@/store";

const myTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#29be9d",
    secondary: "#607d8b",
    accent: "#4caf50",
    error: "#f44336",
    warning: "#ff9800",
    info: "#03a9f4",
    success: "#8bc34a",
  },
};

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "myTheme",
    themes: {
      myTheme,
    },
  },
});

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(store, key);

app.mount("#app");
