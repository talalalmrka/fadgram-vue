<script setup lang="ts">
import { computed } from 'vue';
import { useAttrs } from 'vue';
import {
    LOADER_TYPES,
    LOADER_SIZES,
    type LoaderType,
    type LoaderSize,
    isLoaderType,
    isLoaderSize,
    getAttrFromType,
    getAttrFromSize,
} from '../types';

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<{
    type?: LoaderType;
    size?: LoaderSize | null;
}>(), {
    type: 'default',
    size: null,
});

const attrs = useAttrs();

// Build attribute maps
const typeAttrMap: Record<string, LoaderType> = LOADER_TYPES.reduce((map, t) => {
    const kebab = getAttrFromType(t);
    if (kebab) map[kebab] = t;
    return map;
}, {} as Record<string, LoaderType>);

const sizeAttrMap: Record<string, LoaderSize> = LOADER_SIZES.reduce((map, s) => {
    const kebab = getAttrFromSize(s);
    map[kebab] = s;
    return map;
}, {} as Record<string, LoaderSize>);

// Determine loader type via boolean attr or prop
const loaderType = computed<LoaderType>(() => {
    for (const [kebab, typeVal] of Object.entries(typeAttrMap)) {
        if (attrs[kebab] !== undefined) {
            return typeVal;
        }
    }
    return isLoaderType(props.type!) ? props.type! : 'default';
});

// Determine loader size via boolean attr or prop
const loaderSize = computed<LoaderSize | null>(() => {
    for (const [kebab, sizeVal] of Object.entries(sizeAttrMap)) {
        if (attrs[kebab] !== undefined) {
            return sizeVal;
        }
    }
    return isLoaderSize(props.size as string) ? props.size! : null;
});

// Static class mappings
const loaderClasses: Record<LoaderType, string> = {
    default: 'fg-loader',
    dotsBounce: 'fg-loader-dots-bounce',
    dotsFade: 'fg-loader-dots-fade',
    dotsMove: 'fg-loader-dots-move',
    dotsRotate: 'fg-loader-dots-rotate',
    dotsScale: 'fg-loader-dots-scale',
};

const sizeClasses: Record<LoaderSize, string> = {
    xxs: 'size-2',
    xs: 'size-3',
    sm: 'size-4',
    md: 'size-6',
    lg: 'size-8',
    xl: 'size-10',
    xxl: 'size-14',
};

const classes = computed(() => {
    const cls: string[] = ['icon', loaderClasses[loaderType.value]];
    if (loaderSize.value && sizeClasses[loaderSize.value]) {
        cls.push(sizeClasses[loaderSize.value]);
    }
    return cls;
});
</script>

<template>
    <i v-bind="$attrs" :class="classes"></i>
</template>
