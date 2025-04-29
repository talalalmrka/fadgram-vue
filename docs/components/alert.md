<script setup lang="ts">
    const sizes = ['xxs', 'xs', 'sm', 'default', 'lg', 'xl', 'xxl'];
</script>

# Alert

## installation

```ts
import { FgAlert } from 'fadgram-vue'
```

## Props

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
