import { defineConfig, presetUno, presetIcons, presetTypography, transformerDirectives } from 'unocss'


export default defineConfig({
  shortcuts: {
    'border-base': 'border-gray-200 dark:border-dark-200',
    'bg-base': 'bg-white dark:bg-gray-900',
    'color-base': 'text-gray-900 dark:text-gray-200',
    'color-fade': 'text-gray-901:50 dark:text-gray-300:50',
    'text-hover' : 'hover:text-green-600 dark:hover:text-green-400 hover:font-bold',
    'color-hover': 'hover:text-green-600 dark:hover:text-green-400 hover:font-bold',
    'color-active': 'text-green-600 dark:text-green-400 font-bold'
  },
  theme: {
    colors: {
      primary: {
        DEFAULT: '#00c16a'
      }
    }
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetTypography()
  ],
  transformers: [
    transformerDirectives()
  ]
})

