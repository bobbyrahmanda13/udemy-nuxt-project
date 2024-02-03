import { defineConfig, presetUno, presetIcons, presetTypography, transformerDirectives } from 'unocss'


export default defineConfig({
  shortcuts: {
    'border-base': 'border-gray-200 dark:border-dark-200',
    'bg-base': 'bg-white dark:bg-gray-900',
    'color-base': 'text-gray-900 dark:text-gray-200',
    'color-fade': 'text-gray-901:50 dark:text-gray-300:50',
    'color-hover': 'hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded',
    'color-active': 'bg-gray-200 dark:bg-gray-700 rounded '
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

