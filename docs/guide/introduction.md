# Introduction

## Quick start

Fadgram Vue is a comprehensive Vue 3 components package designed to streamline your development process. It offers a wide range of customizable and accessible UI components, including inputs, selects, checkboxes, switches, textareas, alerts, and more. With built-in support for icons, sizes, and various styles, Fadgram Vue empowers developers to create modern and responsive user interfaces effortlessly.

## Requirements

- Vue 3.x
- Node.js (LTS version recommended)
- npm or yarn (for package management)
- Basic knowledge of Vue.js and TypeScript
- Tailwindcss 4

## Installation

```bash
npm i fadgram-vue
```

## Usage

### Using as a Plugin

When you use a library as a plugin, you register it globally in your Vue app. This makes all the components and functionality provided by the library available throughout your application without needing to import them individually.

```ts
import { createApp } from 'vue'
import FadgramVue from 'fadgram-vue'
import 'fadgram-vue/dist/fadgram-vue.css'
const app = createApp(App)
app.use(FadgramVue)
```

::: tip

- Advantages:
  - Simplifies usage since you don't need to import components individually.
  - Useful for libraries that provide global functionality (e.g., directives, mixins, or global components).
- Disadvantages:
  - Increases bundle size if you don't need all components.
  - Less control over what is included in your app.

:::

### Importing Specific Components

Example:

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { FgAccordion, FgAlert } from 'fadgram-vue' // Import specific components

const app = createApp(App)

// Register the component locally or globally
app.component('FgAccordion', FgAccordion)
app.component('FgAlert', FgAlert)

app.mount('#app')
```

::: tip

- Advantages:
  - Reduces bundle size by only including the components you need.
  - Provides more control over your app's structure.
- Disadvantages:
  - Requires manual imports and registrations for each component.

:::

### using in templates example

```vue
<template>
  <fg-accordion> ... </fg-accordion>
  <fg-alert ... />
</template>
```
