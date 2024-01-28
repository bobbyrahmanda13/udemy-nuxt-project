// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    viewTransition: true
  },
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/content'
  ],
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'min-light',
        dark: 'min-dark'
      }
    }
  },
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light'
  },
})
