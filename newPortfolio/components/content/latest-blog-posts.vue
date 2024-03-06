<template>
  <BlogPosts v-slot="{ posts }" :limit="limit">
    <div class="" v-for="post in posts" :key="post.id">
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
    </div>
  </BlogPosts>
</template>
<script setup lang="ts">
defineProps({
  limit: {
    type: Number,
    default: null
  }
});

</script>
