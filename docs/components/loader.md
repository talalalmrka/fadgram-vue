<script setup lang="ts">
    import { ref } from 'vue';
    import { LOADER_TYPES } from '@/types';
    const sizes = ref<string>([
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'xxl',
    ]);

</script>

# Loader

## Props

| Prop | Type         | Default   | Description                                                               |
| ---- | ------------ | --------- | ------------------------------------------------------------------------- |
| type | `LoaderType` | `default` | The visual style of the loader. Can be set via prop or boolean attribute. |
| size | `LoaderSize` | `null`    | The size of the loader. Can be set via prop or boolean attribute.         |

**The supported loader types are imported from LOADER_TYPES, and typically include:**

- default

- dotsBounce

- dotsFade

- dotsMove

- dotsRotate

- dotsScale

## installation

```ts
import { FgLoader } from 'fadgram-vue'
```

## Basic usage

::: tabs

@tab:active Preview

<fg-loader/>

@tab vue

```vue
<fg-loader />
```

:::

## Type

::: tabs

@tab:active Preview

<div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-3 mb-4">
    <div v-for="type in LOADER_TYPES" class="col" :key="type">
        <div class="flex flex-col items-center bg-white dark:bg-gray-700 rounded-lg hover:text-primary cursor-pointer">
            <fg-loader class="w-10 h-10 mt-6" :type="type" />
            <div class="my-3 text-center text-xs">{{ type }}</div>
        </div>
    </div>
</div>

@tab vue

```vue
<fg-loader />
<fg-loader dots-bounce />
<fg-loader dots-fade />
<fg-loader dots-move />
<fg-loader dots-rotate />
<fg-loader dots-scale />
```

:::

## Size

::: tabs

@tab:active Preview

<div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-3 mb-4">
    <div v-for="size in sizes" class="col" :key="size">
        <div class="flex flex-col items-center bg-white dark:bg-gray-700 rounded-lg hover:text-primary cursor-pointer">
            <fg-loader class="mt-6" :size="size" />
            <div class="my-3 text-center text-xs">{{ size }}</div>
        </div>
    </div>
</div>

@tab vue

```vue
<fg-loader size="xxs" />
<fg-loader size="xs" />
<fg-loader size="sm" />
<fg-loader size="md" />
<fg-loader size="lg" />
<fg-loader size="xl" />
<fg-loader size="xxl" />
```

:::
