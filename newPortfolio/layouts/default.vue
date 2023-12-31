<template>
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
  <div>
    <slot />
  </div>
</template>
