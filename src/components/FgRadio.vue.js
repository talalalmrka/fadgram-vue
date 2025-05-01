/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, watch } from 'vue';
import FgInfo from './FgInfo.vue';
import FgError from './FgError.vue';
defineOptions({ inheritAttrs: false });
const props = defineProps();
const emits = defineEmits();
const fieldId = ref(props.id || `radio-${Math.random().toString(36).substr(2, 9)}`);
const options = props.options || [];
const innerValue = ref(props.modelValue ?? null);
const radioRef = ref(null);
const __VLS_exposed = { radioRef };
defineExpose(__VLS_exposed);
watch(() => props.modelValue, val => innerValue.value = val ?? null);
function update(val) {
    emits('update:modelValue', val);
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.fieldset, __VLS_intrinsicElements.fieldset)({});
if (__VLS_ctx.label || __VLS_ctx.icon) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.legend, __VLS_intrinsicElements.legend)({
        ...{ class: "form-label" },
        ...{ class: ({ 'flex-space-2': __VLS_ctx.icon && __VLS_ctx.label }) },
    });
    if (__VLS_ctx.icon) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
            ...{ class: "icon" },
            ...{ class: (__VLS_ctx.icon) },
        });
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.label);
}
for (const [opt] of __VLS_getVForSourceType((__VLS_ctx.options))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: (opt.value),
        ...{ class: "form-radio" },
        ...{ class: (opt.disabled ? 'opacity-50 cursor-not-allowed' : '') },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        ...{ onChange: (...[$event]) => {
                __VLS_ctx.update(opt.value);
            } },
        ref: "radioRef",
        id: (__VLS_ctx.fieldId + '-' + opt.value),
        type: "radio",
        name: (__VLS_ctx.fieldId),
        value: (opt.value),
        checked: (opt.value === __VLS_ctx.innerValue),
        disabled: (opt.disabled),
    });
    /** @type {typeof __VLS_ctx.radioRef} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        for: (__VLS_ctx.fieldId + '-' + opt.value),
        ...{ class: "form-label" },
    });
    (opt.label);
}
/** @type {[typeof FgInfo, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(FgInfo, new FgInfo({
    info: (__VLS_ctx.info),
}));
const __VLS_1 = __VLS_0({
    info: (__VLS_ctx.info),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
/** @type {[typeof FgError, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(FgError, new FgError({
    error: (__VLS_ctx.error),
}));
const __VLS_4 = __VLS_3({
    error: (__VLS_ctx.error),
}, ...__VLS_functionalComponentArgsRest(__VLS_3));
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-space-2']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['form-radio']} */ ;
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
[__VLS_dollars.$attrs,];
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            FgInfo: FgInfo,
            FgError: FgError,
            fieldId: fieldId,
            options: options,
            innerValue: innerValue,
            radioRef: radioRef,
            update: update,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            ...__VLS_exposed,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
