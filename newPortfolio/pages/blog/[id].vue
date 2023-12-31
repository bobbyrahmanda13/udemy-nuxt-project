<script setup lang="ts">
const route = useRoute()
// console.log(route);

</script>
<template>
  <div>
    we are inside a blog!
  </div>
  <div class="">Post id is {{ route.params.id }}</div>
</template>
