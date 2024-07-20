<template>
  <div class="form-group">
    <label :for="id">
      <slot>Label</slot>
    </label>
    <textarea
      :id="id"
      class="form-control"
      :rows="rows"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
    ></textarea>
  </div>
</template>

<script setup>
defineEmits(["update:value"]);
defineProps({
  id: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  rows: {
    type: Number,
    default: 5,
  },
  value: {
    type: String,
    default: "",
  },
});
</script>
