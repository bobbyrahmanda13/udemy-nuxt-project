<script setup lang="ts">
useHead({
  title: 'Projects'
})
</script>
<template>
  <div>
    <!-- <div> -->
    <!--   <h2 class="text-2xl font-semibold mb10">Projects</h2> -->
    <!--   <ProjectList /> -->
    <!-- </div> -->
    <article class="prose dark:prose-invert prose-truegray max-w-none">
      <ContentDoc path="/projects" />
    </article>
  </div>
</template>
