<script setup lang="ts">
import type { Repo } from '../types/type'

const { error, pending, data } = await useFetch<Repo[], Error>('https://api.github.com/users/bobbyrahmanda13/repos')

// config sort from course udemy (https://www.udemy.com/course/master-nuxt-full-stack-complete-guide)
// const repos = computed(() =>
//   data.value
//     ?.filter((repo: Repo) => repo.pushed_at)
//     .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
// )

const sortRepos = computed(() => {
  return data.value?.slice().sort((a, b) => {
    const date1 = new Date(a.pushed_at).getTime()
    const date2 = new Date(b.pushed_at).getTime()
    const result = date2 - date1
    return result
  })
})
</script>
<template>
  <div>
    <p class="mb10">Take a look at my github projects</p>
  </div>
  <section v-if="pending">Loading ...</section>
  <section v-if="error">Something went wrong... Try again!</section>
  <section v-else>
    <ul class="grid grid-cols-1 gap-4">
      <li v-for="repository in sortRepos" :key="repository.id"
        class="border border-gray-200 rounded-sm p4 hover:bg-gray-100 font-mono">
        <a :href="repository.html_url" target="_blank">
          <div class="flex items-center justify-between text-sm">
            <div class="font-semibold">{{ repository.name }}</div>
            <div>{{ repository.stargazers_count }} * </div>
          </div>
          <p class="text-sm">{{ repository.description }}</p>
        </a>
      </li>
    </ul>
  </section>
</template>
