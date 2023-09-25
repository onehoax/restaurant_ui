// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  typescript: {
    strict: true
  },
  app: {
    head: {
      title: "Sample App",
      meta: [{ name: "description", content: "Sample App" }],
      htmlAttrs: {
        lang: "en"
      },
      link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }]
    }
  }
});
