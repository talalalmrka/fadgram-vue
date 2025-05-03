---
title: Tabs
icon: folder2
---

<script setup lang="ts">
  import { ref } from 'vue'
  const tabs = [
    {
      id: "home",
      title: "Home",
      icon: "bi-house-fill",
    },
    {
      id: "profile",
      title: "Profile",
      icon: "bi-person-fill",
    },
    {
      id: "settings",
      title: "Settings",
      icon: "bi-gear-wide-connected",
    },
  ]
</script>

# Tabs

## Props

| Prop         | Type     | Required | Description                                                |
| ------------ | -------- | -------- | ---------------------------------------------------------- |
| `tabs`       | `Tab[]`  | Yes      | Array of tab objects: `{ name: string; slotName: string }` |
| `modelValue` | `number` | No       | Currently active tab index (for `v-model`)                 |

## Emits

| Event               | Payload  | Description                                        |
| ------------------- | -------- | -------------------------------------------------- |
| `update:modelValue` | `number` | Emitted when active tab changes (for v-model sync) |
| `change`            | `number` | Emitted when active tab changes                    |

## installation

```ts
import { FgTabs } from 'fadgram-vue'
```

## Usage

::: tabs

@tab:active Preview

<tabs-preview/>

@tab vue

```vue
<fg-tabs
  v-model="currentTab"
  :tabs="[
    {
      id: 'home',
      title: 'Home',
      icon: 'bi-house-fill',
    },
    {
      id: 'profile',
      title: 'Profile',
      icon: 'bi-person-fill',
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: 'bi-gear-wide-connected',
    },
  ]"
>
    <template #home>
      <div>Welcome to the home tab!</div>
    </template>
    <template #profile>
      <div>This is your profile.</div>
    </template>
    <template #settings>
      <div>Adjust your preferences here.</div>
    </template>
</fg-tabs>
```

:::
