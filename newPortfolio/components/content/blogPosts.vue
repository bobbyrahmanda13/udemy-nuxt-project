<script setup lang="ts">

const { data: posts } = await useAsyncData(
  'listBlog', 
  () => queryContent('/blog')
    .where({_path:{ $ne: '/blog'}})
    .only(['_path', 'title']).find())
console.log(posts);

</script>
<template>
  <section class="not-prose font-mono ">
    <div class="column text-gray-400 text-sm">
      <div class="">Date</div>
      <div class="">Title</div>
    </div>

    <ul>
      <li v-for="post in posts" :key="post._path">
        <NuxtLink class="column hover:bg-gray-200 dark:hover:bg-gray-800" :to="post._path">
          <div class="text-gray-500">2023</div>
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

