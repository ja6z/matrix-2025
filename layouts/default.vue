<template>
  ssdddd
  <slot />
</template>
<script setup>
import { supabase } from "~/lib/supabase";

useHead({
  script: [{}],
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css",
      crossorigin: "",
    },
  ],
});

onMounted(() => {
  //Verificar el login
  //Verificar si es mas eficiente con localstorage o con vuex
  supabase.auth
    .getUser()
    .then((r) => {
      if (r.data.user == null) {
        useLogin();
      } else {
      }
      console.log(r);
    })
    .catch((e) => console.log(e));
  //const login = useLogin()
});
</script>
