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

After installation, you can import and use the components in your Vue app:

```ts
import { FgAccordion, FgAlert } from 'fadgram-vue'
```

Example usage:

```vue
<template>
  <fg-input
    v-model="name"
    label="Username"
    startIcon="bi-person-fill"
    placeholder="Enter your name"
  />
</template>
```
