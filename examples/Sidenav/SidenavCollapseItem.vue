<template>
  <li class="nav-item">
    <a
      class="nav-link"
      data-bs-toggle="collapse"
      aria-expanded="false"
      :href="`#${refer}`"
      @click="isExpanded = !isExpanded"
    >
      <span class="sidenav-mini-icon"> {{ text.charAt(0) }} </span>
      <span class="sidenav-normal"> {{ text }} <b class="caret"></b></span>
    </a>
    <div :class="isExpanded ? 'collapse show' : 'collapse'">
      <ul class="nav nav-sm flex-column">
        <slot name="nav-child-item" />
      </ul>
    </div>
  </li>
</template>

<script setup>
defineProps({
  refer: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
const isExpanded = ref(false);
</script>
