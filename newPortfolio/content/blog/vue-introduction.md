---
description: A beginner's guide to getting started with Vue 3.
image: https://en.vetores.org/wp-content/uploads/vue-js.png
head:
  meta:
    - name: 'og:image'
      content: /images/vue-logo.png
publishedAt: 2022-04-11 17:15:00
toc: true
---
# Introduction to Vue 3

![Vue 3 Introduction](https://en.vetores.org/wp-content/uploads/vue-js.png)

## What is Vue 3?

Vue.js 3 is a progressive JavaScript framework for building user interfaces on the web. It's designed to be incrementally adoptable and can easily scale between a library and a full-featured framework.

---

## Why Choose Vue 3?

Vue 3 comes with several exciting features that make it an excellent choice for developers:

* **Composition API:** This new API provides a set of additive, function-based APIs that allow flexible composition of component logic.

* **Faster rendering:** Vue 3 features a faster virtual DOM and improved runtime performance.

* **Improved TypeScript support:** Vue 3's codebase is written in TypeScript, allowing for better TypeScript integration.

---

## Getting Started with Vue 3

Here's a basic Vue 3 application setup:

```typescript
const { createApp } = Vue
const app = createApp({
    data() {
        return {
            message: 'Hello Vue 3!'
        }
    }
})
app.mount('#app')
```
