<template>
  <div>
    <NuxtLayout name="authentication">
      <template #navbar>
        <NavbarTransparent
          is-blur="blur border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow"
          btn-background="bg-gradient-dark"
          :dark-mode="true"
        />
      </template>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div
              class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0"
            >
              <div class="card card-plain">
                <div class="text-center card-body px-lg-5 py-lg-5">
                  <div class="mb-4 text-center text-muted">
                    <h2>2-Step Verification</h2>
                  </div>
                  <div class="row gx-2 gx-sm-3">
                    <div class="col">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          maxlength="1"
                          autocomplete="off"
                          autocapitalize="off"
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          maxlength="1"
                          autocomplete="off"
                          autocapitalize="off"
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          maxlength="1"
                          autocomplete="off"
                          autocapitalize="off"
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          maxlength="1"
                          autocomplete="off"
                          autocapitalize="off"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="text-center">
                    <ArgonButton class="mt-0 mb-3" color="warning" full-width>
                      Send code
                    </ArgonButton>
                    <span class="text-sm text-muted">
                      Haven't received it?
                      <NuxtLink to="/"> Resend a new code. </NuxtLink>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column"
            >
              <div
                class="position-relative bg-warning h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                style="
                  background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/verification-ill.jpg');
                  background-size: cover;
                "
              >
                <span class="mask bg-warning opacity-6"></span>
                <h4
                  class="mt-5 text-white font-weight-bolder position-relative"
                >
                  "Attention is the new currency"
                </h4>
                <p class="text-white position-relative">
                  The more effortless the writing looks, the more effort the
                  writer actually put into the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import NavbarTransparent from "@/examples/Navbar/Transparent.vue";
definePageMeta({
  layout: false,
});
useHead({
  bodyAttrs: {
    class: "bg-gray-200",
  },
});
</script>
