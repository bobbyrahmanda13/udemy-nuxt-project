<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between items-center mt5">
      <div class="">
        <NuxtLink to="/" class="text-xl font-semibold p2 hover:bg-gray-200">Bobby Rahmanda</NuxtLink>
      </div>
      <nav class="font-mono">
        <ul class="flex space-x-4">
          <li>
            <NuxtLink to="/">Main</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <main class="p2">
      <slot />
    </main>
  </div>
</template>
