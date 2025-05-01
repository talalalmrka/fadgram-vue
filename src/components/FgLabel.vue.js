/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { computed } from 'vue';
defineOptions({ inheritAttrs: false });
const props = defineProps();
const hasLabel = computed(() => props.icon || props.label);
const isFlex = computed(() => props.icon && props.label);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
if (__VLS_ctx.hasLabel) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: "form-label" },
        ...{ class: ({ 'error': __VLS_ctx.error, 'flex-space-2': __VLS_ctx.isFlex }) },
    });
    if (__VLS_ctx.icon) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
            ...{ class: "icon" },
            ...{ class: (__VLS_ctx.icon) },
        });
    }
    if (__VLS_ctx.label) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.label);
    }
}
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
/** @type {__VLS_StyleScopedClasses['error']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-space-2']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
[__VLS_dollars.$attrs,];
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            hasLabel: hasLabel,
            isFlex: isFlex,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
