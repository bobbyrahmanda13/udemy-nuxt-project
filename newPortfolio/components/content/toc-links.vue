<template>
  <ul class="mx2">
    <li v-for="link in links" :key="link.id">
      <NuxtLink :class="{ 'ml-4': level, 'color-active': activeId === link.id }"
        :to="{ path: route.path, hash: `#${link.id}` }">
        {{ link.text }}
      </NuxtLink>
      <TocLinks :links="link.children" :level='level + 1' :active-id="activeId" />
    </li>
  </ul>
</template>
<script setup lang="ts">
const route = useRoute()

interface Link {
  id: string
  text: string
  children?: Link[]
}

defineProps({
  links: Array<Link>,
  level: {
    type: Number,
    default: 0
  },
  activeId: {
    type: String,
    default: null
  }
});
</script>
