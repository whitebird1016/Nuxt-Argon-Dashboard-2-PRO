<!--
=========================================================
* Nuxt Argon Dashboard 2 PRO - v2.1.0
=========================================================
* Product Page: https://creative-tim.com/product/nuxt-argon-dashboard-pro
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
Coded by www.creative-tim.com
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
-->
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import { watch } from "vue";
import { useWindowSize } from "@vueuse/core";
import { useAppStore } from "~/stores/AppStore";

const store = useAppStore();

const { width } = useWindowSize();

watch(width, (newVal) => {
  if (newVal < 1200) {
    const sidebar = document.querySelector(".g-sidenav-show");
    if (sidebar.classList.contains("g-sidenav-pinned")) {
      sidebar.classList.remove("g-sidenav-pinned");
      sidebar.classList.add("g-sidenav-hidden");
      store.pinSidebar = false;
    }
  }
});
</script>
