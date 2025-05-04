---
title: Card
icon: card-heading
---

# Card

## installation

```ts
import { FgCard } from 'fadgram-vue'
```

## Props

| Prop    | Type     | Default | Description                           |
| ------- | -------- | ------- | ------------------------------------- |
| `title` | `string` | -       | The card title to display.            |
| `icon`  | `string` | -       | The icon to display before the title. |

## Basic usage

::: tabs

@tab:active Preview

<fg-card>
    The card content
</fg-card>

@tab vue

```vue
<fg-card>
    The card content
</fg-card>
```

:::

## Header & footer

::: tabs

@tab:active Preview

<fg-card>
    <template #header>
        <div class="card-title">
            Card title
        </div>
    </template>
    The card content
    <template #footer>
        Card footer
    </template>
</fg-card>

@tab vue

```vue
<fg-card>
    <template #header>
        <div class="card-title">
            Card title
        </div>
    </template>
    The card content
    <template #footer>
        Card footer
    </template>
</fg-card>
```

:::

## Title & icon

::: tabs

@tab:active Preview

<fg-card icon="bi-star" title="Card title">
    The card content
</fg-card>

@tab vue

```vue
<fg-card icon="bi-star" title="Card title">
    The card content
</fg-card>
```

:::

::: tip Note
Review [Fadgram Ui](https://talalalmrka.github.io/fadgram-ui-docs/#cards) for more details about card appearance.
:::
