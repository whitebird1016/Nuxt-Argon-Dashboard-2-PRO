<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-6">
        <h4 class="text-white">Make the changes below</h4>
        <p class="text-white">
          We’re constantly trying to express ourselves and actualize our dreams.
          If you have the opportunity to play.
        </p>
      </div>
      <div
        class="text-right col-lg-6 d-flex flex-column justify-content-center"
      >
        <button
          type="button"
          class="mt-2 mb-0 btn btn-outline-white ms-lg-auto me-lg-0 me-auto mt-lg-0"
        >
          Save
        </button>
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-lg-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="font-weight-bolder">Product Image</h5>
            <div class="row">
              <div class="col-12">
                <img
                  class="mt-3 shadow-lg w-100 border-radius-lg"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-page.jpg"
                  alt="product_image"
                />
              </div>
              <div class="mt-5 col-12">
                <div class="d-flex">
                  <button
                    class="mb-0 btn bg-gradient-success btn-sm me-2"
                    type="button"
                    name="button"
                  >
                    Edit
                  </button>
                  <button
                    class="mb-0 btn btn-outline-dark btn-sm"
                    type="button"
                    name="button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 col-lg-8 mt-lg-0">
        <div class="card">
          <div class="card-body">
            <h5 class="font-weight-bolder">Product Information</h5>
            <div class="row">
              <div class="col-12 col-sm-6">
                <label>Name</label>
                <input
                  class="form-control"
                  type="text"
                  value="Minimal Bar Stool"
                />
              </div>
              <div class="mt-3 col-12 col-sm-6 mt-sm-0">
                <label>Weight</label>
                <input class="form-control" type="number" value="2" />
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <label class="mt-4">Collection</label>
                <input class="form-control" type="text" value="Summer" />
              </div>
              <div class="col-3">
                <label class="mt-4">Price</label>
                <input class="form-control" type="text" value="$90" />
              </div>
              <div class="col-3">
                <label class="mt-4">Quantity</label>
                <input class="form-control" type="number" value="50" />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <label class="mt-4">Description</label>
                <p class="text-xs form-text text-muted ms-1 d-inline">
                  (optional)
                </p>
                <div id="edit-description-edit" class="h-50">
                  <quill-editor
                    v-model:content="quillContent"
                    theme="snow"
                    content-type="text"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <label class="mt-4">Category</label>
                <select
                  id="choices-category-edit"
                  class="form-control"
                  name="choices-category"
                >
                  <option value="Choice 1" selected>Furniture</option>
                  <option value="Choice 2">Real Estate</option>
                  <option value="Choice 3">Electronics</option>
                  <option value="Choice 4">Clothing</option>
                  <option value="Choice 5">Others</option>
                </select>
                <label>Color</label>
                <select
                  id="choices-color-edit"
                  class="form-control"
                  name="choices-color"
                >
                  <option value="Choice 1" selected>Black</option>
                  <option value="Choice 2">White</option>
                  <option value="Choice 3">Blue</option>
                  <option value="Choice 4">Orange</option>
                  <option value="Choice 5">Green</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="font-weight-bolder">Socials</h5>
            <label>Shoppify Handle</label>
            <input class="form-control" type="text" value="@NuxtArgon" />
            <label class="mt-4">Facebook Account</label>
            <input class="form-control" type="text" value="https://" />
            <label class="mt-4">Instagram Account</label>
            <input class="form-control" type="text" value="https://" />
          </div>
        </div>
      </div>
      <div class="mt-4 col-sm-8 mt-sm-0">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <h5 class="font-weight-bolder">Pricing</h5>
              <div class="col-3">
                <label>Price</label>
                <input class="form-control" type="number" value="99.00" />
              </div>
              <div class="col-4">
                <label>Currency</label>
                <select
                  id="choices-currency-edit"
                  class="form-control"
                  name="choices-sizes"
                >
                  <option value="Choice 1" selected>USD</option>
                  <option value="Choice 2">EUR</option>
                  <option value="Choice 3">GBP</option>
                  <option value="Choice 4">CNY</option>
                  <option value="Choice 5">INR</option>
                  <option value="Choice 6">BTC</option>
                </select>
              </div>
              <div class="col-5">
                <label>SKU</label>
                <input class="form-control" type="text" value="71283476591" />
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <label class="mt-4">Tags</label>
                <select
                  id="choices-tags-edit"
                  class="form-control"
                  name="choices-tags"
                  multiple
                >
                  <option value="Choice 1" selected>In Stock</option>
                  <option value="Choice 2">Out of Stock</option>
                  <option value="Choice 3">Sale</option>
                  <option value="Choice 4">Black Friday</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { QuillEditor } from "@vueup/vue-quill";
import Choices from "choices.js";

definePageMeta({
  layout: "default",
});
const quillContent =
  " Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.";

const getChoices = (id) => {
  const element = document.getElementById(id);
  if (element) {
    return new Choices(element, {
      searchEnabled: false,
      allowHTML: true,
    });
  }
};
onMounted(() => {
  getChoices("choices-category-edit");
  getChoices("choices-color-edit");
  getChoices("choices-currency-edit");

  const tags = document.getElementById("choices-tags-edit");
  if (tags) {
    const examples = new Choices(tags, {
      removeItemButton: true,
    });

    examples.setChoices(
      [
        {
          value: "One",
          label: "Expired",
          disabled: true,
        },
        {
          value: "Two",
          label: "Out of Stock",
          selected: true,
        },
      ],
      "value",
      "label",
      false
    );
  }
});
</script>
