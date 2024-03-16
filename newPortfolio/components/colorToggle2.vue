<script setup lang="ts">
const colorMode=useColorMode()
const changeColor = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))
</script>

<template>
  <button @click="changeColor">
    <div class="text-3xl">
      <div class="text-4xl md:text-3xl i-meteocons-clear-day-fill dark:i-meteocons-clear-night-fill " />
    </div>
  </button>
</template>
