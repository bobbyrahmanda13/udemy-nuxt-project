// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@unocss/nuxt'
  ],
  css: [
    '@unocss/reset/tailwind.css'
  ],
  nitro: {
    devProxy: {
      host: 'localhost'
    }
  }
})
