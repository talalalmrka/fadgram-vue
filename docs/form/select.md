---
title: Select
icon: list
---

<script setup lang="ts">
    import { ref } from 'vue';
    const aiModel = ref('');
    const options = ref([
        {
            label: 'Gpt',
            value: 'gpt',
        },
        {
            label:'Copilot',
            value: 'copilot',
        },
        {
            label: 'Gemini',
            value: 'gemini'
        },
        {
            label: 'Grok',
            value: 'grok',
        },
    ]);

    
</script>

# Select

## Props

| Prop          | Type                                                | Default        | Description                                                    |
| ------------- | --------------------------------------------------- | -------------- | -------------------------------------------------------------- |
| `id`          | `string`                                            | Auto-generated | Unique identifier for the select element.                      |
| `icon`        | `string`                                            | -              | Icon to display in the label (`FgLabel`).                      |
| `label`       | `string`                                            | -              | Label text displayed above the select field.                   |
| `info`        | `string`                                            | -              | Additional hint or info displayed below the select (`FgInfo`). |
| `error`       | `string`                                            | -              | Error message to show below the select (`FgError`).            |
| `options`     | `Array<{ value: string \| number; label: string }>` | `[]`           | List of selectable options with value and label fields.        |
| `modelValue`  | `string \| number \| null`                          | `null`         | Bound value of the select input. Supports v-model.             |
| `placeholder` | `string`                                            | -              | Placeholder text shown as an initial unselectable option.      |
| `disabled`    | `boolean`                                           | `false`        | Disables the entire select input if `true`.                    |

## Emits

| Event               | Payload Type               | Description                                 |
| ------------------- | -------------------------- | ------------------------------------------- |
| `update:modelValue` | `string \| number \| null` | Emitted when the selected value is updated. |

## Install

```ts
import { FgSelect } from 'fadgram-vue'
```

## Basic usage

::: tabs

@tab:active Preview

<fg-select v-model="aiModel" label="AI model" placeholder="Select your model" :options="options"/>

@tab vue

```vue
<fg-select
  v-model="aiModel"
  label="AI model"
  placeholder="Select your model"
  :options="[
    {
      label: 'Gpt',
      value: 'gpt',
    },
    {
      label: 'Copilot',
      value: 'copilot',
    },
    {
      label: 'Gemini',
      value: 'gemini',
    },
    {
      label: 'Grok',
      value: 'grok',
    },
  ]"
/>
```

:::
