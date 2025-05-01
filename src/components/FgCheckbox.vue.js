/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { computed, ref } from 'vue';
import FgLabel from './FgLabel.vue';
import FgInfo from './FgInfo.vue';
import FgError from './FgError.vue';
defineOptions({ inheritAttrs: false });
const props = defineProps();
const emits = defineEmits();
const fieldId = props.id || `checkbox-${Math.random().toString(36).slice(2, 11)}`;
const checkboxRef = ref(null);
const __VLS_exposed = { checkboxRef };
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "form-check" },
    ...{ class: ({ 'error': __VLS_ctx.error }) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    ...{ onChange: (...[$event]) => {
            __VLS_ctx.update($event.currentTarget.checked);
        } },
    ref: "checkboxRef",
    type: "checkbox",
    id: (__VLS_ctx.fieldId),
    checked: (__VLS_ctx.isChecked),
    disabled: (__VLS_ctx.disabled),
});
/** @type {typeof __VLS_ctx.checkboxRef} */ ;
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
/** @type {__VLS_StyleScopedClasses['form-check']} */ ;
/** @type {__VLS_StyleScopedClasses['error']} */ ;
[__VLS_dollars.$attrs,];
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            FgLabel: FgLabel,
            FgInfo: FgInfo,
            FgError: FgError,
            fieldId: fieldId,
            checkboxRef: checkboxRef,
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
