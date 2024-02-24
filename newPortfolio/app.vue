<script setup lang="ts">
import '@unocss/reset/tailwind.css'
import '~/assets/main.css'
import '~/assets/prose.css'

</script>
<template>
  <!-- <NuxtLayout :name="layout"> -->
  <!--   <NuxtPage /> -->
  <!-- </NuxtLayout> -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
/* @keyframes fade-in { */
/*   from { opacity: 0; } */
/* } */
/**/
/* @keyframes fade-out { */
/*   to { opacity: 0; } */
/* } */
/**/
/* @keyframes slide-from-right { */
/*   from { transform: translateX(30px); } */
/* } */
/**/
/* @keyframes slide-to-left { */
/*   to { transform: translateX(-30px); } */
/* } */
/**/
/* ::view-transition-old(root) { */
/*   animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out, */
/*     300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left; */
/* } */
/**/
/* ::view-transition-new(root) { */
/*   animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in, */
/*     300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right; */
/* } */

/* @keyframes fade-bounce-in { */
/*   0% { */
/*     opacity: 0; */
/*     transform: scale(0.9); */
/*   } */
/**/
/*   50% { */
/*     opacity: 1; */
/*     transform: scale(1.05); */
/*   } */
/**/
/*   100% { */
/*     opacity: 1; */
/*     transform: scale(1); */
/*   } */
/* } */
/**/
/* @keyframes slide-out-left { */
/*   to { */
/*     transform: translateX(-100%); */
/*   } */
/* } */
/**/
::view-transition-old(root) {
  animation: 300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-out-left;
}

::view-transition-new(root) {
  animation: 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both fade-bounce-in;
}
@keyframes zoom-in {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes zoom-out {
  from { transform: scale(1); opacity: 1; }
  to { transform: scale(0.8); opacity: 0; }
}

::view-transition-old(root) {
  animation: zoom-out 300ms cubic-bezier(0.4, 0, 0.2, 1) both;
}

::view-transition-new(root) {
  animation: zoom-in 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

</style>
