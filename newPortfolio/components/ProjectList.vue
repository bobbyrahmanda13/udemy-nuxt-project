<script setup lang="ts">
const { error, pending, data } = await useFetch('https://api.github.com/users/bobbyrahmanda13/repos')

</script>
<template>
  <div>
    <p class="mb10">Take a look at my github projects</p>
  </div>
  <section v-if="pending">Loading ...</section>
  <section v-if="error">Something went wrong... Try again!</section>
  <section v-else>
    <ul class="grid grid-cols-1 gap-4">
      <li v-for="repository in data" :key="repository.id"
        class="border border-gray-200 rounded-sm p4 hover:bg-gray-100 font-mono">
        <a href="repository.html_url" target="_blank">
          <div class="flex items-center">
          </div>
          <div class="font-semibold">{{ repository.name }}</div>
        </a>
      </li>
    </ul>
  </section>
</template>
