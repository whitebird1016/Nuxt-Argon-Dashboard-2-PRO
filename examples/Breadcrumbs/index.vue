<template>
  <nav aria-label="breadcrumb">
    <ol
      class="px-0 pt-1 pb-0 mb-0 bg-transparent breadcrumb"
      :class="{ 'me-sm-6': !isRTL }"
    >
      <li class="text-sm breadcrumb-item">
        <a :class="appStore.navFixed ? 'text-dark' : 'text-white'">
          <i class="ni ni-box-2"></i>
        </a>
      </li>
      <li
        class="text-sm breadcrumb-item"
        :class="appStore.navFixed ? 'text-dark' : 'text-white'"
      >
        <a
          class="opacity-8"
          :class="appStore.navFixed ? 'text-dark' : 'text-white'"
          href="#"
          >{{ currentRouteDirectory || currentDirectory }}</a
        >
      </li>
      <li
        class="text-sm breadcrumb-item active"
        :class="appStore.navFixed ? 'text-dark' : 'text-white'"
        aria-current="page"
      >
        {{ currentRouteName || currentPage }}
      </li>
    </ol>
    <h6
      class="mb-0 font-weight-bolder"
      :class="appStore.navFixed ? 'text-dark' : 'text-white'"
    >
      {{ currentRouteName || currentPage }}
    </h6>
  </nav>
</template>
<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useAppStore } from "~~/stores/AppStore";

const route = useRoute();

const appStore = useAppStore();
defineProps({
  currentPage: {
    type: String,
    default: "Default",
  },
  currentDirectory: {
    type: String,
    default: "Dashboard",
  },
  isRTL: {
    type: Boolean,
    default: false,
  },
});

const currentRouteName = computed(() => {
  const name = route.fullPath?.split("/").slice(-1)[0];

  return name[0]?.charAt(0).toUpperCase() + name.slice(1);
});

const currentRouteDirectory = computed(() => {
  const dir = route.fullPath.split("/")[1];
  return dir.charAt(0).toUpperCase() + dir.slice(1);
});
</script>
