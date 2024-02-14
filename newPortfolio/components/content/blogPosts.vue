<script setup lang="ts">

const { data } = await useAsyncData(
  'listBlog',
  () => queryContent('/blog')
    .where({ _path: { $ne: '/blog' } })
    .only(['_path', 'title', 'publishedAt'])
    .sort({ publishedAt: -1 })
    .find()
)

const posts = computed(() => {
  if (!data.value) {
    return []
  }
  const result: any[] = []
  let lastYear = null

  for (const post of data.value) {
    const year = new Date(post.publishedAt).getFullYear()
    // console.log(year);

    const displayYear = year !== lastYear

    // console.log(displayYear);
    post.displayYear = displayYear
    post.year = year
    result.push(post)
    lastYear = year

  }
  return result
});

console.log(posts);

</script>
<template>
  <section class="not-prose font-mono ">
    <div class="column text-gray-400 text-sm">
      <div class="">Date</div>
      <div class="">Title</div>
    </div>

    <ul>
      <li v-for="post in  posts " :key="post._path">
        <NuxtLink class="column hover:bg-gray-200 dark:hover:bg-gray-800" :to="post._path">
          <div :class="{ 'text-white dark:text-gray-900': !post.displayYear, 'text-gray-400 dark:text-gray-600': post.displayYear }">{{post.year}}</div>
          <div class="">{{ post.title }}</div>

        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.column {
  --uno: flex items-center space-x-8 py2 border-b border-gray-200 dark:border-gray-700;
}
</style>

