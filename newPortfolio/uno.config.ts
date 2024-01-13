import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: {
    'border-base': 'border-gray-200 dark:border-dark-200',
    'bg-base': 'bg-white dark:bg-gray-900',
    'color-base': 'text-gray-900 dark:text-gray-200',
    'color-fade': 'text-gray-901:50 dark:text-gray-300:50'
  },
  theme: {
    colors: {
      primary: {
        DEFAULT: '#00c16a'
      }
    }
  },
  presets: [
    presetUno()
  ]
})

