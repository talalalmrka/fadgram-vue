<script setup lang="ts">
import { computed } from 'vue';
defineOptions({ inheritAttrs: false });
interface Props {
    color?: BadgeColor;
    icon?: string;
    label?: string;
    class?: string;
    outline?: boolean;
    pill?: boolean;
    size?: string;
    xs?: boolean;
    sm?: boolean;
    lg?: boolean;
    xl?: boolean;
    xxl?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    color: 'primary',
    outline: false,
    pill: false,
    gradient: false,
    xs: false,
    sm: false,
    lg: false,
    xl: false,
    xxl: false,
})
// Color
type BadgeColor =
    'primary' | 'secondary' | 'light' | 'dark' | 'red' | 'orange' | 'amber' |
    'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' |
    'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' |
    'gray' | 'zinc' | 'neutral' | 'stone';
const colorClasses: Partial<Record<BadgeColor, string>> = {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    light: 'badge-light',
    dark: 'badge-dark',
    red: 'badge-red',
    orange: 'badge-orange',
    amber: 'badge-amber',
    yellow: 'badge-yellow',
    lime: 'badge-lime',
    green: 'badge-green',
    emerald: 'badge-emerald',
    teal: 'badge-teal',
    cyan: 'badge-cyan',
    sky: 'badge-sky',
    blue: 'badge-blue',
    indigo: 'badge-indigo',
    violet: 'badge-violet',
    purple: 'badge-purple',
    fuchsia: 'badge-fuchsia',
    pink: 'badge-pink',
    rose: 'badge-rose',
    slate: 'badge-slate',
    gray: 'badge-gray',
    zinc: 'badge-zinc',
    neutral: 'badge-neutral',
    stone: 'badge-stone',
}
const colorClass = computed(() => props.color ? colorClasses[props.color] : null);
// Size
const sizeClass = computed(() => {
    if (props.size) return props.size;
    if (props.xs) return 'xs';
    if (props.sm) return 'sm';
    if (props.lg) return 'lg';
    if (props.xl) return 'xl';
    if (props.xxl) return 'xxl';
    return null;
});
const badgeClass = computed(() => [
    'badge',
    colorClass.value,
    sizeClass.value,
    {
        'flex-space-2 inline-flex': props.icon && props.label,
        'badge-outline': props.outline,
        'pill': props.pill,
    },
    props.class,
]);
</script>

<template>
    <span :class="badgeClass" v-bind="$attrs">
        <fg-icon v-if="!$slots.default" :icon="icon" />
        <span v-if="!$slots.default && label">{{ label }}</span>
        <slot />
    </span>
</template>