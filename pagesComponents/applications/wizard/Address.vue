<template>
  <div
    class="p-3 bg-white card multisteps-form__panel border-radius-xl"
    data-animation="FadeIn"
  >
    <div class="text-center row">
      <div class="mx-auto col-10">
        <h5 class="font-weight-normal">Are you living in a nice area?</h5>
        <p>
          One thing I love about the later sunsets is the chance to go for a
          walk through the neighborhood woods before dinner
        </p>
      </div>
    </div>
    <div class="multisteps-form__content">
      <div class="row text-start">
        <div class="mt-3 col-12 col-md-8 ms-auto">
          <label>Street Name</label>
          <input
            class="multisteps-form__input form-control"
            type="text"
            placeholder="Eg. Soft"
          />
        </div>
        <div class="mt-3 col-12 col-md-4 ms-auto">
          <label>Street No</label>
          <input
            class="multisteps-form__input form-control"
            type="number"
            placeholder="Eg. 221"
          />
        </div>
        <div class="mt-3 col-12 col-md-7 ms-auto">
          <label>City</label>
          <input
            class="multisteps-form__input form-control"
            type="text"
            placeholder="Eg. Tokyo"
          />
        </div>
        <div class="mt-3 col-12 col-md-5 ms-auto text-start">
          <label>Country</label>
          <select
            id="choices-country"
            class="form-control"
            name="choices-country"
          >
            <option value="Argentina">Argentina</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Brasil">Brasil</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="mt-4 button-row d-flex col-12">
          <ArgonButton
            type="button"
            color="light"
            variant="gradient"
            class="mb-0 js-btn-prev"
            title="Prev"
            @click="$emit('prevStep')"
          >
            Prev
          </ArgonButton>
          <ArgonButton
            type="button"
            color="dark"
            variant="gradient"
            class="mb-0 ms-auto js-btn-next"
            title="Send"
          >
            Send
          </ArgonButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Choices from "choices.js";
defineEmits(["prevStep"]);
onMounted(() => {
  const country = document.getElementById("choices-country");
  if (country) {
    // eslint-disable-next-line no-new
    new Choices(country, {
      allowHTML: true,
    });
  }
});
</script>
