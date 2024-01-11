import { defineConfig, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  shortcuts: {
    'border-base': 'border-gray-200 dark:border-dark-200',
    'bg-base': 'bg-white dark:bg-dark-100',
    'color-base': 'text-gray-900 dark:text-gray-300',
    'color-fade': 'text-gray-900:50 dark:text-gray-300:50'
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
  ],
  transformers: [
    transformerDirectives()
  ]
})

