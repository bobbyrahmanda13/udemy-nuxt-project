<template>
  <nav class="font-mono">
    <ul class="flex flex-col md:flex-row md:space-x-4 ">
      <li>
        <NuxtLink to="/" class="text-2xl md:text-base p1 color-hover" active-class="color-active">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="text-2xl md:text-base p1 color-hover" active-class="color-active">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog" class="text-2xl md:text-base p1 color-hover" active-class="color-active">Blog</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects" class="text-2xl md:text-base p1 color-hover" active-class="color-active">Projects</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
