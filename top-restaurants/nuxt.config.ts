// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app:{
    head:{
      link:[
        {
          rel:"stylesheet",
          href:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        }
      ]
    }
  },
  modules: ["@nuxt/image"]

})
