<template>
  <NuxtLayout>
    <section>
      <h1 class="text-4xl mb4 flex justify-center justify-items-center">
        {{ props.error?.statusCode }}
      </h1>
      <h2 class="text-xl text-gray-500 dark:text-gray-200 flex justify-center justify-items-center">
        {{ props.error?.statusMessage }}
      </h2>
      <div class="mt5 flex justify-center">
        <NuxtLink class="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/">go
          back to home</NuxtLink>
      </div>
    </section>
  </NuxtLayout>
</template>
<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error: Object as () => NuxtError
})
</script>
