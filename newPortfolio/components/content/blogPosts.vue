<script setup lang="ts">

const { data: posts } = await useAsyncData(
  'listBlog', 
  () => queryContent('/blog')
    .where({_path:{ $ne: '/blog'}})
    .only(['_path', 'title']).find())
// console.log(posts);

</script>
<template>
  <section class="not-prose">
    <ul>
      <li v-for="post in posts" :key="post._path">
        <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>

