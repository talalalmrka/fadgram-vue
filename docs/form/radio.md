---
title: Radio
icon: circle
---

<script setup lang="ts">
    import { ref } from 'vue';
    const country = ref('');
    const options = ref([
      {
        label: 'United states',
        value: 'us',
      },
      {
        label: 'United kingdom',
        value: 'uk',
      },
      {
        label: 'Germany',
        value: 'germany',
      }
    ]);
</script>

# Radio

## Props

| Prop         | Type                            | Default        | Description                                                       |
| ------------ | ------------------------------- | -------------- | ----------------------------------------------------------------- |
| `id`         | `string`                        | Auto-generated | Unique base ID used for each radio input.                         |
| `icon`       | `string \| null`                | `null`         | Optional icon displayed with the fieldset label.                  |
| `label`      | `string`                        | -              | Main label for the group of radio options.                        |
| `info`       | `string`                        | -              | Optional helper text shown below the radio group.                 |
| `error`      | `string`                        | -              | Error message shown below the radio group.                        |
| `options`    | `Option[]`                      | `[]`           | List of selectable options with `{ value, label, disabled? }`.    |
| `modelValue` | `string \| number \| undefined` | `null`         | The current selected value (must match one of the option values). |

## Emits

| Event               | Payload Type       | Description                            |
| ------------------- | ------------------ | -------------------------------------- |
| `update:modelValue` | `string \| number` | Emitted when a new option is selected. |

## Install

```ts
import { FgRadio } from 'fadgram-vue'
```

## Basic usage

::: tabs

@tab:active Preview

<fg-radio v-model="country" label="Select country" :options="options"/>
Selected country: {{ country }}

@tab vue

```vue
<fg-radio
  v-model="country"
  label="Select country"
  :options="[
    {
      label: 'United states',
      value: 'us',
    },
    {
      label: 'United kingdom',
      value: 'uk',
    },
    {
      label: 'Germany',
      value: 'germany',
    },
  ]"
/>
```

:::
