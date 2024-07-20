<template>
  <div class="py-4 h-100 container-fluid">
    <div class="row">
      <div class="text-center col-12">
        <h3 class="mt-5 text-white">Build Your Profile</h3>
        <h5 class="text-white font-weight-normal">
          This information will let us know more about you.
        </h5>
        <div class="mb-5 multisteps-form">
          <div class="row mt-5">
            <div class="mx-auto my-5 col-12 col-lg-8">
              <div class="multisteps-form__progress">
                <button
                  class="multisteps-form__progress-btn js-active"
                  type="button"
                  title="About"
                  @click="currentTab = 'About'"
                >
                  <span>About</span>
                </button>
                <button
                  class="multisteps-form__progress-btn"
                  type="button"
                  title="Account"
                  :class="{
                    'js-active':
                      currentTab === 'Account' ||
                      currentTab === 'WizardAddress',
                  }"
                  @click="currentTab = 'Account'"
                >
                  <span>Account</span>
                </button>
                <button
                  class="multisteps-form__progress-btn"
                  type="button"
                  title="WizardAddress"
                  :class="{
                    'js-active': currentTab === 'WizardAddress',
                  }"
                  @click="currentTab = 'WizardAddress'"
                >
                  <span>WizardAddress</span>
                </button>
              </div>
            </div>
          </div>
          <!--form panels-->
          <div class="row">
            <div class="m-auto col-12 col-lg-8">
              <form class="multisteps-form__form">
                <Component
                  :is="tabs[currentTab]"
                  class="js-active position-relative"
                  @next-step="nextStep"
                  @prev-step="prevStep"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import About from "~~/pagesComponents/applications/wizard/About.vue";
import Account from "~~/pagesComponents/applications/wizard/Account.vue";
import WizardAddress from "~~/pagesComponents/applications/wizard/Address.vue";

const currentTab = ref("About");
const tabs = {
  About,
  Account,
  WizardAddress,
};
const nextStep = () => {
  if (currentTab.value === "About") {
    return (currentTab.value = "Account");
  } else if (currentTab.value === "Account") {
    return (currentTab.value = "WizardAddress");
  }
};

const prevStep = () => {
  if (currentTab.value === "WizardAddress") {
    return (currentTab.value = "Account");
  } else if (currentTab.value === "Account") {
    return (currentTab.value = "About");
  }
};
definePageMeta({
  profile: "default",
});
</script>
