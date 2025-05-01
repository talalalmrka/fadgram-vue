/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, watch, computed } from 'vue';
import FgLabel from './FgLabel.vue';
import FgInfo from './FgInfo.vue';
import FgError from './FgError.vue';
defineOptions({ inheritAttrs: false });
const props = defineProps();
const emits = defineEmits();
const fieldId = ref(props.id || `input-${Math.random().toString(36).substr(2, 9)}`);
const fieldType = ref(props.type || 'text');
const innerValue = ref(props.modelValue ?? '');
const inputRef = ref(null);
const showPassword = ref(false); // Track password visibility
const hasIcon = computed(() => props.startIcon || props.endIcon || props.type === 'password'); // Include password type
const __VLS_exposed = { inputRef };
defineExpose(__VLS_exposed);
watch(() => props.modelValue, val => innerValue.value = val ?? '');
function update(val) {
    emits('update:modelValue', val);
}
// Toggle password visibility
const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
    fieldType.value = showPassword.value ? 'text' : 'password';
};
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
if (__VLS_ctx.hasIcon) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "form-control-container" },
    });
    if (__VLS_ctx.startIcon) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "start-icon" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
            ...{ class: "icon" },
            ...{ class: (__VLS_ctx.startIcon) },
        });
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        ...{ onInput: (...[$event]) => {
                if (!(__VLS_ctx.hasIcon))
                    return;
                __VLS_ctx.update($event.target.value);
            } },
        ref: "inputRef",
        id: (__VLS_ctx.fieldId),
        type: (__VLS_ctx.fieldType),
        placeholder: (__VLS_ctx.placeholder),
        disabled: (__VLS_ctx.disabled),
        ...{ class: "form-control" },
        ...{ class: ([__VLS_ctx.size, { 'error': __VLS_ctx.error, 'has-start-icon': __VLS_ctx.startIcon, 'has-end-icon': __VLS_ctx.endIcon || __VLS_ctx.type === 'password' }]) },
    });
    (__VLS_ctx.innerValue);
    /** @type {typeof __VLS_ctx.inputRef} */ ;
    if (__VLS_ctx.type === 'password') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (__VLS_ctx.togglePasswordVisibility) },
            type: "button",
            ...{ class: "end-icon btn-password-toggle" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
            ...{ class: "icon" },
            ...{ class: (__VLS_ctx.showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill') },
        });
    }
    else if (__VLS_ctx.endIcon) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "end-icon" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
            ...{ class: "icon" },
            ...{ class: (__VLS_ctx.endIcon) },
        });
    }
}
if (!__VLS_ctx.hasIcon) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        ...{ onInput: (...[$event]) => {
                if (!(!__VLS_ctx.hasIcon))
                    return;
                __VLS_ctx.update($event.target.value);
            } },
        ref: "inputRef",
        id: (__VLS_ctx.fieldId),
        type: (__VLS_ctx.fieldType),
        placeholder: (__VLS_ctx.placeholder),
        disabled: (__VLS_ctx.disabled),
        ...{ class: "form-control" },
        ...{ class: ([__VLS_ctx.size, { 'error': __VLS_ctx.error }]) },
    });
    (__VLS_ctx.innerValue);
    /** @type {typeof __VLS_ctx.inputRef} */ ;
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
/** @type {__VLS_StyleScopedClasses['form-control-container']} */ ;
/** @type {__VLS_StyleScopedClasses['start-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['error']} */ ;
/** @type {__VLS_StyleScopedClasses['has-start-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['has-end-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['end-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-password-toggle']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['end-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['error']} */ ;
[__VLS_dollars.$attrs, __VLS_dollars.$attrs,];
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            FgLabel: FgLabel,
            FgInfo: FgInfo,
            FgError: FgError,
            fieldId: fieldId,
            fieldType: fieldType,
            innerValue: innerValue,
            inputRef: inputRef,
            showPassword: showPassword,
            hasIcon: hasIcon,
            update: update,
            togglePasswordVisibility: togglePasswordVisibility,
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
