// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: "Nuxt Argon Dashboard 2 PRO",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Nuxt Argon Dashboard 2 PRO by Creative Tim",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.png",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",
        },
      ],
      script: [
        {
          type: "text/javascript",
          src: "https://kit.fontawesome.com/42d5adcbca.js",
          async: true,
        },
        {
          type: "text/javascript",
          src: "https://buttons.github.io/buttons.js",
          async: true,
        },
      ],
    },
  },
  routeRules: {
    "/": { redirect: "/dashboards/default" },
  },

  components: {
    global: true,
    dirs: ["~/components", "~/components/Icons"],
  },
  imports: {
    autoImport: true,
  },
  css: [
    "@/assets/css/nucleo-svg.css",
    "@/assets/css/nucleo-icons.css",
    "@/assets/scss/argon-dashboard.scss",
  ],
  modules: ["@pinia/nuxt", "@vueuse/nuxt"],
});
