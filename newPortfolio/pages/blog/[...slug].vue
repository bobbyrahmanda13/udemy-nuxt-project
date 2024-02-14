<script setup lang="ts">
const route = useRoute()
// console.log(route);

</script>
<template>
  <article class="prose dark:prose-invert prose-gray max-w-none">
    <ContentDoc v-slot="{ doc }">
      {{doc.body?.toc?.links}}
      <!-- {{ doc.title }} -->
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </article>
</template>
