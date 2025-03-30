//import { createApp } from 'vue';
import Buefy from "buefy";
import "buefy/dist/buefy.css";

//const app = createApp();

export default defineNuxtPlugin((nuxtApp) => {
  //app.use(Buefy);
  nuxtApp.vueApp.use(Buefy);
  // Install the store instance as a plugin
});
