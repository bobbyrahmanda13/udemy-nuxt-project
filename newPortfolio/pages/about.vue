<script setup lang="ts">
// definePageMeta error and setPageLayout not support script setup lang="ts"
// fix this using :
// import { definePageMeta, setPageLayout } from '#imports';


// definePageMeta({
//   layout: false
// })

// add dynamic layout using button 
// function enableCustomLayout() {
//   setPageLayout('another')
// }

</script>
<template>
  <div>
    <h1>testing</h1>
  </div>

  <!-- dynamic layout  -->
  <!-- <div class=""><button @click="enableCustomLayout">Update Layout</button></div> -->
</template>
