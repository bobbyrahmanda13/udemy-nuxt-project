<template>
  <nav class="font-mono">
    <ul class="flex space-x-4 ">
      <li>
        <NuxtLink to="/" class="p1 color-hover" active-class="color-active">Main</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="p1 color-hover" active-class="color-active">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog" class="p1 color-hover" active-class="color-active">Blog</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects" class="p1 color-hover" active-class="color-active">Projects</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
