/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, computed, nextTick, watch } from 'vue';
import { vOnClickOutside } from '@vueuse/components';
import { FgLabel, FgInfo, FgError, FgInput } from './';
defineOptions({ inheritAttrs: false });
const props = withDefaults(defineProps(), {
    id: undefined,
    options: () => [],
    modelValue: null,
    placeholder: 'Select an option',
    searchable: true,
    searchPlaceholder: 'Search...',
    clearable: true,
    noResults: 'No results found',
});
const emits = defineEmits();
const selectId = ref(props.id || `fg-rich-select-${Math.random().toString(36).substr(2, 9)}`);
const isOpen = ref(false);
const searchTerm = ref('');
const highlightIndex = ref(0);
const placeholder = props.placeholder || 'اختر...';
const searchPlaceholder = props.searchPlaceholder || 'ابحث...';
const clearable = props.clearable ?? true;
const options = computed(() => props.options || []);
const filteredOptions = computed(() => {
    if (props.searchable && searchTerm.value)
        return options.value.filter(opt => opt.label.toString().toLowerCase().includes(searchTerm.value.toLowerCase()));
    return options.value;
});
const selectedOption = computed(() => options.value.find(opt => opt.value === props.modelValue) || null);
function toggle() {
    if (!options.value.length)
        return;
    isOpen.value = !isOpen.value;
    if (isOpen.value) {
        highlightIndex.value = 0;
        nextTick(() => document.querySelector(`#${selectId.value} input`)?.focus());
    }
}
function close() { isOpen.value = false; searchTerm.value = ''; }
function select(opt) { if (!opt.disabled) {
    emits('update:modelValue', opt.value);
    close();
} }
function clear() { emits('update:modelValue', null); close(); }
function onKeydown(e) {
    if (!isOpen.value && ['Enter', ' '].includes(e.key)) {
        toggle();
        e.preventDefault();
        return;
    }
    if (!isOpen.value)
        return;
    const len = filteredOptions.value.length;
    if (e.key === 'ArrowDown') {
        highlightIndex.value = (highlightIndex.value + 1) % len;
        e.preventDefault();
    }
    else if (e.key === 'ArrowUp') {
        highlightIndex.value = (highlightIndex.value - 1 + len) % len;
        e.preventDefault();
    }
    else if (e.key === 'Enter') {
        select(filteredOptions.value[highlightIndex.value]);
        e.preventDefault();
    }
    else if (e.key === 'Escape') {
        close();
        e.preventDefault();
    }
}
watch(() => props.modelValue, () => searchTerm.value = '');
const selectRef = ref(null);
const __VLS_exposed = { selectRef };
defineExpose(__VLS_exposed);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    id: undefined,
    options: () => [],
    modelValue: null,
    placeholder: 'Select an option',
    searchable: true,
    searchPlaceholder: 'Search...',
    clearable: true,
    noResults: 'No results found',
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onKeydown: (__VLS_ctx.onKeydown) },
    ...{ onBlur: (__VLS_ctx.close) },
    ref: "selectRef",
    ...{ class: "relative" },
});
__VLS_asFunctionalDirective(__VLS_directives.vOnClickOutside)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.close) }, null, null);
/** @type {typeof __VLS_ctx.selectRef} */ ;
const __VLS_0 = {}.FgLabel;
/** @type {[typeof __VLS_components.FgLabel, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    icon: (__VLS_ctx.icon),
    label: (__VLS_ctx.label),
    error: (__VLS_ctx.error),
    for: (__VLS_ctx.selectId),
}));
const __VLS_2 = __VLS_1({
    icon: (__VLS_ctx.icon),
    label: (__VLS_ctx.label),
    error: (__VLS_ctx.error),
    for: (__VLS_ctx.selectId),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "form-control-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (__VLS_ctx.toggle) },
    id: (__VLS_ctx.selectId),
    tabindex: "0",
    ...{ class: "form-control has-end-icon" },
    ...{ class: ({ 'error': __VLS_ctx.error }) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "flex-1 truncate" },
});
(__VLS_ctx.selectedOption?.label || __VLS_ctx.placeholder);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "end-icon flex-space-1" },
});
if (__VLS_ctx.selectedOption && __VLS_ctx.clearable) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.clear) },
        ...{ class: "flex items-center" },
        title: "Clear selection",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ class: "icon bi-x" },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
    ...{ class: "icon bi-chevron-expand" },
});
const __VLS_4 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    name: "fade",
}));
const __VLS_6 = __VLS_5({
    name: "fade",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
if (__VLS_ctx.isOpen) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: "absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto focus:outline-none p-0 list-none text-sm" },
    });
    if (__VLS_ctx.searchable) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            ...{ class: "px-3 py-2" },
        });
        const __VLS_8 = {}.FgInput;
        /** @type {[typeof __VLS_components.FgInput, ]} */ ;
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
            type: "search",
            modelValue: (__VLS_ctx.searchTerm),
            placeholder: (__VLS_ctx.searchPlaceholder),
            startIcon: "bi-search",
            ...{ class: "xs" },
        }));
        const __VLS_10 = __VLS_9({
            type: "search",
            modelValue: (__VLS_ctx.searchTerm),
            placeholder: (__VLS_ctx.searchPlaceholder),
            startIcon: "bi-search",
            ...{ class: "xs" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    }
    for (const [opt, idx] of __VLS_getVForSourceType((__VLS_ctx.filteredOptions))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            ...{ onMouseenter: (...[$event]) => {
                    if (!(__VLS_ctx.isOpen))
                        return;
                    __VLS_ctx.highlightIndex = idx;
                } },
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.isOpen))
                        return;
                    __VLS_ctx.select(opt);
                } },
            key: (opt.value),
            ...{ class: "px-3 py-2 cursor-pointer flex-space-2 justify-between hover:bg-primary-100 disabled:opacity-50 disabled:cursor-not-allowed [.active]:bg-primary [.active]:text-white dark:[.active]:bg-primary-500 [.active]:hover:bg-primary-600 dark:hover:[.active]:bg-primary-600" },
            ...{ class: ({
                    //'bg-primary-100': highlightIndex === idx,
                    //'opacity-50 cursor-not-allowed': opt.disabled,
                    'active': opt.value === __VLS_ctx.selectedOption?.value,
                }) },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "grow" },
        });
        if (opt.icon) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
                ...{ class: "icon" },
                ...{ class: (opt.icon) },
            });
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "truncate" },
        });
        (opt.label);
        if (opt.value === __VLS_ctx.selectedOption?.value) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
                ...{ class: "icon bi-check" },
            });
        }
    }
    if (__VLS_ctx.filteredOptions.length === 0) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            ...{ class: "px-3 py-2 text-gray-500" },
        });
        (__VLS_ctx.noResults);
    }
}
var __VLS_7;
const __VLS_12 = {}.FgInfo;
/** @type {[typeof __VLS_components.FgInfo, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    info: (__VLS_ctx.info),
}));
const __VLS_14 = __VLS_13({
    info: (__VLS_ctx.info),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
const __VLS_16 = {}.FgError;
/** @type {[typeof __VLS_components.FgError, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    error: (__VLS_ctx.error),
}));
const __VLS_18 = __VLS_17({
    error: (__VLS_ctx.error),
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['form-control-container']} */ ;
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['has-end-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['error']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['truncate']} */ ;
/** @type {__VLS_StyleScopedClasses['end-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-space-1']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['bi-x']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['bi-chevron-expand']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['z-10']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['max-h-60']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
/** @type {__VLS_StyleScopedClasses['list-none']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['xs']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-space-2']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-primary-100']} */ ;
/** @type {__VLS_StyleScopedClasses['disabled:opacity-50']} */ ;
/** @type {__VLS_StyleScopedClasses['disabled:cursor-not-allowed']} */ ;
/** @type {__VLS_StyleScopedClasses['[.active]:bg-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['[.active]:text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:[.active]:bg-primary-500']} */ ;
/** @type {__VLS_StyleScopedClasses['[.active]:hover:bg-primary-600']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:hover:[.active]:bg-primary-600']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['grow']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['truncate']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['bi-check']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
[__VLS_dollars.$attrs,];
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            vOnClickOutside: vOnClickOutside,
            FgLabel: FgLabel,
            FgInfo: FgInfo,
            FgError: FgError,
            FgInput: FgInput,
            selectId: selectId,
            isOpen: isOpen,
            searchTerm: searchTerm,
            highlightIndex: highlightIndex,
            placeholder: placeholder,
            searchPlaceholder: searchPlaceholder,
            clearable: clearable,
            filteredOptions: filteredOptions,
            selectedOption: selectedOption,
            toggle: toggle,
            close: close,
            select: select,
            clear: clear,
            onKeydown: onKeydown,
            selectRef: selectRef,
        };
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            ...__VLS_exposed,
        };
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
; /* PartiallyEnd: #4569/main.vue */
