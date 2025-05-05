---
title: Input
icon: input-cursor
---

<script setup lang="ts">
    import { ref } from 'vue'
    const username = ref('')
    const url = ref('')
</script>

# Input

## Props

| Prop          | Type               | Default        | Description                                                               |
| ------------- | ------------------ | -------------- | ------------------------------------------------------------------------- |
| `id`          | `string`           | Auto-generated | The unique identifier for the input field.                                |
| `icon`        | `string`           | -              | The icon used in the label (passed to `FgLabel`).                         |
| `label`       | `string`           | -              | The label text for the input field.                                       |
| `info`        | `string`           | -              | Additional information or hint displayed below the input (`FgInfo`).      |
| `error`       | `string`           | -              | Error message to display (`FgError`).                                     |
| `size`        | `string`           | -              | the input size (`xs`, `sm`, `lg`, `xl`, 'xxl')                            |
| `modelValue`  | `string \| number` | `''`           | The bound value of the input field. Supports v-model.                     |
| `placeholder` | `string`           | -              | Placeholder text for the input.                                           |
| `disabled`    | `boolean`          | `false`        | Whether the input field is disabled.                                      |
| `type`        | `string`           | `'text'`       | Input type (e.g., `text`, `password`, `email`).                           |
| `startIcon`   | `string`           | `null`         | Icon class to display at the start of the input (e.g., `bi-person-fill`). |
| `endIcon`     | `string`           | `null`         | Icon class to display at the end of the input (e.g., `bi-eye-fill`).      |

## Install

```ts
import { FgInput } from 'fadgram-vue'
```

## Basic usage

::: tabs

@tab:active Preview

<fg-input type="text" v-model="username" placeholder="insert username"/>
username: {{ username }}
@tab vue

```vue
<fg-input type="text" v-model="username" placeholder="insert username" />
```

:::

## Input label & info

::: tabs

@tab:active Preview

<fg-input type="text" v-model="username" label="username" placeholder="insert username" info="this is input info"/>

@tab vue

```vue
<fg-input
  type="text"
  v-model="username"
  label="username"
  placeholder="insert username"
  info="this is input info"
/>
```

:::

## Input label icon

::: tabs

@tab:active Preview

<fg-input type="text" v-model="username" icon="bi-person-fill" label="username" placeholder="insert username"/>

@tab vue

```vue
<fg-input
  type="text"
  v-model="username"
  icon="bi-person-fill"
  label="username"
  placeholder="insert username"
/>
```

:::

## Input error

::: tabs

@tab:active Preview

<fg-input type="text" v-model="username" label="username" placeholder="insert username" error="Invalid username!"/>

@tab vue

```vue
<fg-input
  type="text"
  v-model="username"
  label="username"
  placeholder="insert username"
  error="Invalid username!"
/>
```

:::

## Input startIcon

::: tabs

@tab:active Preview

<fg-input type="text" v-model="url" label="url" placeholder="insert url" startIcon="bi-globe"/>

@tab vue

```vue
<fg-input type="text" v-model="url" label="url" placeholder="insert url" startIcon="bi-globe" />
```

:::

## Input endIcon

::: tabs

@tab:active Preview

<fg-input type="text" v-model="url" label="url" placeholder="insert url" endIcon="bi-clipboard"/>

@tab vue

```vue
<fg-input type="text" v-model="url" label="url" placeholder="insert url" endIcon="bi-clipboard" />
```

:::

## Input with startIcon & endIcon

::: tabs

@tab:active Preview

<fg-input type="text" v-model="url" label="url" placeholder="insert url" startIcon="bi-globe" endIcon="bi-clipboard"/>

@tab vue

```vue
<fg-input
  type="text"
  v-model="url"
  label="url"
  placeholder="insert url"
  startIcon="bi-globe"
  endIcon="bi-clipboard"
/>
```

:::

## Input size

::: tabs

@tab:active Preview

<div class="space-y-2">
<fg-input v-for="size in $sizes" type="text" :size="size" :placeholder="size"/>
</div>

@tab vue

```vue
<fg-input type="text" size="xs" placeholder="xs" />
<fg-input type="text" size="sm" placeholder="sm" />
<fg-input type="text" size="lg" placeholder="lg" />
<fg-input type="text" size="xl" placeholder="xl" />
<fg-input type="text" size="xxl" placeholder="xxl" />
```

:::
