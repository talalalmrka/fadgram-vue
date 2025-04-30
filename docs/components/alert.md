<script setup lang="ts">
    const sizes = ['xxs', 'xs', 'sm', 'default', 'lg', 'xl', 'xxl'];
</script>

# Alert

## installation

```ts
import { FgAlert } from 'fadgram-vue'
```

## Props

| Prop      | Type               | Required | Default  | Description                                                      |
| --------- | ------------------ | -------- | -------- | ---------------------------------------------------------------- |
| class     | string             | No       | `null`   | Additional CSS classes for the alert container.                  |
| atts      | object             | No       | `{}`     | Extra HTML attributes to bind to the root element.               |
| type      | AlertType (string) | No       | `'info'` | Alert type (e.g., `info`, `success`, `error`, etc.).             |
| soft      | boolean            | No       | `false`  | Applies a soft background style.                                 |
| outline   | boolean            | No       | `false`  | Applies an outlined border style.                                |
| success   | boolean            | No       | `false`  | Shortcut to set `type` to `success`. Overrides `type` prop.      |
| info      | boolean            | No       | `false`  | Shortcut to set `type` to `info`. Overrides `type` prop.         |
| warning   | boolean            | No       | `false`  | Shortcut to set `type` to `warning`. Overrides `type` prop.      |
| error     | boolean            | No       | `false`  | Shortcut to set `type` to `error`. Overrides `type` prop.        |
| size      | string             | No       | `null`   | Optional size class (e.g., `text-sm`, `text-lg`, etc.).          |
| icon      | string             | No       | `null`   | Custom icon class name (overrides the default type-based icon).  |
| iconClass | string             | No       | `null`   | Additional classes to apply to the icon.                         |
| content   | string             | No       | `null`   | Content shown when no slot is used. Rendered using `v-html`.     |
| hideIcon  | boolean            | No       | `false`  | If `true`, no icon is shown, even if `type` or icon is provided. |

## Basic usage

::: tabs

@tab:active Preview

<fg-alert content="This is alert example"/>

@tab vue

```vue
<fg-alert content="This is alert example" />
```

:::

## Types

::: tabs

@tab:active Preview

<div class="space-y-2">
<fg-alert type="success" content="This is alert success"/>
<fg-alert type="info" content="This is alert info"/>
<fg-alert type="warning" content="This is alert warning"/>
<fg-alert type="error" content="This is alert error"/>
</div>

@tab vue

```vue
<fg-alert type="success" content="This is alert success" />
<fg-alert type="info" content="This is alert info" />
<fg-alert type="warning" content="This is alert warning" />
<fg-alert type="error" content="This is alert error" />
```

:::

## Variants

::: tabs

@tab:active Preview

<div class="space-y-2">

### Default (info)

<fg-alert content="This is alert default"/>
<fg-alert soft content="This is alert soft"/>
<fg-alert outline content="This is alert outline"/>

### Success

<fg-alert type="success" content="This is alert default"/>
<fg-alert type="success" soft content="This is alert soft"/>
<fg-alert type="success" outline content="This is alert outline"/>

### Warning

<fg-alert type="warning" content="This is alert default"/>
<fg-alert type="warning" soft content="This is alert soft"/>
<fg-alert type="warning" outline content="This is alert outline"/>

### Error

<fg-alert type="error" content="This is alert default"/>
<fg-alert type="error" soft content="This is alert soft"/>
<fg-alert type="error" outline content="This is alert outline"/>
</div>

@tab vue

```vue
<fg-alert content="This is alert default" />
<fg-alert soft content="This is alert soft" />
<fg-alert outline content="This is alert outline" />

<fg-alert type="success" content="This is alert default" />
<fg-alert type="success" soft content="This is alert soft" />
<fg-alert type="success" outline content="This is alert outline" />

<fg-alert type="warning" content="This is alert default" />
<fg-alert type="warning" soft content="This is alert soft" />
<fg-alert type="warning" outline content="This is alert outline" />

<fg-alert type="error" content="This is alert default" />
<fg-alert type="error" soft content="This is alert soft" />
<fg-alert type="error" outline content="This is alert outline" />
```

:::

## Sizes

::: tabs

@tab:active Preview

<div class="space-y-2">
<fg-alert v-for="size in sizes" :size="size" :key="size" :content="`This is alert size ${size}`"/>
</div>

@tab vue

```vue
<fg-alert size="xxs" content="This is alert size xxs" />
<fg-alert size="xs" content="This is alert size xs" />
<fg-alert size="sm" content="This is alert size sm" />
<fg-alert content="This is alert size default" />
<fg-alert size="lg" content="This is alert size lg" />
<fg-alert size="xl" content="This is alert size xl" />
<fg-alert size="xxl" content="This is alert size xxl" />
```

:::
