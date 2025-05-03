---
title: Label
icon: tag
---

# Label

## Props

| Prop    | Type                        | Default |
| ------- | --------------------------- | ------- |
| `icon`  | `string`                    | `null`  |
| `label` | `string`                    | `null`  |
| `error` | `string \| boolean \| null` | `null`  |

## Install

```ts
import { FgLabel } from 'fadgram-vue'
```

## Basic usage

::: tabs

@tab:active Preview

<fg-label label="Form label"/>

@tab vue

```vue
<fg-label label="Form label" />
```

:::

## Label with icon

::: tabs

@tab:active Preview

<fg-label icon="bi-person-fill" label="Username"/>

@tab vue

```vue
<fg-label icon="bi-person-fill" label="Username" />
```

:::

## Label error

::: tabs

@tab:active Preview

<fg-label label="Error label" :error="true"/>

@tab vue

```vue
<fg-label label="Error label" :error="true" />
```

:::
