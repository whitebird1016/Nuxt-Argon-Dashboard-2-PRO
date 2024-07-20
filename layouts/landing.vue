<template>
  <div>
    <div
      class="landing-bg h-100 bg-gradient-primary position-fixed w-100"
    ></div>
    <Sidenav />
    <main class="main-content position-relative border-radius-lg">
      <slot />
    </main>
  </div>
</template>
<script setup>
import Sidenav from "@/examples/Sidenav";
import { useAppStore } from "~~/stores/AppStore";

const appStore = useAppStore();

appStore.sidenavType = "bg-default bg-transparent";

onUnmounted(() => {
  appStore.sidenavType = "bg-white";
});
</script>
