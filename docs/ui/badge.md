---
title: Badge
icon: tag
---

# Badge

## installation

```ts
import { FgBadge } from 'fadgram-vue'
```

## Props

| Prop     | Type                                                 | Default | Description                                                                                                                                                                                                                                                           |
| -------- | ---------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color    | `BadgeColor`                                         | —       | Color variant. Options: `primary`, `secondary`, `light`, `dark`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`, `slate`, `gray`, `zinc`, `neutral`, `stone`. |
| icon     | `string`                                             | —       | Icon name to display (requires icon component).                                                                                                                                                                                                                       |
| label    | `string`                                             | —       | Text label for the Badge.                                                                                                                                                                                                                                             |
| class    | `string`                                             | —       | Custom CSS classes to apply.                                                                                                                                                                                                                                          |
| outline  | `boolean`                                            | `false` | Whether to use outline style.                                                                                                                                                                                                                                         |
| pill     | `boolean`                                            | `false` | Whether to use pill-shaped rounded corners.                                                                                                                                                                                                                           |
| gradient | `boolean`                                            | `false` | Whether to apply gradient background.                                                                                                                                                                                                                                 |
| size     | `'xs' \| 'sm' \| 'default' \| 'lg' \| 'xl' \| 'xxl'` | —       | Direct size specification (overrides individual size props).                                                                                                                                                                                                          |
| xs       | `boolean`                                            | `false` | Extra small size (alternative to size prop).                                                                                                                                                                                                                          |
| sm       | `boolean`                                            | `false` | Small size (alternative to size prop).                                                                                                                                                                                                                                |
| lg       | `boolean`                                            | `false` | Large size (alternative to size prop).                                                                                                                                                                                                                                |
| xl       | `boolean`                                            | `false` | Extra large size (alternative to size prop).                                                                                                                                                                                                                          |
| xxl      | `boolean`                                            | `false` | Extra extra large size (alternative to size prop).                                                                                                                                                                                                                    |

## Basic usage

::: tabs

@tab:active Preview

<fg-badge>Badge</fg-badge>

@tab vue

```vue
<fg-badge>Badge</fg-badge>
```

:::

## Label & icon

shortness slots

### Label

::: tabs
@tab Preview
<fg-badge label="Badge"/>
@tab vue

```vue
<fg-badge label="Badge" />
```

:::

### Icon

::: tabs
@tab Preview
<fg-badge icon="bi-person"/>
@tab vue

```vue
<fg-badge icon="bi-person" />
```

:::

### label and Icon

::: tabs
@tab Preview
<fg-badge icon="bi-person" label="Profile"/>
@tab vue

```vue
<fg-badge icon="bi-person" label="Profile" />
```

:::

## Color

::: tabs

@tab:active Preview

<div class="flex flex-wrap gap-4 items-baseline">
    <fg-badge v-for="color in $colors" :key="`badge-${color}`" :color="color">{{color}}</fg-badge>
</div>
@tab vue

```vue
<template>
  <fg-badge color="primary">Primary</fg-badge>
  <fg-badge color="secondary">Secondary</fg-badge>
  <fg-badge color="light">Light</fg-badge>
  <fg-badge color="dark">Dark</fg-badge>
  <fg-badge color="red">Red</fg-badge>
  <fg-badge color="orange">Orange</fg-badge>
  <fg-badge color="amber">Amber</fg-badge>
  <fg-badge color="yellow">Yellow</fg-badge>
  <fg-badge color="lime">Lime</fg-badge>
  <fg-badge color="green">Green</fg-badge>
  <fg-badge color="emerald">Emerald</fg-badge>
  <fg-badge color="teal">Teal</fg-badge>
  <fg-badge color="cyan">Cyan</fg-badge>
  <fg-badge color="sky">Sky</fg-badge>
  <fg-badge color="blue">Blue</fg-badge>
  <fg-badge color="indigo">Indigo</fg-badge>
  <fg-badge color="violet">Violet</fg-badge>
  <fg-badge color="purple">Purple</fg-badge>
  <fg-badge color="fuchsia">Fuchsia</fg-badge>
  <fg-badge color="pink">Pink</fg-badge>
  <fg-badge color="rose">Rose</fg-badge>
  <fg-badge color="slate">Slate</fg-badge>
  <fg-badge color="gray">Gray</fg-badge>
  <fg-badge color="zinc">Zinc</fg-badge>
  <fg-badge color="neutral">Neutral</fg-badge>
  <fg-badge color="stone">Stone</fg-badge>
</template>
```

:::

## Outline

::: tabs

@tab:active Preview

<div class="flex flex-wrap gap-4 items-baseline">
    <fg-badge v-for="color in $colors" :key="`badge-outline-${color}`" :color="color" outline>{{color}}</fg-badge>
</div>
@tab vue

```vue
<template>
  <fg-badge color="primary" outline>Primary</fg-badge>
  <fg-badge color="secondary" outline>Secondary</fg-badge>
  <fg-badge color="light" outline>Light</fg-badge>
  <fg-badge color="dark" outline>Dark</fg-badge>
  <fg-badge color="red" outline>Red</fg-badge>
  <fg-badge color="orange" outline>Orange</fg-badge>
  <fg-badge color="amber" outline>Amber</fg-badge>
  <fg-badge color="yellow" outline>Yellow</fg-badge>
  <fg-badge color="lime" outline>Lime</fg-badge>
  <fg-badge color="green" outline>Green</fg-badge>
  <fg-badge color="emerald" outline>Emerald</fg-badge>
  <fg-badge color="teal" outline>Teal</fg-badge>
  <fg-badge color="cyan" outline>Cyan</fg-badge>
  <fg-badge color="sky" outline>Sky</fg-badge>
  <fg-badge color="blue" outline>Blue</fg-badge>
  <fg-badge color="indigo" outline>Indigo</fg-badge>
  <fg-badge color="violet" outline>Violet</fg-badge>
  <fg-badge color="purple" outline>Purple</fg-badge>
  <fg-badge color="fuchsia" outline>Fuchsia</fg-badge>
  <fg-badge color="pink" outline>Pink</fg-badge>
  <fg-badge color="rose" outline>Rose</fg-badge>
  <fg-badge color="slate" outline>Slate</fg-badge>
  <fg-badge color="gray" outline>Gray</fg-badge>
  <fg-badge color="zinc" outline>Zinc</fg-badge>
  <fg-badge color="neutral" outline>Neutral</fg-badge>
  <fg-badge color="stone" outline>Stone</fg-badge>
</template>
```

:::

## Pill

::: tabs

@tab:active Preview

<div class="flex flex-wrap gap-4 items-baseline">
    <fg-badge v-for="color in $colors" :key="`badge-pill-${color}`" :color="color" pill>{{color}}</fg-badge>
</div>
@tab vue

```vue
<template>
  <fg-badge color="primary" pill>Primary</fg-badge>
  <fg-badge color="secondary" pill>Secondary</fg-badge>
  <fg-badge color="light" pill>Light</fg-badge>
  <fg-badge color="dark" pill>Dark</fg-badge>
  <fg-badge color="red" pill>Red</fg-badge>
  <fg-badge color="orange" pill>Orange</fg-badge>
  <fg-badge color="amber" pill>Amber</fg-badge>
  <fg-badge color="yellow" pill>Yellow</fg-badge>
  <fg-badge color="lime" pill>Lime</fg-badge>
  <fg-badge color="green" pill>Green</fg-badge>
  <fg-badge color="emerald" pill>Emerald</fg-badge>
  <fg-badge color="teal" pill>Teal</fg-badge>
  <fg-badge color="cyan" pill>Cyan</fg-badge>
  <fg-badge color="sky" pill>Sky</fg-badge>
  <fg-badge color="blue" pill>Blue</fg-badge>
  <fg-badge color="indigo" pill>Indigo</fg-badge>
  <fg-badge color="violet" pill>Violet</fg-badge>
  <fg-badge color="purple" pill>Purple</fg-badge>
  <fg-badge color="fuchsia" pill>Fuchsia</fg-badge>
  <fg-badge color="pink" pill>Pink</fg-badge>
  <fg-badge color="rose" pill>Rose</fg-badge>
  <fg-badge color="slate" pill>Slate</fg-badge>
  <fg-badge color="gray" pill>Gray</fg-badge>
  <fg-badge color="zinc" pill>Zinc</fg-badge>
  <fg-badge color="neutral" pill>Neutral</fg-badge>
  <fg-badge color="stone" pill>Stone</fg-badge>
</template>
```

:::

## Merge appearance

### Outline pill

::: tabs

@tab:active Preview

<div class="flex flex-wrap gap-4 items-baseline">
    <fg-badge v-for="color in $colors" :key="`badge-outline-pill-${color}`" :color="color" outline pill>{{color}}</fg-badge>
</div>
@tab vue

```vue
<template>
  <fg-badge color="primary" outline pill>Primary</fg-badge>
  <fg-badge color="secondary" outline pill>Secondary</fg-badge>
  <fg-badge color="light" outline pill>Light</fg-badge>
  <fg-badge color="dark" outline pill>Dark</fg-badge>
  <fg-badge color="red" outline pill>Red</fg-badge>
  <fg-badge color="orange" outline pill>Orange</fg-badge>
  <fg-badge color="amber" outline pill>Amber</fg-badge>
  <fg-badge color="yellow" outline pill>Yellow</fg-badge>
  <fg-badge color="lime" outline pill>Lime</fg-badge>
  <fg-badge color="green" outline pill>Green</fg-badge>
  <fg-badge color="emerald" outline pill>Emerald</fg-badge>
  <fg-badge color="teal" outline pill>Teal</fg-badge>
  <fg-badge color="cyan" outline pill>Cyan</fg-badge>
  <fg-badge color="sky" outline pill>Sky</fg-badge>
  <fg-badge color="blue" outline pill>Blue</fg-badge>
  <fg-badge color="indigo" outline pill>Indigo</fg-badge>
  <fg-badge color="violet" outline pill>Violet</fg-badge>
  <fg-badge color="purple" outline pill>Purple</fg-badge>
  <fg-badge color="fuchsia" outline pill>Fuchsia</fg-badge>
  <fg-badge color="pink" outline pill>Pink</fg-badge>
  <fg-badge color="rose" outline pill>Rose</fg-badge>
  <fg-badge color="slate" outline pill>Slate</fg-badge>
  <fg-badge color="gray" outline pill>Gray</fg-badge>
  <fg-badge color="zinc" outline pill>Zinc</fg-badge>
  <fg-badge color="neutral" outline pill>Neutral</fg-badge>
  <fg-badge color="stone" outline pill>Stone</fg-badge>
</template>
```

:::

## Size

::: tabs

@tab:active Preview

<div class="flex flex-wrap gap-4 items-baseline">
    <fg-badge xs>xs</fg-badge>
    <fg-badge sm>sm</fg-badge>
    <fg-badge>default</fg-badge>
    <fg-badge lg>lg</fg-badge>
    <fg-badge xl>xl</fg-badge>
    <fg-badge xxl>xxl</fg-badge>
</div>

@tab vue

```vue
<template>
  <fg-badge xs>xs</fg-badge>
  <fg-badge sm>sm</fg-badge>
  <fg-badge>default</fg-badge>
  <fg-badge lg>lg</fg-badge>
  <fg-badge xl>xl</fg-badge>
  <fg-badge xxl>xxl</fg-badge>
</template>
```

:::
