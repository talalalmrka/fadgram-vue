/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, computed } from 'vue';
import FgInfo from './FgInfo.vue';
import FgError from './FgError.vue';
defineOptions({ inheritAttrs: false });
const props = defineProps();
const emits = defineEmits();
const fieldId = ref(props.id || `toggle-${Math.random().toString(36).substr(2, 9)}`);
const toggleRef = ref(null);
const isFlex = computed(() => props.icon && props.label);
const __VLS_exposed = { toggleRef };
defineExpose(__VLS_exposed);
const isChecked = computed(() => {
    if (Array.isArray(props.modelValue)) {
        // Group mode: check if value exists in array
        return props.value !== undefined && props.modelValue.includes(props.value);
    }
    if (props.value !== undefined) {
        // Single value mode: compare with modelValue
        return props.modelValue === props.value;
    }
    // Default boolean mode
    return Boolean(props.modelValue);
});
function update(checked) {
    let newValue;
    if (Array.isArray(props.modelValue)) {
        // Group array logic
        newValue = [...props.modelValue];
        if (checked) {
            if (!newValue.includes(props.value)) {
                newValue.push(props.value);
            }
        }
        else {
            newValue = newValue.filter((item) => item !== props.value);
        }
    }
    else if (props.value !== undefined) {
        // Single value mode
        newValue = checked ? props.value : props.uncheckedValue;
    }
    else {
        // Default boolean toggle
        newValue = !props.modelValue;
    }
    emits('update:modelValue', newValue);
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: (__VLS_ctx.fieldId),
    ...{ class: "form-switch" },
    ...{ class: ({ 'error': __VLS_ctx.error }) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    ...{ onChange: (...[$event]) => {
            __VLS_ctx.update($event.currentTarget.checked);
        } },
    ref: "toggleRef",
    type: "checkbox",
    id: (__VLS_ctx.fieldId),
    checked: (__VLS_ctx.isChecked),
    disabled: (__VLS_ctx.disabled),
});
/** @type {typeof __VLS_ctx.toggleRef} */ ;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "toggle-slider" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "form-switch-label" },
    ...{ class: ({ 'flex-space-2': __VLS_ctx.isFlex }) },
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
/** @type {__VLS_StyleScopedClasses['form-switch']} */ ;
/** @type {__VLS_StyleScopedClasses['error']} */ ;
/** @type {__VLS_StyleScopedClasses['toggle-slider']} */ ;
/** @type {__VLS_StyleScopedClasses['form-switch-label']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-space-2']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
[__VLS_dollars.$attrs,];
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            FgInfo: FgInfo,
            FgError: FgError,
            fieldId: fieldId,
            toggleRef: toggleRef,
            isFlex: isFlex,
            isChecked: isChecked,
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
