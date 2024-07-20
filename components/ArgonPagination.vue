<template>
  <ul class="pagination" :class="getClasses(color, size)">
    <slot>Pagination Items</slot>
  </ul>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: "success",
  },
  size: {
    type: String,
    default: "md",
  },
});

const getClasses = (color, size) => {
  const colorValue = color ? `pagination-${color}` : "";
  const sizeValue = size ? `pagination-${size}` : "";

  return `${colorValue} ${sizeValue}`;
};
</script>
