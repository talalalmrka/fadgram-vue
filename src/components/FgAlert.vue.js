/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { computed, useAttrs, useSlots } from 'vue';
// Component props
const props = defineProps({
    class: { type: String, default: null },
    atts: { type: Object, default: () => ({}) },
    type: { type: String, default: 'info' },
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
};
// Only four variants have icons; mark as Partial record
const icons = {
    info: 'bi-info-circle',
    success: 'bi-check-circle',
    warning: 'bi-exclamation-triangle',
    error: 'bi-x-circle',
};
// Compute which icon class to use (override > lookup > none)
const iconClassName = computed(() => {
    if (props.hideIcon)
        return null;
    if (props.icon)
        return props.icon;
    if (props.success)
        return icons.success ?? null;
    if (props.info)
        return icons.info ?? null;
    if (props.warning)
        return icons.warning ?? null;
    if (props.error)
        return icons.error ?? null;
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
    attrs.class,
    props.atts.class,
]);
const hasContent = computed(() => !!slots.default || !!props.content);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (__VLS_ctx.rootClasses) },
    ...(__VLS_ctx.mergedAttrs),
});
if (__VLS_ctx.hasIcon) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.i)({
        ...{ class: (['icon', __VLS_ctx.iconClassName, props.iconClass]) },
    });
}
if (__VLS_ctx.hasContent) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "grow" },
    });
    if (__VLS_ctx.$slots.default) {
        var __VLS_0 = {};
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div)({});
        __VLS_asFunctionalDirective(__VLS_directives.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.content) }, null, null);
    }
}
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['grow']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            iconClassName: iconClassName,
            hasIcon: hasIcon,
            mergedAttrs: mergedAttrs,
            rootClasses: rootClasses,
            hasContent: hasContent,
        };
    },
    props: {
        class: { type: String, default: null },
        atts: { type: Object, default: () => ({}) },
        type: { type: String, default: 'info' },
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
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        class: { type: String, default: null },
        atts: { type: Object, default: () => ({}) },
        type: { type: String, default: 'info' },
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
    },
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
