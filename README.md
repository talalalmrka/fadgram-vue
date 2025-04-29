# 📦 Fadgram vue

Fadgram Vue is a ready-to-use Vue 3 component library written in TypeScript and styled with Tailwind CSS.

It offers a collection of reusable UI components designed to accelerate frontend development in Vue applications.

---

## 🚀 Installation

Install the library via npm:

```bash
npm i fadgram-vue
```

---

## 🔧 Usage

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

---

## 📋 Documentation

For full component API and usage details, visit:

[https://talalalmrka.github.io/fadgram-vue](https://talalalmrka.github.io/fadgram-vue)

---

## 🧹 Available Components

### FgAccordion

**Props:**

- `mode: string` — (single, multiple) default single
- `multiple: boolean` — default false
- `storageKey: string` — (to store acccordion state in local storage)default fg-accordion
- `persist: boolean` - default true

#### example usage:

```vue
<fg-accordion storageKey="accordion-default" persist>
  <fg-accordion-item>
    <fg-accordion-head> Section 1 </fg-accordion-head>
    <fg-accordion-body> Section 1 content </fg-accordion-body>
  </fg-accordion-item>
  <fg-accordion-item>
    <fg-accordion-head> Section 2 </fg-accordion-head>
    <fg-accordion-body> Section 2 content </fg-accordion-body>
  </fg-accordion-item>
</fg-accordion>
```

#### Multiple:

```vue
<fg-accordion multiple storageKey="faq-multiple" persist> ... </fg-accordion>
```

---

### FgAccordionItem

**Props:**

- `id?: string` — (single, multiple) default single
- `title?: string` — if setted you dont need to add FgAccordionHead it will automatically include it
- `icon?: string` — bootstrap icon name to display it before title like (bi-star, bi-house-fill ...etc)

#### example usage:

```vue
<fg-accordion-item>
    <fg-accordion-head>Item title</fg-accordion-head>
    <fg-accordion-body>item content<fg-accordion-body>
</fg-accordion-item>
```

##### Or

```vue
<fg-accordion-item icon="bi-broadcast" title="Broadcast">
    <fg-accordion-body>item content<fg-accordion-body>
</fg-accordion-item>
```

---

### FgAlert

**Props:**

- `class: string` - (css class names) default null
- `atts:  Object` - of html attributes default: () => ({})
- `type: 'success' | 'error' | 'info' | 'warning'` - default info
- `soft: boolean` - default false
- `outline: boolean` - default false
- `success: boolean` - default false
- `info: boolean` - default false
- `warning: boolean` - default false
- `error: boolean` - default false
- `size: 'xs' | 'sm' | 'lg' | 'xl' | 'xxl'` - default null
- `icon: string` — bootstrap icon name like (bi-star, bi-house-fill ...etc)
- `iconClass: string` — additional css classes for icon
- `content: string`
- `hideIcon: boolean` - set true to hide icon

#### Usage

```vue
<fg-alert type="success" content="Everything is great!" />
```

```vue
<fg-alert success>Everything is great!</fg-alert>
```

---

### FgCheckbox

**Props:**

- `id: string`
- `icon: string`
- `label: string`
- `info: string`
- `error: string`
- `modelValue: boolean`
- `disabled: boolean`

#### Usage

```vue
<fg-checkbox v-model="checked" label="Accept terms" />
```

---

### FgCode

**Props:**

- `language?: string` - default html
- `languageLabel?: string` - default null

```vue
<fg-code language="html">
  {{`
  <div>Hello</div>
  `}}
</fg-code>
```

---

### FgError

**Props:**

- `error: string`

```vue
<fg-error error="This field is required" />
```

---

### FgIcon

**Props:**

- `icon: string` - bootstrap icon name like (bi-star, bi-chevron-down ...etc)

```vue
<fg-icon icon="bi-house-fill" />
```

---

### FgIconPicker

**Props:**

| Prop Name         | Type                      | Default          | Description                                           |
| ----------------- | ------------------------- | ---------------- | ----------------------------------------------------- |
| modelValue        | `string \| null`          | `undefined`      | Selected icon value (v-model) in format "bi-iconname" |
| id                | `string`                  | auto-generated   | Unique ID for the input                               |
| name              | `string`                  | `undefined`      | Input name attribute                                  |
| label             | `string \| null`          | `null`           | Input label text                                      |
| icon              | `string`                  | `undefined`      | Icon name for label decoration                        |
| placeholder       | `string`                  | `undefined`      | Input placeholder text                                |
| error             | `string`                  | `undefined`      | Input error message                                   |
| autofocus         | `boolean`                 | `false`          | Auto-focus input on mount                             |
| autocomplete      | `string`                  | `undefined`      | Input autocomplete attribute                          |
| required          | `boolean`                 | `false`          | HTML required attribute                               |
| disabled          | `boolean`                 | `false`          | Disable the input                                     |
| inputClass        | `string \| null`          | `null`           | Custom CSS classes for the input element              |
| atts              | `Record<string, unknown>` | `undefined`      | Additional input attributes                           |
| info              | `string \| null`          | `null`           | Helper text displayed below input                     |
| containerClass    | `string \| null`          | `null`           | Custom classes for main container                     |
| containerAtts     | `Record<string, unknown>` | `undefined`      | Additional container attributes                       |
| groupClass        | `string \| null`          | `null`           | Custom classes for input group                        |
| groupAtts         | `Record<string, unknown>` | `undefined`      | Additional input group attributes                     |
| dropdownClass     | `string \| null`          | `null`           | Custom classes for dropdown                           |
| dropdownAtts      | `Record<string, unknown>` | `undefined`      | Additional dropdown attributes                        |
| size              | `string \| null`          | `null`           | Size variant (typically 'sm', 'md', 'lg')             |
| icons             | `string[]`                | Bootstrap Icons  | Custom array of icon names                            |
| perPage           | `number`                  | `25`             | Number of icons per page                              |
| noIconsFound      | `string`                  | "No icons found" | Message when no icons match search                    |
| searchPlaceholder | `string`                  | "Search..."      | Placeholder for search input                          |

```vue
<fg-icon-picker v-model="selectedIcon" />
```

---

### FgInfo

**Props:**

- `info: string`

```vue
<fg-info info="Additional info here" />
```

---

### FgInput

**Props:**

- `id: string`
- `icon: string`
- `label: string`
- `info: string`
- `error: string`
- `modelValue: string | number`
- `placeholder: string`
- `disabled: boolean`
- `type: string` - default text
- `startIcon: string` - default: null (icon to show at start of field ex:bi-person-fill)
- `endIcon: string` - default: null (icon to show at end of field ex:bi-eye-fill)

```vue
<fg-input v-model="name" placeholder="Enter your name" />
```

---

### FgLabel

**Props:**

- `icon: string`
- `label: string`
- `error: string | boolean | null`

```vue
<fg-label for="email" text="Email Address" />
```

---

### FgRadio

**Props:**

- `id: string`
- `icon: string`
- `label: string`
- `info: string`
- `error: string`
- `modelValue: string | number`
- `options: Array<{ label: string; value: string }>`

```vue
<fg-radio
  v-model="choice"
  value="1"
  label="Option 1"
  :options="[
    {
      label: 'Option 1',
      value: 1,
    },
    {
      label: 'Option 2',
      value: 2,
    },
  ]"
/>
```

---

### FgRichSelect

**Props:**

- `id: string`
- `icon: string`
- `label: string`
- `info: string`
- `error: string`
- `modelValue: string | number`
- `options: Array<{ label: string; value: string }>`
- `modelValue?: string | number | null`
- `placeholder?: string`
- `searchable?: boolean`
- `searchPlaceholder?: string`
- `clearable?: boolean`
- `noResults?: string`

```vue
<fg-rich-select
  v-model="selected"
  :options="[
    {
      label: 'Option 1',
      value: 1,
    },
    {
      label: 'Option 2',
      value: 2,
    },
  ]"
/>
```

---

### FgSelect

**Props:**

- `id: string`
- `icon: string`
- `label: string`
- `info: string`
- `error: string`
- `modelValue: string | number | null`
- `placeholder?: string`
- `disabled?: boolean`
- `options: Array<{ label: string; value: string }>`

```vue
<fg-select
  v-model="value"
  :options="[
    {
      label: 'Option 1',
      value: 1,
    },
    {
      label: 'Option 2',
      value: 2,
    },
  ]"
/>
```

---

### FgSwitch

**Props:**

- `id: string`
- `icon: string`
- `label: string`
- `info: string`
- `error: string`
- `modelValue: boolean`
- `disabled?: boolean`

```vue
<fg-switch v-model="enabled" />
```

---

### FgTextarea

**Props:**

- `id: string`
- `icon: string`
- `label: string`
- `info: string`
- `error: string`
- `modelValue: boolean`
- `disabled?: boolean`
- `placeholder: string`
- `rows: string | number default 4`

```vue
<fg-textarea v-model="text" placeholder="Write something..." />
```

---

### FgLoader

**Props:**

- `type: LoaderType (default | dotsBounce | dotsFade | dotsMove | dotsRotate | dotsScale) default (default)`
- `size?: null | 'sm' | 'md' | 'lg' | 'xl' default null`

#### Basic usage:

```vue
<fg-loader />
```

#### Type

```vue
<fg-loader type="dotsBounce" />
```

```vue
<fg-loader type="dots-bounce" />
```

```vue
<fg-loader dots-bounce />
```

#### Size

```vue
<fg-loader size="md" />
```

```vue
<fg-loader md />
```

---

## 🛠️ Contributing

We welcome contributions to improve Fadgram Vue. To contribute:

1. Open an issue to discuss the bug or feature.
2. Fork the repo and open a Pull Request with your changes.

---

## 📄 License

This project is licensed under the MIT License.
