// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  devtools: { enabled: false },
  experimental: {
    viewTransition: true
  },
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/content'
  ],
  css: [
    '~/assets/main.css',
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light'
  },
})
