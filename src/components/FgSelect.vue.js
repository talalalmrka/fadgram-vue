/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, watch } from 'vue';
import FgLabel from './FgLabel.vue';
import FgInfo from './FgInfo.vue';
import FgError from './FgError.vue';
defineOptions({ inheritAttrs: false });
const props = defineProps();
const emits = defineEmits();
const selectId = ref(props.id || `fg-select-${Math.random().toString(36).substr(2, 9)}`);
const innerValue = ref(props.modelValue ?? null);
const selectRef = ref(null);
const __VLS_exposed = { selectRef };
defineExpose(__VLS_exposed);
const options = ref(props.options || []);
watch(() => props.modelValue, val => innerValue.value = val ?? null);
function update(val) {
    emits('update:modelValue', val);
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "mb-4" },
});
/** @type {[typeof FgLabel, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(FgLabel, new FgLabel({
    icon: (__VLS_ctx.icon),
    label: (__VLS_ctx.label),
    error: (__VLS_ctx.error),
    for: (__VLS_ctx.selectId),
}));
const __VLS_1 = __VLS_0({
    icon: (__VLS_ctx.icon),
    label: (__VLS_ctx.label),
    error: (__VLS_ctx.error),
    for: (__VLS_ctx.selectId),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    ...{ onChange: (...[$event]) => {
            __VLS_ctx.update($event.target.value);
        } },
    ref: "selectRef",
    id: (__VLS_ctx.selectId),
    value: (__VLS_ctx.innerValue),
    ...{ class: "form-select" },
    ...{ class: (__VLS_ctx.error ? 'error' : '') },
});
/** @type {typeof __VLS_ctx.selectRef} */ ;
if (__VLS_ctx.placeholder) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: "",
    });
    (__VLS_ctx.placeholder);
}
for (const [opt] of __VLS_getVForSourceType((__VLS_ctx.options))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        key: (opt.value),
        value: (opt.value),
        disabled: (opt.disabled),
    });
    if (opt.icon) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
            ...{ class: "icon" },
            ...{ class: (opt.icon) },
        });
    }
    (opt.label);
}
/** @type {[typeof FgInfo, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(FgInfo, new FgInfo({
    info: (__VLS_ctx.info),
}));
const __VLS_4 = __VLS_3({
    info: (__VLS_ctx.info),
}, ...__VLS_functionalComponentArgsRest(__VLS_3));
/** @type {[typeof FgError, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(FgError, new FgError({
    error: (__VLS_ctx.error),
}));
const __VLS_7 = __VLS_6({
    error: (__VLS_ctx.error),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['form-select']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
[__VLS_dollars.$attrs,];
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            FgLabel: FgLabel,
            FgInfo: FgInfo,
            FgError: FgError,
            selectId: selectId,
            innerValue: innerValue,
            selectRef: selectRef,
            options: options,
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
