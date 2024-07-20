<template>
  <div>
    <div
      id="sidenav-collapse-main"
      class="collapse navbar-collapse w-auto h-auto h-100"
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <SidenavCollapse
            collapse-ref="dashboardsExamples"
            nav-text="Dashboards"
            :class="getRoute === 'dashboards' ? 'active' : ''"
          >
            <template #icon>
              <i class="ni ni-shop text-primary text-sm opacity-10"></i>
            </template>
            <template #list>
              <SidenavItem to="/dashboards/landing" text="Landing" />
              <SidenavItem to="/dashboards/default" text="Default" />
              <SidenavItem to="/dashboards/automotive" text="Automotive" />
              <SidenavItem to="/dashboards/smart-home" text="Smart Home" />
              <SidenavCollapseItem refer="vrExamples" text="Virtual Reality">
                <template #nav-child-item>
                  <SidenavItem
                    to="/dashboards/vr/vr-default"
                    text="VR Default"
                  />
                  <SidenavItem to="/dashboards/vr/vr-info" text="VR Info" />
                </template>
              </SidenavCollapseItem>
              <SidenavItem to="/dashboards/crm" text="CRM" />
            </template>
          </SidenavCollapse>
        </li>
        <li class="mt-3 nav-item">
          <h6
            class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
            :class="isRTL ? 'me-4' : 'ms-2'"
          >
            PAGES
          </h6>
        </li>
        <li class="nav-item">
          <SidenavCollapse
            collapse-ref="pagesExamples"
            nav-text="Pages"
            :class="getRoute === 'pages' ? 'active' : ''"
          >
            <template #icon>
              <i class="ni ni-ungroup text-warning text-sm opacity-10"></i>
            </template>
            <template #list>
              <SidenavCollapseItem refer="profileExample" text="Profile">
                <template #nav-child-item>
                  <SidenavItem
                    to="/pages/profile/profile-overview"
                    text="Profile Overview"
                  />
                  <SidenavItem to="/pages/profile/teams" text="Teams" />
                  <SidenavItem
                    to="/pages/profile/all-projects"
                    text="All Projects"
                  />
                </template>
              </SidenavCollapseItem>

              <SidenavCollapseItem refer="usersExample" text="Users">
                <template #nav-child-item>
                  <SidenavItem to="/pages/users/reports" text="Reports" />
                  <SidenavItem to="/pages/users/new-user" text="New User" />
                </template>
              </SidenavCollapseItem>

              <SidenavCollapseItem refer="accountExample" text="Account">
                <template #nav-child-item>
                  <SidenavItem to="/pages/account/settings" text="Settings" />
                  <SidenavItem to="/pages/account/billing" text="Billing" />
                  <SidenavItem to="/pages/account/invoice" text="Invoice" />
                  <SidenavItem to="/pages/account/security" text="Security" />
                </template>
              </SidenavCollapseItem>

              <SidenavCollapseItem refer="projectsExample" text="Projects">
                <template #nav-child-item>
                  <SidenavItem to="/pages/projects/general" text="General" />
                  <SidenavItem to="/pages/projects/timeline" text="Timeline" />
                  <SidenavItem
                    to="/pages/projects/new-project"
                    text="New Project"
                  />
                </template>
              </SidenavCollapseItem>

              <SidenavItem to="/pages/pricing-page" text="Pricing Page" />
              <SidenavItem to="/pages/rtl-page" text="RTL" />
              <SidenavItem to="/pages/widgets" text="Widgets" />
              <SidenavItem to="/pages/charts" text="Charts" />
              <SidenavItem to="/pages/sweet-alerts" text="Sweet Alerts" />
              <SidenavItem to="/pages/notifications" text="Notifications" />
            </template>
          </SidenavCollapse>
        </li>

        <li class="nav-item">
          <SidenavCollapse
            collapse-ref="applicationsExamples"
            nav-text="Applications"
            :class="getRoute === 'applications' ? 'active' : ''"
          >
            <template #icon>
              <i class="ni ni-ui-04 text-info text-sm opacity-10"></i>
            </template>
            <template #list>
              <SidenavItem to="/applications/wizard" text="Wizard" />
              <SidenavItem to="/applications/data-tables" text="Data Tables" />
              <SidenavItem to="/applications/calendar" text="Calendar" />
              <SidenavItem to="/applications/analytics" text="Analytics" />
            </template>
          </SidenavCollapse>
        </li>

        <li class="nav-item">
          <SidenavCollapse
            collapse-ref="ecommerceExamples"
            nav-text="Ecommerce"
            :class="getRoute === 'ecommerce' ? 'active' : ''"
          >
            <template #icon>
              <i class="ni ni-archive-2 text-success text-sm opacity-10"></i>
            </template>
            <template #list>
              <SidenavItem to="/ecommerce/overview" text="Overview" />

              <SidenavCollapseItem refer="productsExample" text="Products">
                <template #nav-child-item>
                  <SidenavItem
                    to="/ecommerce/products/new-product"
                    text="New Product"
                  />
                  <SidenavItem
                    to="/ecommerce/products/edit-product"
                    text="Edit Product"
                  />
                  <SidenavItem
                    to="/ecommerce/products/product-page"
                    text="Product page"
                  />
                  <SidenavItem
                    to="/ecommerce/products/product-list"
                    text="Products List"
                  />
                </template>
              </SidenavCollapseItem>

              <SidenavCollapseItem refer="ordersExample" text="Orders">
                <template #nav-child-item>
                  <SidenavItem
                    to="/ecommerce/orders/order-list"
                    text="Order List"
                  />
                  <SidenavItem
                    to="/ecommerce/orders/order-details"
                    text="Order Details"
                  />
                </template>
              </SidenavCollapseItem>
              <SidenavItem to="/ecommerce/referral" text="Referral" />
            </template>
          </SidenavCollapse>
        </li>

        <li class="nav-item">
          <SidenavCollapse
            collapse-ref="authExamples"
            nav-text="Authentication"
            :class="getRoute === 'authentication' ? 'active' : ''"
          >
            <template #icon>
              <i
                class="ni ni-single-copy-04 text-danger text-sm opacity-10"
              ></i>
            </template>
            <template #list>
              <SidenavCollapseItem refer="signinExample" text="Sign In">
                <template #nav-child-item>
                  <SidenavItem to="/authentication/signin/basic" text="Basic" />
                  <SidenavItem to="/authentication/signin/cover" text="Cover" />
                  <SidenavItem
                    to="/authentication/signin/illustration"
                    text="Illustration"
                  />
                </template>
              </SidenavCollapseItem>

              <SidenavCollapseItem refer="signupExample" text="Sign Up">
                <template #nav-child-item>
                  <SidenavItem to="/authentication/signup/basic" text="Basic" />
                  <SidenavItem to="/authentication/signup/cover" text="Cover" />
                  <SidenavItem
                    to="/authentication/signup/illustration"
                    text="Illustration"
                  />
                </template>
              </SidenavCollapseItem>

              <SidenavCollapseItem refer="resetExample" text="Reset Password">
                <template #nav-child-item>
                  <SidenavItem to="/authentication/reset/basic" text="Basic" />
                  <SidenavItem to="/authentication/reset/cover" text="Cover" />
                  <SidenavItem
                    to="/authentication/reset/illustration"
                    text="Illustration"
                  />
                </template>
              </SidenavCollapseItem>

              <SidenavCollapseItem refer="lockExample" text="Lock">
                <template #nav-child-item>
                  <SidenavItem to="/authentication/lock/basic" text="Basic" />
                  <SidenavItem to="/authentication/lock/cover" text="Cover" />
                  <SidenavItem
                    to="/authentication/lock/illustration"
                    text="Illustration"
                  />
                </template>
              </SidenavCollapseItem>

              <SidenavCollapseItem
                refer="StepExample"
                text="2-Step Verification"
              >
                <template #nav-child-item>
                  <SidenavItem
                    to="/authentication/verification/basic"
                    text="Basic"
                  />
                  <SidenavItem
                    to="/authentication/verification/cover"
                    text="Cover"
                  />
                  <SidenavItem
                    to="/authentication/verification/illustration"
                    text="Illustration"
                  />
                </template>
              </SidenavCollapseItem>

              <SidenavCollapseItem refer="errorExample" text="Error">
                <template #nav-child-item>
                  <SidenavItem
                    to="/authentication/error/error404"
                    text="Error 404"
                  />
                  <SidenavItem
                    to="/authentication/error/error500"
                    text="Error 500"
                  />
                </template>
              </SidenavCollapseItem>
            </template>
          </SidenavCollapse>
        </li>
        <li class="mt-3 nav-item">
          <hr class="mt-0 horizontal dark" />
          <h6
            class="text-xs ps-4 ms-2 text-uppercase font-weight-bolder opacity-6"
            :class="isRTL ? 'me-4' : 'ms-2'"
          >
            DOCS
          </h6>
        </li>
        <li class="nav-item">
          <SidenavCollapse
            collapse-ref="basicExamples"
            nav-text="Basic"
            :class="getRoute === 'basic' ? 'active' : ''"
          >
            <template #icon>
              <i class="ni ni-spaceship text-sm" :class="sidenavType"></i>
            </template>
            <template #list>
              <SidenavCollapseItem
                refer="gettingStartedExample"
                text="Getting Started"
              >
                <template #nav-child-item>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="https://www.creative-tim.com/learning-lab/vue/quick-start/argon-dashboard/"
                      target="_blank"
                    >
                      <span class="text-xs sidenav-mini-icon">Q</span>
                      <span class="sidenav-normal">Quick Start</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="https://www.creative-tim.com/learning-lab/vue/license/argon-dashboard/"
                      target="_blank"
                    >
                      <span class="text-xs sidenav-mini-icon">L</span>
                      <span class="sidenav-normal">License</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="https://www.creative-tim.com/learning-lab/vue/overview/argon-dashboard/"
                      target="_blank"
                    >
                      <span class="text-xs sidenav-mini-icon">C</span>
                      <span class="sidenav-normal">Contents</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="https://www.creative-tim.com/learning-lab/vue/build-tools/argon-dashboard/"
                      target="_blank"
                    >
                      <span class="text-xs sidenav-mini-icon">B</span>
                      <span class="sidenav-normal">Build Tools</span>
                    </a>
                  </li>
                </template>
              </SidenavCollapseItem>

              <SidenavCollapseItem refer="foundationExample" text="Foundation">
                <template #nav-child-item>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="https://www.creative-tim.com/learning-lab/vue/colors/argon-dashboard/"
                      target="_blank"
                    >
                      <span class="text-xs sidenav-mini-icon">C</span>
                      <span class="sidenav-normal">Colors</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="https://www.creative-tim.com/learning-lab/vue/grid/argon-dashboard/"
                      target="_blank"
                    >
                      <span class="text-xs sidenav-mini-icon">G</span>
                      <span class="sidenav-normal">Grid</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="https://www.creative-tim.com/learning-lab/vue/base-typography/argon-dashboard/"
                      target="_blank"
                    >
                      <span class="text-xs sidenav-mini-icon">T</span>
                      <span class="sidenav-normal">Typography</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="https://www.creative-tim.com/learning-lab/vue/icons/argon-dashboard/"
                      target="_blank"
                    >
                      <span class="text-xs sidenav-mini-icon">I</span>
                      <span class="sidenav-normal">Icons</span>
                    </a>
                  </li>
                </template>
              </SidenavCollapseItem>
            </template>
          </SidenavCollapse>
        </li>
        <li class="nav-item">
          <SidenavCollapse
            collapse-ref="componentsExamples"
            nav-text="Components"
            :class="getRoute === 'components' ? 'active' : ''"
          >
            <template #icon>
              <i class="ni ni-app text-sm" :class="sidenavType"></i>
            </template>
            <template #list>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.creative-tim.com/learning-lab/vue/alerts/argon-dashboard/"
                  target="_blank"
                >
                  <span class="sidenav-mini-icon">A</span>
                  <span class="sidenav-normal">Alerts</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.creative-tim.com/learning-lab/vue/avatar/argon-dashboard/"
                  target="_blank"
                >
                  <span class="sidenav-mini-icon">A</span>
                  <span class="sidenav-normal">Avatar</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.creative-tim.com/learning-lab/vue/badge/argon-dashboard/"
                  target="_blank"
                >
                  <span class="sidenav-mini-icon">B</span>
                  <span class="sidenav-normal">Badge</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.creative-tim.com/learning-lab/vue/buttons/argon-dashboard/"
                  target="_blank"
                >
                  <span class="sidenav-mini-icon">B</span>
                  <span class="sidenav-normal">Buttons</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.creative-tim.com/learning-lab/vue/input/argon-dashboard/"
                  target="_blank"
                >
                  <span class="sidenav-mini-icon">I</span>
                  <span class="sidenav-normal">Input</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.creative-tim.com/learning-lab/vue/checkbox/argon-dashboard/"
                  target="_blank"
                >
                  <span class="sidenav-mini-icon">C</span>
                  <span class="sidenav-normal">Checkbox</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.creative-tim.com/learning-lab/vue/pagination/argon-dashboard/"
                  target="_blank"
                >
                  <span class="sidenav-mini-icon">P</span>
                  <span class="sidenav-normal">Pagination</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.creative-tim.com/learning-lab/vue/progress/argon-dashboard/"
                  target="_blank"
                >
                  <span class="sidenav-mini-icon">P</span>
                  <span class="sidenav-normal">Progress</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.creative-tim.com/learning-lab/vue/snackbar/argon-dashboard/"
                  target="_blank"
                >
                  <span class="sidenav-mini-icon">S</span>
                  <span class="sidenav-normal">Snackbar</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.creative-tim.com/learning-lab/vue/social-buttons/argon-dashboard/"
                  target="_blank"
                >
                  <span class="sidenav-mini-icon">S</span>
                  <span class="sidenav-normal">Social Button</span>
                </a>
              </li>
            </template>
          </SidenavCollapse>
        </li>
        <li class="nav-item">
          <SidenavCollapse
            nav-text="Changelog"
            :collapse="false"
            url="#"
            :aria-controls="''"
            collapse-ref="https://github.com/creativetimofficial/ct-vue-argon-dashboard-pro/blob/master/CHANGELOG.md"
          >
            <template #icon>
              <i class="ni ni-align-left-2 text-sm" :class="sidenavType"></i>
            </template>
          </SidenavCollapse>
        </li>
      </ul>
    </div>
    <div class="mt-3 sidenav-footer">
      <SidenavCard
        :card="{
          title: 'Need Help?',
          description: 'Please check our docs',
          links: [
            {
              label: 'Documentation',
              route:
                'https://www.creative-tim.com/learning-lab/vue/overview/argon-dashboard/',
              color: 'dark',
            },
            {
              label: 'Buy now',
              route:
                'https://www.creative-tim.com/product/vue-argon-dashboard-pro?ref=vadp',
              color: 'success',
            },
          ],
        }"
      />
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import SidenavCollapse from "./SidenavCollapse.vue";
import SidenavCollapseItem from "./SidenavCollapseItem.vue";
import SidenavCard from "./SidenavCard.vue";
import SidenavItem from "./SidenavItem.vue";
import { useAppStore } from "~~/stores/AppStore";

const appStore = useAppStore();

const sidenavType = computed(() => {
  return appStore.sidenavType === "bg-white" ? "text-dark" : "text-white";
});

const getRoute = computed(() => {
  const route = useRoute();
  return route.path.split("/")[1];
});

defineProps({
  isRTL: {
    type: Boolean,
    default: false,
  },
});
</script>
