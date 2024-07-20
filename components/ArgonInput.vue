<template>
  <div class="form-group">
    <div :class="hasIcon(icon)">
      <span v-if="iconDir === 'left'" class="input-group-text">
        <i :class="getIcon(icon)"></i>
      </span>
      <input
        :id="id"
        :type="type"
        class="form-control"
        :class="getClasses(size, success, error)"
        :name="name"
        :value="modelValue"
        :placeholder="placeholder"
        :isRequired="isRequired"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <span v-if="iconDir === 'right'" class="input-group-text">
        <i :class="getIcon(icon)"></i>
      </span>
    </div>
  </div>
</template>
<script setup>
defineEmits(["update:modelValue"]);
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "default",
  },
  success: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
  iconDir: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
});
const getClasses = (size, success, error) => {
  let isValidValue;

  const sizeValue = size ? `form-control-${size}` : "";

  if (error) {
    isValidValue = "is-invalid";
  } else if (success) {
    isValidValue = "is-valid";
  } else {
    isValidValue = "";
  }

  return `${sizeValue} ${isValidValue}`;
};
const getIcon = (icon) => icon || "";
const hasIcon = (icon) => (icon ? "input-group" : "");
</script>
