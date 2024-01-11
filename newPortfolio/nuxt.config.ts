// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode'
  ],
  css: [
    '@unocss/reset/tailwind.css'
  ],
  colorMode:{
    classSuffix:'',
  },
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
      host: '127.0.0.1'
    }
  },
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  }
})
