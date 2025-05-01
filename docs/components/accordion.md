---
title: Accordion
icon: arrows-collapse
prev: ../guide/installation.md
---

# Accordion

## Installation

```ts
import { FgAccordion, FgAccordionItem, FgAccordionHead, FgAccordionBody } from 'fadgram-vue'
```

## Props

| Prop       | Type                 | Default        | Description                                                  |
| ---------- | -------------------- | -------------- | ------------------------------------------------------------ |
| mode       | `single \| multiple` | `single`       | Controls open behavior: one or many items can be open.       |
| multiple   | `boolean`            | `false`        | Alternative to `mode` if `true`, forces `multiple` mode.     |
| storageKey | `string`             | `fg-accordion` | Key used in `localStorage` for persisting open state.        |
| persist    | `boolean`            | `true`         | If `true`, open state is saved/restored from `localStorage`. |

## Available components

- `FgAccordion`
- `FgAccordionItem`
- `FgAccordionHead`
- `FgAccordionBody`

## Basic Example

::: tabs

@tab:active Preview

<fg-accordion>
  <fg-accordion-item>
    <fg-accordion-head>
    Broadcast
    </fg-accordion-head>
    <fg-accordion-body>
        Broadcasting allows you to share live updates with your audience in real-time.
        Engage with your viewers through interactive and dynamic content delivery.
    </fg-accordion-body>
  </fg-accordion-item>
  <fg-accordion-item>
    <fg-accordion-head>
        Coding
    </fg-accordion-head>
    <fg-accordion-body>
        Coding is the process of creating instructions for computers using programming languages. It enables the development of software, websites, and applications that power modern technology.
        Explore the world of coding to unlock endless possibilities and bring your ideas to life.
    </fg-accordion-body>
  </fg-accordion-item>
  <fg-accordion-item>
    <fg-accordion-head>
        Livestream
    </fg-accordion-head>
    <fg-accordion-body>
        Livestreaming is a powerful way to connect with your audience in real-time, enabling interactive and engaging experiences.
        Share your moments, events, or tutorials live and build a stronger connection with your viewers.
    </fg-accordion-body>
  </fg-accordion-item>
</fg-accordion>

@tab vue

```vue
<fg-accordion>
  <fg-accordion-item>
    <fg-accordion-head> Broadcast </fg-accordion-head>
    <fg-accordion-body>
      Broadcasting allows you to share live updates with your audience in real-time. Engage with
      your viewers through interactive and dynamic content delivery.
    </fg-accordion-body>
  </fg-accordion-item>
  <fg-accordion-item>
    <fg-accordion-head> Coding </fg-accordion-head>
    <fg-accordion-body>
      Coding is the process of creating instructions for computers using programming languages. It
      enables the development of software, websites, and applications that power modern technology.
      Explore the world of coding to unlock endless possibilities and bring your ideas to life.
    </fg-accordion-body>
  </fg-accordion-item>
  <fg-accordion-item>
    <fg-accordion-head> Livestream </fg-accordion-head>
    <fg-accordion-body>
      Livestreaming is a powerful way to connect with your audience in real-time, enabling
      interactive and engaging experiences. Share your moments, events, or tutorials live and build
      a stronger connection with your viewers.
    </fg-accordion-body>
  </fg-accordion-item>
</fg-accordion>
```

:::

## Multiple

::: tabs

@tab:active Preview

<fg-accordion multiple>
  <fg-accordion-item>
    <fg-accordion-head>
    Broadcast
    </fg-accordion-head>
    <fg-accordion-body>
        Broadcasting allows you to share live updates with your audience in real-time.
        Engage with your viewers through interactive and dynamic content delivery.
    </fg-accordion-body>
  </fg-accordion-item>
  <fg-accordion-item>
    <fg-accordion-head>
        Coding
    </fg-accordion-head>
    <fg-accordion-body>
        Coding is the process of creating instructions for computers using programming languages. It enables the development of software, websites, and applications that power modern technology.
        Explore the world of coding to unlock endless possibilities and bring your ideas to life.
    </fg-accordion-body>
  </fg-accordion-item>
  <fg-accordion-item>
    <fg-accordion-head>
        Livestream
    </fg-accordion-head>
    <fg-accordion-body>
        Livestreaming is a powerful way to connect with your audience in real-time, enabling interactive and engaging experiences.
        Share your moments, events, or tutorials live and build a stronger connection with your viewers.
    </fg-accordion-body>
  </fg-accordion-item>
</fg-accordion>

@tab vue

```vue
<fg-accordion>
  <fg-accordion-item>
    <fg-accordion-head> Broadcast </fg-accordion-head>
    <fg-accordion-body>
      Broadcasting allows you to share live updates with your audience in real-time. Engage with
      your viewers through interactive and dynamic content delivery.
    </fg-accordion-body>
  </fg-accordion-item>
  <fg-accordion-item>
    <fg-accordion-head> Coding </fg-accordion-head>
    <fg-accordion-body>
      Coding is the process of creating instructions for computers using programming languages. It
      enables the development of software, websites, and applications that power modern technology.
      Explore the world of coding to unlock endless possibilities and bring your ideas to life.
    </fg-accordion-body>
  </fg-accordion-item>
  <fg-accordion-item>
    <fg-accordion-head> Livestream </fg-accordion-head>
    <fg-accordion-body>
      Livestreaming is a powerful way to connect with your audience in real-time, enabling
      interactive and engaging experiences. Share your moments, events, or tutorials live and build
      a stronger connection with your viewers.
    </fg-accordion-body>
  </fg-accordion-item>
</fg-accordion>
```

:::

## Persist

::: tip
This accordion will remember the opened items using `storageKey` to see the feature open an item and refresh the page
:::

::: tabs

@tab:active Preview

<fg-accordion storageKey="accordion-persist" persist>
  <fg-accordion-item>
    <fg-accordion-head>
    Broadcast
    </fg-accordion-head>
    <fg-accordion-body>
        Broadcasting allows you to share live updates with your audience in real-time.
        Engage with your viewers through interactive and dynamic content delivery.
    </fg-accordion-body>
  </fg-accordion-item>
  <fg-accordion-item>
    <fg-accordion-head>
        Coding
    </fg-accordion-head>
    <fg-accordion-body>
        Coding is the process of creating instructions for computers using programming languages. It enables the development of software, websites, and applications that power modern technology.
        Explore the world of coding to unlock endless possibilities and bring your ideas to life.
    </fg-accordion-body>
  </fg-accordion-item>
  <fg-accordion-item>
    <fg-accordion-head>
        Livestream
    </fg-accordion-head>
    <fg-accordion-body>
        Livestreaming is a powerful way to connect with your audience in real-time, enabling interactive and engaging experiences.
        Share your moments, events, or tutorials live and build a stronger connection with your viewers.
    </fg-accordion-body>
  </fg-accordion-item>
</fg-accordion>

@tab vue

```vue
<fg-accordion storageKey="accordion-persist" persist>
  <fg-accordion-item>
    <fg-accordion-head> Broadcast </fg-accordion-head>
    <fg-accordion-body>
      Broadcasting allows you to share live updates with your audience in real-time. Engage with
      your viewers through interactive and dynamic content delivery.
    </fg-accordion-body>
  </fg-accordion-item>
  <fg-accordion-item>
    <fg-accordion-head> Coding </fg-accordion-head>
    <fg-accordion-body>
      Coding is the process of creating instructions for computers using programming languages. It
      enables the development of software, websites, and applications that power modern technology.
      Explore the world of coding to unlock endless possibilities and bring your ideas to life.
    </fg-accordion-body>
  </fg-accordion-item>
  <fg-accordion-item>
    <fg-accordion-head> Livestream </fg-accordion-head>
    <fg-accordion-body>
      Livestreaming is a powerful way to connect with your audience in real-time, enabling
      interactive and engaging experiences. Share your moments, events, or tutorials live and build
      a stronger connection with your viewers.
    </fg-accordion-body>
  </fg-accordion-item>
</fg-accordion>
```

:::

## Accordion Item

### Props

| Prop  | Type   | Required | Default        | Description                                  |
| ----- | ------ | -------- | -------------- | -------------------------------------------- |
| id    | string | No       | auto-generated | Unique ID for the accordion item.            |
| title | string | No       | `undefined`    | Title text shown in the accordion head.      |
| icon  | string | No       | `undefined`    | Optional icon name to show beside the title. |

### Shortness accordion item head

::: tip
you can add the title and title icon directly to the accordion item and it will create accordion head automatically
:::

### Example

::: tabs

@tab:active Preview

<fg-accordion>
  <fg-accordion-item icon="bi-broadcast" title="Broadcast">
    <fg-accordion-body>
        Broadcasting allows you to share live updates with your audience in real-time.
        Engage with your viewers through interactive and dynamic content delivery.
    </fg-accordion-body>
  </fg-accordion-item>
  <fg-accordion-item icon="bi-code" title="Coding">
    <fg-accordion-body>
        Coding is the process of creating instructions for computers using programming languages. It enables the development of software, websites, and applications that power modern technology.
        Explore the world of coding to unlock endless possibilities and bring your ideas to life.
    </fg-accordion-body>
  </fg-accordion-item>
  <fg-accordion-item icon="bi-camera-video-fill" title="Livestream">
    <fg-accordion-body>
        Livestreaming is a powerful way to connect with your audience in real-time, enabling interactive and engaging experiences.
        Share your moments, events, or tutorials live and build a stronger connection with your viewers.
    </fg-accordion-body>
  </fg-accordion-item>
</fg-accordion>

@tab vue

```vue
<fg-accordion>
  <fg-accordion-item icon="bi-broadcast" title="Broadcast">
    <fg-accordion-body>
        Broadcasting allows you to share live updates with your audience in real-time.
        Engage with your viewers through interactive and dynamic content delivery.
    </fg-accordion-body>
  </fg-accordion-item>
  <fg-accordion-item icon="bi-code" title="Coding">
    <fg-accordion-body>
        Coding is the process of creating instructions for computers using programming languages. It enables the development of software, websites, and applications that power modern technology.
        Explore the world of coding to unlock endless possibilities and bring your ideas to life.
    </fg-accordion-body>
  </fg-accordion-item>
  <fg-accordion-item icon="bi-camera-video-fill" title="Livestream">
    <fg-accordion-body>
        Livestreaming is a powerful way to connect with your audience in real-time, enabling interactive and engaging experiences.
        Share your moments, events, or tutorials live and build a stronger connection with your viewers.
    </fg-accordion-body>
  </fg-accordion-item>
</fg-accordion>
```

:::
