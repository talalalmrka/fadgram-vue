---
title: Rich Select
icon: list-check
---

<script setup lang="ts">
    import { ref } from 'vue';
    const options = ref([
        {
            label: "Gpt",
            value: 'gpt',
        },
        {
            label:"Copilot",
            value: 'copilot',
        },
        {
            label: "Gemini",
            value: 'gemini'
        },
        {
            label: "Grok",
            value: 'grok',
        },
    ]);

    const aiModel = ref('');
</script>

# Rich Select

## Props

| Prop                | Type                                                                                   | Default              | Description                                                           |
| ------------------- | -------------------------------------------------------------------------------------- | -------------------- | --------------------------------------------------------------------- |
| `id`                | `string`                                                                               | Auto-generated       | Unique identifier for the select element.                             |
| `icon`              | `string`                                                                               | -                    | Icon displayed in the label (`FgLabel`).                              |
| `label`             | `string`                                                                               | -                    | Label text above the select.                                          |
| `info`              | `string`                                                                               | -                    | Additional hint or info below the field.                              |
| `error`             | `string`                                                                               | -                    | Error message shown below the field.                                  |
| `options`           | `Array<{ value: string \| number; label: string; icon?: string; disabled?: boolean }>` | `[]`                 | List of selectable options. Icons and disabled options are supported. |
| `class`             | `string`                                                                               | -                    | Css class name                                                        |
| `size`              | `string`                                                                               | -                    | the input size (xs, sm, lg, xl, xxl)                                  |
| `modelValue`        | `string \| number \| null`                                                             | `null`               | Currently selected value. Supports v-model.                           |
| `placeholder`       | `string`                                                                               | `'Select an option'` | Placeholder text shown when no value is selected.                     |
| `searchable`        | `boolean`                                                                              | `true`               | Whether to enable the search field.                                   |
| `searchPlaceholder` | `string`                                                                               | `'Search...'`        | Placeholder text for the search input.                                |
| `clearable`         | `boolean`                                                                              | `true`               | Whether the selected option can be cleared.                           |
| `noResults`         | `string`                                                                               | `'No results found'` | Message to show when no options match the search term.                |

## Emits

| Event               | Payload Type               | Description                                    |
| ------------------- | -------------------------- | ---------------------------------------------- |
| `update:modelValue` | `string \| number \| null` | Emitted when an option is selected or cleared. |

## Install

```ts
import { FgRichSelect } from 'fadgram-vue'
```

## Basic usage

::: tabs

@tab:active Preview

<fg-rich-select v-model="aiModel" label="AI model" placeholder="Select your model" :options="options"/>

@tab vue

```vue
<fg-rich-select
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

## Size

::: tabs
@tab:active Preview
<fg-rich-select v-for="size in $inputSizes" :key="size" :size="size" v-model="aiModel" :label="size" placeholder="Select your model" :options="options"/>
@tab vue

```vue
<fg-rich-select size="xs" label="xs" placeholder="Select your model" :options="options" />
<fg-rich-select size="sm" label="xs" placeholder="Select your model" :options="options" />
<fg-rich-select size="lg" label="lg" placeholder="Select your model" :options="options" />
<fg-rich-select size="xl" label="xl" placeholder="Select your model" :options="options" />
<fg-rich-select size="xxl" label="xxl" placeholder="Select your model" :options="options" />
```

:::

## Pill

::: tabs
@tab:active Preview
<fg-rich-select v-model="aiModel" label="Pill rich select" class="pill" placeholder="Select your model" :options="options"/>
@tab vue

```vue
<fg-rich-select
  v-model="aiModel"
  label="Pill rich select"
  class="pill"
  placeholder="Select your model"
  :options="options"
/>
```

:::
