<template>
  <div id="app-layout" :class="!isPinned && 'g-sidenav-hidden'">
    <div class="mt-4">
      <Navbar class="bg-success" />
    </div>
    <div
      class="mx-3 mt-3 border-radius-xl position-relative"
      :style="{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
      }"
    >
      <Sidenav />

      <main class="mt-1 main-content border-radius-lg">
        <slot />
      </main>
    </div>
    <Footer class="py-3 bg-white border-radius-lg" />
    <Configurator />
  </div>
</template>
<script setup>
import { computed } from "vue";
import Navbar from "@/examples/Navbar";
import Sidenav from "@/examples/Sidenav";
import Footer from "@/examples/Footer";
import Configurator from "~~/examples/Configurator";

import bg from "@/assets/img/vr-bg.jpg";

import { useAppStore } from "~~/stores/AppStore";

const appStore = useAppStore();

const isPinned = computed(() => {
  return appStore.pinSidebar;
});

useHead({
  bodyAttrs: {
    class: "virtual-reality",
  },
});
</script>
