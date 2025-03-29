import { getCurrentInstance } from "vue";

export default function () {
  const app = getCurrentInstance();
  const buefy = app.appContext.config.globalProperties.$buefy;
  return buefy;
}
