<template>
  <div class="toast fade show p-2 mt-2" :class="getColor(color)">
    <div class="toast-header bg-transparent border-0">
      <i class="me-2" :class="getIcon(icon)" />
      <span class="me-auto font-weight-bold" :class="getTextColor(color)">
        {{ title }}
      </span>
      <small :class="getTextColor(color)">{{ date }}</small>
      <i
        class="fas fa-times text-md ms-3 cursor-pointer"
        :class="getTextColor(color)"
        @click="closeHandler"
      />
    </div>
    <hr class="horizontal dark m-0" :class="getHrColor(color)" />
    <div class="toast-body" :class="getTextColor(color)">{{ description }}</div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  icon: {
    type: [String, Object],
    component: {
      type: String,
    },
    color: {
      type: String,
    },
    default: () => ({
      color: "success",
    }),
  },
  color: {
    type: String,
    default: "success",
  },
  closeHandler: {
    type: Function,
    default: null,
  },
});

const getColor = (color) => {
  let colorValue;

  if (color === "white") {
    colorValue = "bg-white";
  } else {
    colorValue = `bg-gradient-${color}`;
  }

  return colorValue;
};
const getIcon = (icon) => {
  if (icon && typeof icon === "string") {
    return icon;
  } else if (icon && typeof icon === "object") {
    return `${icon.component} text-${icon.color}`;
  } else {
    return null;
  }
};
const getTextColor = (color) =>
  color === "white" ? "text-dark" : "text-white";
const getHrColor = (color) => (color === "white" ? "dark" : "light");
</script>
