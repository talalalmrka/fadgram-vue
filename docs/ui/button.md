---
title: Button
icon: square
---

# Button

## installation

```ts
import { FgButton } from 'fadgram-vue'
```

## Props

| Prop     | Type                                                 | Default    | Description                                                                                                                                                                                                                                                           |
| -------- | ---------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type     | `'button' \| 'submit' \| 'reset'`                    | `'button'` | The native button type attribute.                                                                                                                                                                                                                                     |
| color    | `ButtonColor`                                        | —          | Color variant. Options: `primary`, `secondary`, `light`, `dark`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`, `slate`, `gray`, `zinc`, `neutral`, `stone`. |
| icon     | `string`                                             | —          | Icon name to display (requires icon component).                                                                                                                                                                                                                       |
| label    | `string`                                             | —          | Text label for the button.                                                                                                                                                                                                                                            |
| class    | `string`                                             | —          | Custom CSS classes to apply.                                                                                                                                                                                                                                          |
| outline  | `boolean`                                            | `false`    | Whether to use outline style.                                                                                                                                                                                                                                         |
| pill     | `boolean`                                            | `false`    | Whether to use pill-shaped rounded corners.                                                                                                                                                                                                                           |
| gradient | `boolean`                                            | `false`    | Whether to apply gradient background.                                                                                                                                                                                                                                 |
| size     | `'xs' \| 'sm' \| 'default' \| 'lg' \| 'xl' \| 'xxl'` | —          | Direct size specification (overrides individual size props).                                                                                                                                                                                                          |
| xs       | `boolean`                                            | `false`    | Extra small size (alternative to size prop).                                                                                                                                                                                                                          |
| sm       | `boolean`                                            | `false`    | Small size (alternative to size prop).                                                                                                                                                                                                                                |
| lg       | `boolean`                                            | `false`    | Large size (alternative to size prop).                                                                                                                                                                                                                                |
| xl       | `boolean`                                            | `false`    | Extra large size (alternative to size prop).                                                                                                                                                                                                                          |
| xxl      | `boolean`                                            | `false`    | Extra extra large size (alternative to size prop).                                                                                                                                                                                                                    |

## Basic usage

::: tabs

@tab:active Preview

<fg-button @click="console.log('clicked')">Button</fg-button>

@tab vue

```vue
<fg-button>Button</fg-button>
```

:::

## Label & icon

shortness slots

### Label

::: tabs
@tab Preview
<fg-button label="Button"/>
@tab vue

```vue
<fg-button label="Button" />
```

:::

### Icon

::: tabs
@tab Preview
<fg-button icon="bi-person"/>
@tab vue

```vue
<fg-button icon="bi-person" />
```

:::

### label and Icon

::: tabs
@tab Preview
<fg-button icon="bi-person" label="Profile"/>
@tab vue

```vue
<fg-button icon="bi-person" label="Profile" />
```

:::

## Color

::: tabs

@tab:active Preview

<div class="flex flex-wrap gap-4 items-baseline">
    <fg-button v-for="color in $colors" :key="`btn-${color}`" :color="color">{{color}}</fg-button>
</div>
@tab vue

```vue
<template>
  <fg-button color="primary">Primary</fg-button>
  <fg-button color="secondary">Secondary</fg-button>
  <fg-button color="light">Light</fg-button>
  <fg-button color="dark">Dark</fg-button>
  <fg-button color="red">Red</fg-button>
  <fg-button color="orange">Orange</fg-button>
  <fg-button color="amber">Amber</fg-button>
  <fg-button color="yellow">Yellow</fg-button>
  <fg-button color="lime">Lime</fg-button>
  <fg-button color="green">Green</fg-button>
  <fg-button color="emerald">Emerald</fg-button>
  <fg-button color="teal">Teal</fg-button>
  <fg-button color="cyan">Cyan</fg-button>
  <fg-button color="sky">Sky</fg-button>
  <fg-button color="blue">Blue</fg-button>
  <fg-button color="indigo">Indigo</fg-button>
  <fg-button color="violet">Violet</fg-button>
  <fg-button color="purple">Purple</fg-button>
  <fg-button color="fuchsia">Fuchsia</fg-button>
  <fg-button color="pink">Pink</fg-button>
  <fg-button color="rose">Rose</fg-button>
  <fg-button color="slate">Slate</fg-button>
  <fg-button color="gray">Gray</fg-button>
  <fg-button color="zinc">Zinc</fg-button>
  <fg-button color="neutral">Neutral</fg-button>
  <fg-button color="stone">Stone</fg-button>
</template>
```

:::

## Gradient

::: tabs

@tab:active Preview

<div class="flex flex-wrap gap-4 items-baseline">
    <fg-button v-for="color in $colors" :key="`btn-gradient-${color}`" :color="color" gradient>{{color}}</fg-button>
</div>
@tab vue

```vue
<template>
  <fg-button color="primary" gradient>Primary</fg-button>
  <fg-button color="secondary" gradient>Secondary</fg-button>
  <fg-button color="light" gradient>Light</fg-button>
  <fg-button color="dark" gradient>Dark</fg-button>
  <fg-button color="red" gradient>Red</fg-button>
  <fg-button color="orange" gradient>Orange</fg-button>
  <fg-button color="amber" gradient>Amber</fg-button>
  <fg-button color="yellow" gradient>Yellow</fg-button>
  <fg-button color="lime" gradient>Lime</fg-button>
  <fg-button color="green" gradient>Green</fg-button>
  <fg-button color="emerald" gradient>Emerald</fg-button>
  <fg-button color="teal" gradient>Teal</fg-button>
  <fg-button color="cyan" gradient>Cyan</fg-button>
  <fg-button color="sky" gradient>Sky</fg-button>
  <fg-button color="blue" gradient>Blue</fg-button>
  <fg-button color="indigo" gradient>Indigo</fg-button>
  <fg-button color="violet" gradient>Violet</fg-button>
  <fg-button color="purple" gradient>Purple</fg-button>
  <fg-button color="fuchsia" gradient>Fuchsia</fg-button>
  <fg-button color="pink" gradient>Pink</fg-button>
  <fg-button color="rose" gradient>Rose</fg-button>
  <fg-button color="slate" gradient>Slate</fg-button>
  <fg-button color="gray" gradient>Gray</fg-button>
  <fg-button color="zinc" gradient>Zinc</fg-button>
  <fg-button color="neutral" gradient>Neutral</fg-button>
  <fg-button color="stone" gradient>Stone</fg-button>
</template>
```

:::

## Outline

::: tabs

@tab:active Preview

<div class="flex flex-wrap gap-4 items-baseline">
    <fg-button v-for="color in $colors" :key="`btn-outline-${color}`" :color="color" outline>{{color}}</fg-button>
</div>
@tab vue

```vue
<template>
  <fg-button color="primary" outline>Primary</fg-button>
  <fg-button color="secondary" outline>Secondary</fg-button>
  <fg-button color="light" outline>Light</fg-button>
  <fg-button color="dark" outline>Dark</fg-button>
  <fg-button color="red" outline>Red</fg-button>
  <fg-button color="orange" outline>Orange</fg-button>
  <fg-button color="amber" outline>Amber</fg-button>
  <fg-button color="yellow" outline>Yellow</fg-button>
  <fg-button color="lime" outline>Lime</fg-button>
  <fg-button color="green" outline>Green</fg-button>
  <fg-button color="emerald" outline>Emerald</fg-button>
  <fg-button color="teal" outline>Teal</fg-button>
  <fg-button color="cyan" outline>Cyan</fg-button>
  <fg-button color="sky" outline>Sky</fg-button>
  <fg-button color="blue" outline>Blue</fg-button>
  <fg-button color="indigo" outline>Indigo</fg-button>
  <fg-button color="violet" outline>Violet</fg-button>
  <fg-button color="purple" outline>Purple</fg-button>
  <fg-button color="fuchsia" outline>Fuchsia</fg-button>
  <fg-button color="pink" outline>Pink</fg-button>
  <fg-button color="rose" outline>Rose</fg-button>
  <fg-button color="slate" outline>Slate</fg-button>
  <fg-button color="gray" outline>Gray</fg-button>
  <fg-button color="zinc" outline>Zinc</fg-button>
  <fg-button color="neutral" outline>Neutral</fg-button>
  <fg-button color="stone" outline>Stone</fg-button>
</template>
```

:::

## Pill

::: tabs

@tab:active Preview

<div class="flex flex-wrap gap-4 items-baseline">
    <fg-button v-for="color in $colors" :key="`btn-pill-${color}`" :color="color" pill>{{color}}</fg-button>
</div>
@tab vue

```vue
<template>
  <fg-button color="primary" pill>Primary</fg-button>
  <fg-button color="secondary" pill>Secondary</fg-button>
  <fg-button color="light" pill>Light</fg-button>
  <fg-button color="dark" pill>Dark</fg-button>
  <fg-button color="red" pill>Red</fg-button>
  <fg-button color="orange" pill>Orange</fg-button>
  <fg-button color="amber" pill>Amber</fg-button>
  <fg-button color="yellow" pill>Yellow</fg-button>
  <fg-button color="lime" pill>Lime</fg-button>
  <fg-button color="green" pill>Green</fg-button>
  <fg-button color="emerald" pill>Emerald</fg-button>
  <fg-button color="teal" pill>Teal</fg-button>
  <fg-button color="cyan" pill>Cyan</fg-button>
  <fg-button color="sky" pill>Sky</fg-button>
  <fg-button color="blue" pill>Blue</fg-button>
  <fg-button color="indigo" pill>Indigo</fg-button>
  <fg-button color="violet" pill>Violet</fg-button>
  <fg-button color="purple" pill>Purple</fg-button>
  <fg-button color="fuchsia" pill>Fuchsia</fg-button>
  <fg-button color="pink" pill>Pink</fg-button>
  <fg-button color="rose" pill>Rose</fg-button>
  <fg-button color="slate" pill>Slate</fg-button>
  <fg-button color="gray" pill>Gray</fg-button>
  <fg-button color="zinc" pill>Zinc</fg-button>
  <fg-button color="neutral" pill>Neutral</fg-button>
  <fg-button color="stone" pill>Stone</fg-button>
</template>
```

:::

## Merge appearance

### Gradient pill

::: tabs

@tab:active Preview

<div class="flex flex-wrap gap-4 items-baseline">
    <fg-button v-for="color in $colors" :key="`btn-gradient-pill-${color}`" :color="color" gradient pill>{{color}}</fg-button>
</div>
@tab vue

```vue
<template>
  <fg-button color="primary" gradient pill>Primary</fg-button>
  <fg-button color="secondary" gradient pill>Secondary</fg-button>
  <fg-button color="light" gradient pill>Light</fg-button>
  <fg-button color="dark" gradient pill>Dark</fg-button>
  <fg-button color="red" gradient pill>Red</fg-button>
  <fg-button color="orange" gradient pill>Orange</fg-button>
  <fg-button color="amber" gradient pill>Amber</fg-button>
  <fg-button color="yellow" gradient pill>Yellow</fg-button>
  <fg-button color="lime" gradient pill>Lime</fg-button>
  <fg-button color="green" gradient pill>Green</fg-button>
  <fg-button color="emerald" gradient pill>Emerald</fg-button>
  <fg-button color="teal" gradient pill>Teal</fg-button>
  <fg-button color="cyan" gradient pill>Cyan</fg-button>
  <fg-button color="sky" gradient pill>Sky</fg-button>
  <fg-button color="blue" gradient pill>Blue</fg-button>
  <fg-button color="indigo" gradient pill>Indigo</fg-button>
  <fg-button color="violet" gradient pill>Violet</fg-button>
  <fg-button color="purple" gradient pill>Purple</fg-button>
  <fg-button color="fuchsia" gradient pill>Fuchsia</fg-button>
  <fg-button color="pink" gradient pill>Pink</fg-button>
  <fg-button color="rose" gradient pill>Rose</fg-button>
  <fg-button color="slate" gradient pill>Slate</fg-button>
  <fg-button color="gray" gradient pill>Gray</fg-button>
  <fg-button color="zinc" gradient pill>Zinc</fg-button>
  <fg-button color="neutral" gradient pill>Neutral</fg-button>
  <fg-button color="stone" gradient pill>Stone</fg-button>
</template>
```

:::

### Outline pill

::: tabs

@tab:active Preview

<div class="flex flex-wrap gap-4 items-baseline">
    <fg-button v-for="color in $colors" :key="`btn-outline-pill-${color}`" :color="color" outline pill>{{color}}</fg-button>
</div>
@tab vue

```vue
<template>
  <fg-button color="primary" outline pill>Primary</fg-button>
  <fg-button color="secondary" outline pill>Secondary</fg-button>
  <fg-button color="light" outline pill>Light</fg-button>
  <fg-button color="dark" outline pill>Dark</fg-button>
  <fg-button color="red" outline pill>Red</fg-button>
  <fg-button color="orange" outline pill>Orange</fg-button>
  <fg-button color="amber" outline pill>Amber</fg-button>
  <fg-button color="yellow" outline pill>Yellow</fg-button>
  <fg-button color="lime" outline pill>Lime</fg-button>
  <fg-button color="green" outline pill>Green</fg-button>
  <fg-button color="emerald" outline pill>Emerald</fg-button>
  <fg-button color="teal" outline pill>Teal</fg-button>
  <fg-button color="cyan" outline pill>Cyan</fg-button>
  <fg-button color="sky" outline pill>Sky</fg-button>
  <fg-button color="blue" outline pill>Blue</fg-button>
  <fg-button color="indigo" outline pill>Indigo</fg-button>
  <fg-button color="violet" outline pill>Violet</fg-button>
  <fg-button color="purple" outline pill>Purple</fg-button>
  <fg-button color="fuchsia" outline pill>Fuchsia</fg-button>
  <fg-button color="pink" outline pill>Pink</fg-button>
  <fg-button color="rose" outline pill>Rose</fg-button>
  <fg-button color="slate" outline pill>Slate</fg-button>
  <fg-button color="gray" outline pill>Gray</fg-button>
  <fg-button color="zinc" outline pill>Zinc</fg-button>
  <fg-button color="neutral" outline pill>Neutral</fg-button>
  <fg-button color="stone" outline pill>Stone</fg-button>
</template>
```

:::

## Size

::: tabs

@tab:active Preview

<div class="flex flex-wrap gap-4 items-baseline">
    <fg-button xs>xs</fg-button>
    <fg-button sm>sm</fg-button>
    <fg-button>default</fg-button>
    <fg-button lg>lg</fg-button>
    <fg-button xl>xl</fg-button>
    <fg-button xxl>xxl</fg-button>
</div>

@tab vue

```vue
<template>
  <fg-button xs>xs</fg-button>
  <fg-button sm>sm</fg-button>
  <fg-button>default</fg-button>
  <fg-button lg>lg</fg-button>
  <fg-button xl>xl</fg-button>
  <fg-button xxl>xxl</fg-button>
</template>
```

:::
