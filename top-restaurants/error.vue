<script setup lang="ts">
const props = defineProps({
  error: Object
});

// const handleError = () => clearError({redirect:'/'})

</script>
<template>
  <div>
    <Nav />
    <div class="container">
      <h1>Page not found</h1>
      <NuxtLink class="btn" to="/">Go Back</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  margin-top: 5rem;
}

.btn {
  background-color: lightgreen;
  color: black;
  padding: inherit;
}
</style>
