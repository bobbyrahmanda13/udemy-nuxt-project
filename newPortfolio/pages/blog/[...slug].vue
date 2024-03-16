<script setup lang="ts">
const activeId = ref<string | undefined>()

onMounted(() => {
  // let elements: any = []
  const callback = (entries: string | any) => {
    // console.log(entries);
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id
        break;
      }
    }
  }

  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5
  })
  // setTimeout(() => {
    const elements = document.querySelectorAll('h2,h3')

    for (const element of elements) {
      observer.observe(element)
    }
  // }, 150);

  onBeforeUnmount(() => {
    // console.log('onBeforeUnmount');
    for (const element of elements) {
      observer.unobserve(element)
    }
  })
})

</script>

<template>
  <div>
    <article class="prose dark:prose-invert prose-gray max-w-none">
      <ContentDoc>
        <template #not-found>
          <h1>Document not found</h1>
        </template>

        <template v-slot="{ doc }">
          <!-- {{ doc.body?.toc?.links }} -->
          <!-- {{ doc.title }} -->
          <div class="grid grid-cols-6 gap-16">
            <div :class="{ 'col-span-6 md:col-span-4': doc.toc, 'col-span-6': !doc.toc }">
              <ContentRenderer :value="doc" />
            </div>
            <div class="hidden md:col-span-2 md:block not-prose" v-if="doc.toc">
              <aside class="sticky top-8">
                <div class="font-semibold mb-2">
                  Table of Contents
                </div>
                <nav>
                  <TocLinks :links="doc.body?.toc?.links" :active-id="activeId" />
                </nav>
              </aside>
            </div>
          </div>
        </template>
      </ContentDoc>
    </article>
  </div>
</template>
