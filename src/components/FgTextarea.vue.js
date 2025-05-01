/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, watch } from 'vue';
import FgLabel from './FgLabel.vue';
import FgInfo from './FgInfo.vue';
import FgError from './FgError.vue';
defineOptions({ inheritAttrs: false });
const props = defineProps();
const emits = defineEmits();
const fieldId = ref(props.id || `textarea-${Math.random().toString(36).substr(2, 9)}`);
const rows = props.rows ?? 4;
const innerValue = ref(props.modelValue ?? '');
const textareaRef = ref(null);
const __VLS_exposed = { textareaRef };
defineExpose(__VLS_exposed);
watch(() => props.modelValue, val => innerValue.value = val ?? '');
function update(val) {
    emits('update:modelValue', val);
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {[typeof FgLabel, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(FgLabel, new FgLabel({
    icon: (__VLS_ctx.icon),
    label: (__VLS_ctx.label),
    error: (__VLS_ctx.error),
    for: (__VLS_ctx.fieldId),
}));
const __VLS_1 = __VLS_0({
    icon: (__VLS_ctx.icon),
    label: (__VLS_ctx.label),
    error: (__VLS_ctx.error),
    for: (__VLS_ctx.fieldId),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
    ...{ onInput: (...[$event]) => {
            __VLS_ctx.update($event.target.value);
        } },
    ref: "textareaRef",
    id: (__VLS_ctx.fieldId),
    value: (__VLS_ctx.innerValue),
    placeholder: (__VLS_ctx.placeholder),
    rows: (__VLS_ctx.rows),
    disabled: (__VLS_ctx.disabled),
    ...{ class: "form-control" },
    ...{ class: (__VLS_ctx.error ? 'error' : '') },
});
/** @type {typeof __VLS_ctx.textareaRef} */ ;
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
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
[__VLS_dollars.$attrs,];
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            FgLabel: FgLabel,
            FgInfo: FgInfo,
            FgError: FgError,
            fieldId: fieldId,
            rows: rows,
            innerValue: innerValue,
            textareaRef: textareaRef,
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
