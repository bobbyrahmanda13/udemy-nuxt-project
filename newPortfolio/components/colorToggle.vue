<template>
  <div>
    <button @click="toggleMode">{{ nextModeIcon }}</button>
  </div>
</template>

<script setup lang="ts">

const colorMode = useColorMode()
const modes = [
  'light',  // 0
  'dark' // 1
] // .length = 2

type NextModeIcons = {
  [key: string]: string
}
const nextModeIcons: NextModeIcons = {
  light: '🌕',
  dark: '🌑'
}

const nextMode = computed(() => {
  const currentModeIndex = modes.indexOf(colorMode.preference)
  let nextModeIndex = null

  if (currentModeIndex + 1 === modes.length) {
    nextModeIndex = 0
  } else {
    nextModeIndex = currentModeIndex + 1
  }
  return modes[nextModeIndex]
});
const toggleMode = () => {
  return colorMode.preference = nextMode.value
};

const nextModeIcon = computed(() => {
  return nextModeIcons[nextMode.value]
});

</script>
