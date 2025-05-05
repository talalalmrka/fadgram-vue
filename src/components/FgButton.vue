<script setup lang="ts">
import { computed } from 'vue';
defineOptions({ inheritAttrs: false });
interface Props {
    type?: 'button' | 'submit' | 'reset';
    color?: ButtonColor;
    icon?: string;
    label?: string;
    class?: string;
    outline?: boolean;
    pill?: boolean;
    gradient?: boolean;
    size?: ButtonSize;
    xs?: boolean;
    sm?: boolean;
    lg?: boolean;
    xl?: boolean;
    xxl?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    type: 'button',
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
type ButtonColor =
    'primary' | 'secondary' | 'light' | 'dark' | 'red' | 'orange' | 'amber' |
    'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' |
    'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' |
    'gray' | 'zinc' | 'neutral' | 'stone';

const colorClasses: Partial<Record<ButtonColor, string>> = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    light: 'btn-light',
    dark: 'btn-dark',
    red: 'btn-red',
    orange: 'btn-orange',
    amber: 'btn-amber',
    yellow: 'btn-yellow',
    lime: 'btn-lime',
    green: 'btn-green',
    emerald: 'btn-emerald',
    teal: 'btn-teal',
    cyan: 'btn-cyan',
    sky: 'btn-sky',
    blue: 'btn-blue',
    indigo: 'btn-indigo',
    violet: 'btn-violet',
    purple: 'btn-purple',
    fuchsia: 'btn-fuchsia',
    pink: 'btn-pink',
    rose: 'btn-rose',
    slate: 'btn-slate',
    gray: 'btn-gray',
    zinc: 'btn-zinc',
    neutral: 'btn-neutral',
    stone: 'btn-stone',
}
const colorOutlineClasses: Partial<Record<ButtonColor, string>> = {
    primary: 'btn-outline-primary',
    secondary: 'btn-outline-secondary',
    light: 'btn-outline-light',
    dark: 'btn-outline-dark',
    red: 'btn-outline-red',
    orange: 'btn-outline-orange',
    amber: 'btn-outline-amber',
    yellow: 'btn-outline-yellow',
    lime: 'btn-outline-lime',
    green: 'btn-outline-green',
    emerald: 'btn-outline-emerald',
    teal: 'btn-outline-teal',
    cyan: 'btn-outline-cyan',
    sky: 'btn-outline-sky',
    blue: 'btn-outline-blue',
    indigo: 'btn-outline-indigo',
    violet: 'btn-outline-violet',
    purple: 'btn-outline-purple',
    fuchsia: 'btn-outline-fuchsia',
    pink: 'btn-outline-pink',
    rose: 'btn-outline-rose',
    slate: 'btn-outline-slate',
    gray: 'btn-outline-gray',
    zinc: 'btn-outline-zinc',
    neutral: 'btn-outline-neutral',
    stone: 'btn-outline-stone',
}
const colorClass = computed(() => props.color ? (props.outline ? colorOutlineClasses[props.color] : colorClasses[props.color]) : null);

// Size
type ButtonSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl' | 'xxl';
const sizeClasses: Partial<Record<ButtonSize, string | null>> = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    default: '',
    lg: 'btn-lg',
    xl: 'btn-xl',
    xxl: 'btn-xxl',
};
const sizeClass = computed(() => {
    if (props.size) return sizeClasses[props.size];
    if (props.xs) return sizeClasses['xs'];
    if (props.sm) return sizeClasses['sm'];
    if (props.lg) return sizeClasses['lg'];
    if (props.xl) return sizeClasses['xl'];
    if (props.xxl) return sizeClasses['xxl'];
    return null;
});
const buttonClass = computed(() => [
    'btn',
    colorClass.value,
    sizeClass.value,
    {
        'flex-space-2': props.icon && props.label,
        'gradient': props.gradient,
        'pill': props.pill,
    },
    props.class,
]);
</script>

<template>
    <button :type="type" :class="buttonClass" v-bind="$attrs">
        <fg-icon v-if="!$slots.default" :icon="icon" />
        <span v-if="!$slots.default && label">{{ label }}</span>
        <slot />
    </button>
</template>