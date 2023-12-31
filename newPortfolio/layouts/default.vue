<template>
  <div class="container mx-auto max-w-2xl">
    <header>
      <div class="">
        <NuxtLink to="/" class="text-xl font-semibold p2 hover:bg-gray">Bobby Rahmanda</NuxtLink>
      </div>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Main</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <slot />
  </div>
</template>
