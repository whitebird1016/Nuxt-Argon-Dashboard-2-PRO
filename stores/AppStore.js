import { defineStore } from "pinia";
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";

export const useAppStore = defineStore("AppStore", {
  state: () => {
    return {
      bootstrap,
      pinSidebar: true,
      showConfig: false,
      sidenavType: "bg-white",
      navFixed: false,
      darkMode: false,
    };
  },

  actions: {
    toggleShowConfig() {
      this.showConfig = !this.showConfig;
    },
    toggleSidebarColor(payload) {
      this.sidebarColor = payload;
    },
    setSidenavType(payload) {
      this.sidenavType = payload;
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
    toggleNavFixed() {
      this.navFixed = !this.navFixed;
    },
    toggleSidenavCollapsing() {
      const sidebar = document.querySelector(".g-sidenav-show");
      if (sidebar.classList.contains("g-sidenav-hidden")) {
        sidebar.classList.remove("g-sidenav-hidden");
        sidebar.classList.add("g-sidenav-pinned");
        this.pinSidebar = true;
      } else if (sidebar.classList.contains("g-sidenav-pinned")) {
        sidebar.classList.add("g-sidenav-hidden");
        sidebar.classList.remove("g-sidenav-pinned");
        this.pinSidebar = false;
      } else {
        //
      }
    },
  },
});
