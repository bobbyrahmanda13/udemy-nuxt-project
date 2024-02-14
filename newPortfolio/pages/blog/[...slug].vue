<script setup lang="ts">
const route = useRoute()
// console.log(route);

</script>
<template>
  <article class="prose dark:prose-invert prose-gray max-w-none">
    <ContentDoc v-slot="{ doc }">
      <!-- {{ doc.body?.toc?.links }} -->
      <!-- {{ doc.title }} -->
      <div class="grid grid-cols-6 gap-16">
        <div :class="{ 'col-span-4': doc.toc, 'col-span-6': !doc.toc }">
          <ContentRenderer :value="doc" />
        </div>
        <div class="col-span-2 not-prose" v-if="doc.toc">
          <aside class="sticky top-8">
            <div class="font-semibold mb-2">
              Table of Contents
            </div>
            <nav>
              <TocLinks :links="doc.body?.toc?.links" />
            </nav>
          </aside>
        </div>
      </div>
    </ContentDoc>
  </article>
</template>
