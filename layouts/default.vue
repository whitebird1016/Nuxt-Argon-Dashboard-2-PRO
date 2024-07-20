<template>
  <div
    id="app-layout"
    :class="layout === 'default' && 'g-sidenav-show g-sidenav-pinned'"
  >
    <div
      v-if="layout === 'default'"
      class="min-height-300 position-absolute w-100 bg-success"
    />
    <div
      v-if="layout === 'profile-layout'"
      class="position-absolute w-100 min-height-300 top-0"
      :style="{
        'background-image': 'url(' + image + ')',
        'background-position-y': '50%',
      }"
    >
      <span class="mask bg-success opacity-6"></span>
    </div>
    <Sidenav />
    <main :class="containerClasses">
      <Navbar v-if="layout === 'default'" />

      <slot />

      <Footer
        key="layout"
        :class="
          layout === 'profile-layout' ? 'py-3 bg-white border-radius-lg' : null
        "
      />
      <Configurator v-if="layout === 'default'" />
    </main>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import image from "@/assets/img/profile-layout-header.jpg";
import Sidenav from "~~/examples/Sidenav";
import Navbar from "~~/examples/Navbar";
import Footer from "~~/examples/Footer";
import Configurator from "~~/examples/Configurator";

import { useAppStore } from "~~/stores/AppStore";
import setTooltip from "~~/assets/js/tooltip";

const appStore = useAppStore();
const route = useRoute();

const layout = computed(() => {
  return route.meta.profile;
});

const containerClasses = computed(() => {
  return layout.value === "default"
    ? "main-content position-relative max-height-vh-100 h-100"
    : "mt-1 main-content border-radius-lg";
});

const bodyClass = computed(() => {
  return layout.value === "default" ? "bg-gray-100" : "profile-layout";
});

onMounted(() => {
  setTooltip(appStore.bootstrap);
});

useHead({
  bodyAttrs: {
    class: bodyClass,
  },
});
</script>
