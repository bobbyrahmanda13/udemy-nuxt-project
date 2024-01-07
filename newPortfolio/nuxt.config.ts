// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@unocss/nuxt'
  ],
  css: [
    '@unocss/reset/tailwind.css'
  ],
  typescript: {
    includeWorkspace: true,
    tsConfig: {
      include: [
        '../content/**/.template/**/*.ts',
      ],
    },
  },
  nitro: {
    devProxy: {
      host: 'localhost'
    }
  },
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  }
})
