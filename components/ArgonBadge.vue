<template>
  <span
    class="badge"
    :class="getClasses(variant, color, size, circular, floating)"
  >
    <slot />
  </span>
</template>

<script setup>
defineProps({
  size: {
    type: String,
    default: "md",
  },
  color: {
    type: String,
    default: "success",
  },
  variant: {
    type: String,
    default: "fill",
  },
  circular: {
    type: Boolean,
    default: false,
  },
  floating: {
    type: Boolean,
    default: false,
  },
});

const getClasses = (variant, color, size, circular, floating) => {
  let colorValue;

  if (variant === "gradient") {
    colorValue = `bg-gradient-${color}`;
  } else {
    colorValue = `badge-${color}`;
  }

  const sizeValue = size ? `badge-${size}` : "";

  const circleValue = circular ? "badge-circle" : "";

  const floatingValue = floating ? "badge-floating" : "";

  return `${colorValue} ${sizeValue} ${circleValue} ${floatingValue}`;
};
</script>
