<template>
  ssdddd
  <slot />
</template>
<script setup>
useHead({
  script: [
    {
      src: "https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js",
    },
    {
      src: "https://www.gstatic.com/firebasejs/8.0.0/firebase-firestore.js",
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css",
      crossorigin: "",
    },
  ],
});
</script>
