<script setup lang="ts">
    import { ref } from 'vue';
    const icon = ref('');
</script>

# Icon Picker

## Props

| Prop                | Type                      | Default            | Description                                    |
| ------------------- | ------------------------- | ------------------ | ---------------------------------------------- |
| `id`                | `string`                  | Auto-generated     | Unique ID for the input element.               |
| `name`              | `string`                  | -                  | Name attribute for the input.                  |
| `modelValue`        | `string \| null`          | `null`             | Currently selected icon (prefixed with `bi-`). |
| `icon`              | `string`                  | -                  | Icon to display with the label.                |
| `label`             | `string \| null`          | -                  | Field label text.                              |
| `placeholder`       | `string`                  | -                  | Input placeholder text.                        |
| `autofocus`         | `boolean`                 | `false`            | Whether to focus the input on mount.           |
| `autocomplete`      | `string`                  | -                  | Autocomplete attribute for the input.          |
| `required`          | `boolean`                 | `false`            | Whether the input is required.                 |
| `disabled`          | `boolean`                 | `false`            | Whether the input is disabled.                 |
| `inputClass`        | `string \| null`          | -                  | Additional CSS classes for the input.          |
| `atts`              | `Record<string, unknown>` | `{}`               | Extra HTML attributes for the input.           |
| `info`              | `string`                  | -                  | Info/help text shown below the field.          |
| `containerClass`    | `string \| null`          | -                  | Additional classes for the dropdown container. |
| `containerAtts`     | `Record<string, unknown>` | `{}`               | Extra HTML attributes for the container.       |
| `groupClass`        | `string \| null`          | -                  | Additional classes for the input group.        |
| `groupAtts`         | `Record<string, unknown>` | `{}`               | Extra HTML attributes for the input group.     |
| `dropdownClass`     | `string \| null`          | -                  | Additional classes for the dropdown.           |
| `dropdownAtts`      | `Record<string, unknown>` | `{}`               | Extra HTML attributes for the dropdown.        |
| `size`              | `string \| null`          | -                  | Input size (used in styling).                  |
| `icons`             | `string[]`                | All `bi` icons     | Optional icon list to filter/search from.      |
| `perPage`           | `number`                  | `25`               | Number of icons per page.                      |
| `noIconsFound`      | `string`                  | `'No icons found'` | Message to show when no icons match search.    |
| `searchPlaceholder` | `string`                  | `'Search...'`      | Placeholder text for search input.             |
| `error`             | `string`                  | -                  | Error message shown below the input.           |

## Emits

| Event               | Payload Type | Description                                    |
| ------------------- | ------------ | ---------------------------------------------- |
| `update:modelValue` | `string`     | Emitted when an icon is selected or cleared.   |
| `change`            | `string`     | Emitted immediately when `modelValue` changes. |

## Install

```ts
import { FgIconPicker } from 'fadgram-vue'
```

## Basic usage

::: tabs

@tab:active Preview

<fg-icon-picker v-model="icon" label="Select icon"/>
Selected icon: {{ icon }}

@tab vue

```vue
<fg-icon-picker v-model="icon" label="Select icon" />
```

:::
