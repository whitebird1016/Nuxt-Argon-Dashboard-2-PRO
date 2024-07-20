<template>
  <button
    type="button"
    class="btn"
    :class="getClasses(iconOnly, socialBtn, rounded, size)"
  >
    <span class="btn-inner--icon">
      <i :class="getIcon(icon)"></i>
    </span>
    <span class="btn-inner--text">
      &nbsp;
      <slot />
    </span>
  </button>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  iconOnly: {
    type: Boolean,
    default: false,
  },
  socialBtn: {
    type: String,
    required: true,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "default",
  },
});
const getClasses = (iconOnly, socialBtn, rounded, size) => {
  const iconOnlyValue = iconOnly ? "btn-icon-only" : "";

  const socialBtnValue = socialBtn ? `btn-${socialBtn}` : "";

  const roundedValue = rounded ? "rounded-circle" : "";

  const sizeValue = size ? `btn-${size}` : "";

  return `${iconOnlyValue} ${socialBtnValue} ${roundedValue} ${sizeValue}`;
};
const getIcon = (icon) => icon || "";
</script>
