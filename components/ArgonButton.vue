<template>
  <button
    class="btn mb-0"
    :class="getClasses(variant, color, size, fullWidth, active)"
  >
    <slot />
  </button>
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
  variant: {
    type: String,
    default: "fill",
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const getClasses = (variant, color, size, fullWidth, active) => {
  let colorValue;

  // Setting the button variant and color
  if (variant === "gradient") {
    colorValue = `bg-gradient-${color}`;
  } else if (variant === "outline") {
    colorValue = `btn-outline-${color}`;
  } else {
    colorValue = `btn-${color}`;
  }

  const sizeValue = size ? `btn-${size}` : "";

  const fullWidthValue = fullWidth ? `w-100` : "";

  const activeValue = active ? `active` : "";

  return `${colorValue} ${sizeValue} ${fullWidthValue} ${activeValue}`;
};
</script>
