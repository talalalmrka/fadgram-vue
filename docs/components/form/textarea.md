---
title: Textarea
icon: textarea-resize
---

# Textarea

## Props

| Prop          | Type               | Default        | Description                                                         |
| ------------- | ------------------ | -------------- | ------------------------------------------------------------------- |
| `id`          | `string`           | Auto-generated | The unique identifier for the textarea field.                       |
| `icon`        | `string`           | -              | Icon used in the label (`FgLabel`).                                 |
| `label`       | `string`           | -              | Label text displayed above the textarea.                            |
| `info`        | `string`           | -              | Informational or hint text displayed below the textarea (`FgInfo`). |
| `error`       | `string`           | -              | Error message displayed below the textarea (`FgError`).             |
| `modelValue`  | `string`           | `''`           | Bound value of the textarea. Supports v-model.                      |
| `placeholder` | `string`           | -              | Placeholder text for the textarea.                                  |
| `rows`        | `string \| number` | `4`            | Number of visible text lines in the textarea.                       |
| `disabled`    | `boolean`          | `false`        | Whether the textarea is disabled.                                   |

## Emits

| Event               | Payload Type | Description                                 |
| ------------------- | ------------ | ------------------------------------------- |
| `update:modelValue` | `string`     | Emitted when the textarea value is updated. |

## Install

```ts
import { FgTextarea } from 'fadgram-vue'
```

## Basic usage

::: tabs

@tab:active Preview

<fg-textarea label="About you" placeholder="Insert your bio"/>

@tab vue

```vue
<fg-textarea label="About you" placeholder="Insert your bio" />
```

:::
