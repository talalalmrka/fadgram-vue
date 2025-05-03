---
title: Checkbox
icon: check-square
---

<script setup lang="ts">
    import { ref } from 'vue';
    const agree = ref(false);
</script>

# Checkbox

## Props

| Prop             | Type      | Default        | Description                                                               |
| ---------------- | --------- | -------------- | ------------------------------------------------------------------------- |
| `id`             | `string`  | Auto-generated | The unique identifier for the checkbox input.                             |
| `icon`           | `string`  | -              | Optional icon to display with the label.                                  |
| `label`          | `string`  | -              | Text label for the checkbox.                                              |
| `info`           | `string`  | -              | Additional helper text shown below the field.                             |
| `error`          | `string`  | -              | Error message shown below the field.                                      |
| `modelValue`     | `any`     | -              | The current value. Can be a boolean, single value, or array (for groups). |
| `value`          | `any`     | -              | The value to emit when checked (used in single or group mode).            |
| `uncheckedValue` | `any`     | -              | The value to emit when unchecked (used in single mode only).              |
| `disabled`       | `boolean` | `false`        | Whether the checkbox is disabled.                                         |

## Emits

| Event               | Payload Type | Description                                              |
| ------------------- | ------------ | -------------------------------------------------------- |
| `update:modelValue` | `any`        | Emitted with the new value when the checkbox is toggled. |

## Install

```ts
import { FgCheckbox } from 'fadgram-vue'
```

## Basic usage

::: tabs

@tab:active Preview

<fg-checkbox v-model="agree" label="Agree policy"/>
agree: {{ agree }}

@tab vue

```vue
<fg-checkbox v-model="agree" label="Agree policy" />
```

:::
