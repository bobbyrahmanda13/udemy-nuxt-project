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

// testing colormode using default layout before create component toggleDarkMode
// const colorMode = useColorMode()
//
// colorMode.preference = 'light'
// console.log(colorMode.preference);

</script>

<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between items-start md:items-center mt5 mb5">
      <div class="flex justify-center items-center md:space-x-12">
        <div class="hidden md:block">
          <NuxtLink to="/" class="text-xl font-semibold p2 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded">Bobby Rahmanda</NuxtLink>
        </div>
        <TheNav />
      </div>

      <ClientOnly>
        <!-- <ColorToggle /> -->
        <ColorToggle2 />
        <!-- <ColorToggle3 /> -->
      </ClientOnly>
    </header>

    <main class="p2">
      <slot />
    </main>
  </div>
</template>

