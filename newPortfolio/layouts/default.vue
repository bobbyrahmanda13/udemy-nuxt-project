<script setup lang="ts">
useHead({
  titleTemplate: '%s - Rahman',
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    }
  ]

})
</script>
<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between items-center mt5">
      <div class="">
        <NuxtLink to="/" class="text-xl font-semibold p2 hover:bg-gray-200">Bobby Rahmanda</NuxtLink>
      </div>
      <TheNav />
    </header>
    <main class="p2">
      <slot />
    </main>
  </div>
</template>

<style>
body {
  font-family: Roboto;
}
</style>
