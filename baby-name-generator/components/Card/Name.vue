<script setup lang="ts">
interface NameProps {
  name: string;
  index: number;
}
const props = defineProps<NameProps>();

const emit = defineEmits(["remove"]);

const removeName = () => {
  emit("remove", props.index);
};

</script>
<template>
  <div class="card">
    <h4>{{ name }}</h4>
    <p @click="removeName">x</p>
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
