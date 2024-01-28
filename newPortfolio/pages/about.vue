<script setup lang="ts">
// definePageMeta error and setPageLayout not support script setup lang="ts"
// this will work in both `<script setup>` and `<script>
// fix this using :
// import { definePageMeta, setPageLayout } from '#imports';


// definePageMeta({
//   layout: false
// })

// add dynamic layout using button 
// function enableCustomLayout() {
//   setPageLayout('another')
// }

// useHead({
//   title: 'About',
// })

</script>

<template>
  <article class="prose dark:prose-invert prose-truegray">
    <ContentDoc path="/about" />
  </article>
  <!-- dynamic layout  -->
  <!-- <div class=""><button @click="enableCustomLayout">Update Layout</button></div> -->
</template>
