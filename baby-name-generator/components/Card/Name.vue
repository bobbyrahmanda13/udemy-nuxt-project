<script setup lang="ts">

interface NameProps  {
  name: string
}

const props = defineProps<NameProps>();

</script>
<template>
  <div class="card">
    <h4>{{ name }}</h4>
    <p>x</p>
  </div>
</template>
<style scoped>
.card {
  background-color: red;
  width: 26%;
  color: white;
  border-radius: 1rem;
  padding: .1rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  position: relative;
}

.card p {
  position: absolute;
  top: -23%;
  left: 92.5%;
  cursor: pointer;
  color: dark;
}
</style>
