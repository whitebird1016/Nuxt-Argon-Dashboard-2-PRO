<template>
  <li class="page-item" :class="getClasses(active, disabled)">
    <a class="page-link" href="javascript:;">
      {{ prev || next ? null : label }}
      <i v-if="prev" class="fa fa-angle-left"></i>
      <i v-if="next" class="fa fa-angle-right"></i>
    </a>
  </li>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  active: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  prev: {
    type: Boolean,
    default: false,
  },
  next: {
    type: Boolean,
    default: false,
  },
});
const getClasses = (active, disabled) => {
  const activeValue = active ? "active" : "";
  const disabledValue = disabled ? "disabled" : "";

  return `${activeValue} ${disabledValue}`;
};
</script>
