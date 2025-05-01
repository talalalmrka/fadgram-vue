---
title: Switch
icon: toggle-on
---

<script setup lang="ts">
    import { ref } from 'vue';
    const remember = ref(false);
</script>

# Switch (Toggle)

## Props

| Prop             | Type             | Default        | Description                                                            |
| ---------------- | ---------------- | -------------- | ---------------------------------------------------------------------- |
| `id`             | `string`         | Auto-generated | Unique ID for the toggle input.                                        |
| `icon`           | `string \| null` | `null`         | Optional icon to display beside the label.                             |
| `label`          | `string`         | -              | Text label shown beside the toggle.                                    |
| `info`           | `string`         | -              | Optional helper text shown below the toggle.                           |
| `error`          | `string`         | -              | Error message displayed below the toggle.                              |
| `value`          | `any`            | -              | Value to emit when toggle is turned on (used in single or group mode). |
| `uncheckedValue` | `any`            | -              | Value to emit when toggle is turned off (used in single mode).         |
| `modelValue`     | `any`            | -              | The current value (can be boolean, value, or array of values).         |
| `disabled`       | `boolean`        | `false`        | Whether the toggle is disabled.                                        |

## Emits

| Event               | Payload Type | Description                                            |
| ------------------- | ------------ | ------------------------------------------------------ |
| `update:modelValue` | `any`        | Emitted when the toggle is changed with the new value. |

## Install

```ts
import { FgSwitch } from 'fadgram-vue'
```

## Basic usage

::: tabs

@tab:active Preview

<fg-switch v-model="remember" label="Remember Me."/>
remember: {{ remember }}

@tab vue

```vue
<fg-switch v-model="remember" label="Remember Me." />
```

:::
