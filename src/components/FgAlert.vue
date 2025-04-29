<script setup lang="ts">
import { computed, useAttrs, useSlots } from 'vue';
import type { PropType } from 'vue';

// Define all possible alert types
type AlertType =
    | 'info' | 'success' | 'error' | 'warning'
    | 'primary' | 'secondary' | 'accent' | 'neutral' | 'base'
    | 'light' | 'dark' | 'blue' | 'indigo' | 'purple' | 'pink'
    | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'cyan' | 'gray'
    | 'slate' | 'zinc' | 'stone' | 'amber' | 'lime' | 'emerald'
    | 'sky' | 'violet' | 'fuchsia' | 'rose';

// Component props
const props = defineProps({
    class: { type: String, default: null },
    atts: { type: Object as PropType<Record<string, any>>, default: () => ({}) },
    type: { type: String as PropType<AlertType>, default: 'info' },
    soft: { type: Boolean, default: false },
    outline: { type: Boolean, default: false },
    success: { type: Boolean, default: false },
    info: { type: Boolean, default: false },
    warning: { type: Boolean, default: false },
    error: { type: Boolean, default: false },
    size: { type: String, default: null },
    icon: { type: String, default: null },
    iconClass: { type: String, default: null },
    content: { type: String, default: null },
    hideIcon: { type: Boolean, default: false },
});

const attrs = useAttrs();
const slots = useSlots();

// Map of CSS classes by alert type
const types = {
    info: 'alert-info', success: 'alert-success',
    error: 'alert-error', warning: 'alert-warning',
    primary: 'alert-primary', secondary: 'alert-secondary',
    accent: 'alert-accent', neutral: 'alert-neutral',
    base: 'alert-base', light: 'alert-light',
    dark: 'alert-dark', blue: 'alert-blue',
    indigo: 'alert-indigo', purple: 'alert-purple',
    pink: 'alert-pink', red: 'alert-red',
    orange: 'alert-orange', yellow: 'alert-yellow',
    green: 'alert-green', teal: 'alert-teal',
    cyan: 'alert-cyan', gray: 'alert-gray',
    slate: 'alert-slate', zinc: 'alert-zinc',
    stone: 'alert-stone', amber: 'alert-amber',
    lime: 'alert-lime', emerald: 'alert-emerald',
    sky: 'alert-sky', violet: 'alert-violet',
    fuchsia: 'alert-fuchsia', rose: 'alert-rose',
} as const;

// Only four variants have icons; mark as Partial record
const icons: Partial<Record<AlertType, string>> = {
    info: 'bi-info-circle',
    success: 'bi-check-circle',
    warning: 'bi-exclamation-triangle',
    error: 'bi-x-circle',
};

// Compute which icon class to use (override > lookup > none)
const iconClassName = computed<string | null>(() => {
    if (props.hideIcon) return null;
    if (props.icon) return props.icon;
    if (props.success) return icons.success ?? null;
    if (props.info) return icons.info ?? null;
    if (props.warning) return icons.warning ?? null;
    if (props.error) return icons.error ?? null;
    return icons[props.type] ?? null;
});


const hasIcon = computed(() => iconClassName.value !== null);

// Merge any extra attributes passed via v-bind
const mergedAttrs = computed(() => {
    const { class: _, ...restAttrs } = attrs;
    const { class: __, ...restAtts } = props.atts;
    return { ...restAttrs, ...restAtts };
});
// Build the root <div> class list
const rootClasses = computed(() => [
    'alert',
    types[props.type],
    props.size,
    {
        'flex-space-2': hasIcon.value,
        'alert-soft': props.soft,
        'alert-outline': props.outline,
        'alert-info': props.info,
        'alert-success': props.success,
        'alert-warning': props.warning,
        'alert-error': props.error,
    },
    props.class,
    attrs.class as string,
    props.atts.class as string,
]);

const hasContent = computed(() => !!slots.default || !!props.content);
</script>
<template>
    <div :class="rootClasses" v-bind="mergedAttrs">
        <i v-if="hasIcon" :class="['icon', iconClassName, props.iconClass]" />
        <div v-if="hasContent" class="grow">
            <slot v-if="$slots.default" />
            <div v-else v-html="content" />
        </div>
    </div>
</template>