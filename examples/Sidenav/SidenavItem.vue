<template>
  <li class="nav-item">
    <MyNuxtLink class="nav-link" :to="to" @click="closeSidebar">
      <span class="sidenav-mini-icon"> {{ text.charAt(0) }} </span>
      <span class="sidenav-normal"> {{ text }} </span>
    </MyNuxtLink>
  </li>
</template>
<script setup>
import { useWindowSize } from "@vueuse/core";
import MyNuxtLink from "~~/components/MyNuxtLink";
import { useAppStore } from "~~/stores/AppStore";

const { width } = useWindowSize();

const appStore = useAppStore();

function toggleSidebar() {
  appStore.toggleSidenavCollapsing();
}
function closeSidebar() {
  if (width.value < 1200) {
    toggleSidebar();
  }
}
defineProps({
  to: {
    type: [Object, String],
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>
