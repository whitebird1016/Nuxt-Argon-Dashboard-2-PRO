<template>
  <div class="container-fluid py-5">
    <div class="row">
      <div class="col-12">
        <div class="multisteps-form">
          <div class="row">
            <div class="col-12 col-lg-8 mx-auto mb-4">
              <div class="card">
                <div class="card-body">
                  <div class="multisteps-form__progress">
                    <button
                      class="multisteps-form__progress-btn js-active"
                      type="button"
                      title="User Info"
                      @click="currentTab = 'UserInfo'"
                    >
                      <span>User Info</span>
                    </button>
                    <button
                      class="multisteps-form__progress-btn"
                      type="button"
                      title="User Address"
                      :class="{
                        'js-active':
                          currentTab === 'UserAddress' ||
                          currentTab === 'Socials' ||
                          currentTab === 'Profile',
                      }"
                      @click="currentTab = 'UserAddress'"
                    >
                      <span>User Address</span>
                    </button>
                    <button
                      class="multisteps-form__progress-btn"
                      type="button"
                      title="Socials"
                      :class="{
                        'js-active':
                          currentTab === 'Socials' || currentTab === 'Profile',
                      }"
                      @click="currentTab = 'Socials'"
                    >
                      <span>Socials</span>
                    </button>
                    <button
                      class="multisteps-form__progress-btn"
                      type="button"
                      title="Profile"
                      :class="{
                        'js-active': currentTab === 'Profile',
                      }"
                      @click="currentTab = 'Profile'"
                    >
                      <span>Profile</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--form panels-->
          <div class="row">
            <div class="col-12 col-lg-8 m-auto">
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
import UserInfo from "~~/pagesComponents/pages/users/UserInfo.vue";
import Socials from "~~/pagesComponents/pages/users/Socials.vue";
import Profile from "~~/pagesComponents/pages/users/Profile.vue";
import UserAddress from "~~/pagesComponents/pages/users/Address.vue";
import setNavPills from "~~/assets/js/nav-pills";
const currentTab = ref("UserInfo");

const tabs = {
  UserInfo,
  UserAddress,
  Socials,
  Profile,
};
const nextStep = () => {
  if (currentTab.value === "UserInfo") {
    return (currentTab.value = "UserAddress");
  } else if (currentTab.value === "UserAddress") {
    return (currentTab.value = "Socials");
  } else if (currentTab.value === "Socials") {
    return (currentTab.value = "Profile");
  }
};

const prevStep = () => {
  if (currentTab.value === "Profile") {
    return (currentTab.value = "Socials");
  } else if (currentTab.value === "Socials") {
    return (currentTab.value = "UserAddress");
  } else if (currentTab.value === "UserAddress") {
    return (currentTab.value = "UserInfo");
  }
};

definePageMeta({
  profile: "default",
});

onMounted(() => {
  setNavPills();
});
</script>
