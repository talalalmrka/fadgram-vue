/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, computed, watch, onMounted } from 'vue';
import { vOnClickOutside } from '@vueuse/components';
import { Icon } from '@iconify/vue';
import { FgLabel, FgIcon, FgError, FgInfo } from './';
import biIcons from '@iconify-json/bi/icons.json';
// Static data outside the component to avoid re-computation
const biIconNames = Object.keys(biIcons.icons);
const props = defineProps();
const emit = defineEmits();
// Computed properties
const id = computed(() => props.id || `icon-picker-${Math.random().toString(36).slice(2, 10)}`);
const localIcons = computed(() => props.icons || biIconNames);
const localNoIconsFound = computed(() => props.noIconsFound ?? 'No icons found');
const localSearchPlaceholder = computed(() => props.searchPlaceholder ?? 'Search...');
const perPage = computed(() => props.perPage || 25);
// Reactive state
const searchTerm = ref('');
const open = ref(false);
const page = ref(1);
const input = ref(null);
// Debounced search term
const debouncedSearchTerm = ref('');
let searchTimeout;
watch(searchTerm, (newVal) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        debouncedSearchTerm.value = newVal.toLowerCase();
        page.value = 1;
    }, 150);
});
// Icon filtering and pagination
const filteredIcons = computed(() => localIcons.value.filter(icon => icon.toLowerCase().includes(debouncedSearchTerm.value)));
const pages = computed(() => Math.ceil(filteredIcons.value.length / perPage.value));
const pageIcons = computed(() => filteredIcons.value.slice((page.value - 1) * perPage.value, page.value * perPage.value));
// Watch for modelValue changes including initial value
watch(() => props.modelValue, (newVal) => {
    if (newVal) {
        const cleanIcon = newVal.replace('bi-', '');
        const iconIndex = localIcons.value.indexOf(cleanIcon);
        if (iconIndex > -1) {
            // Calculate page number considering array index starts at 0
            page.value = Math.floor(iconIndex / perPage.value) + 1;
        }
    }
    emit('change', newVal ?? '');
}, { immediate: true });
// Methods
function selectIcon(icon) {
    emit('update:modelValue', `bi-${icon}`);
    open.value = false;
    searchTerm.value = '';
}
function prevPage() {
    page.value = Math.max(1, page.value - 1);
}
function nextPage() {
    page.value = Math.min(pages.value, page.value + 1);
}
// Focus management
onMounted(() => {
    if (props.autofocus && input.value) {
        input.value.focus();
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
if (__VLS_ctx.label) {
    const __VLS_0 = {}.FgLabel;
    /** @type {[typeof __VLS_components.FgLabel, typeof __VLS_components.fgLabel, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        for: (__VLS_ctx.id),
        icon: (__VLS_ctx.icon),
        required: (__VLS_ctx.required),
        label: (__VLS_ctx.label),
        error: (__VLS_ctx.error),
    }));
    const __VLS_2 = __VLS_1({
        for: (__VLS_ctx.id),
        icon: (__VLS_ctx.icon),
        required: (__VLS_ctx.required),
        label: (__VLS_ctx.label),
        error: (__VLS_ctx.error),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (['dropdown inited overflow-visible w-full', __VLS_ctx.containerClass]) },
    ...(__VLS_ctx.containerAtts),
});
__VLS_asFunctionalDirective(__VLS_directives.vOnClickOutside)(null, { ...__VLS_directiveBindingRestFields, value: (() => (__VLS_ctx.open = false)) }, null, null);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "relative" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "input-group w-full" },
    ...{ class: ([__VLS_ctx.size, __VLS_ctx.groupClass, { 'error': __VLS_ctx.error }]) },
    ...(__VLS_ctx.groupAtts),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.open = !__VLS_ctx.open;
        } },
    type: "button",
    title: (__VLS_ctx.modelValue ?? ''),
    ...{ class: "items-center" },
});
if (__VLS_ctx.modelValue) {
    const __VLS_4 = {}.Icon;
    /** @type {[typeof __VLS_components.Icon, ]} */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        icon: (__VLS_ctx.modelValue),
        ...{ class: "inline-flex" },
        ssr: (true),
    }));
    const __VLS_6 = __VLS_5({
        icon: (__VLS_ctx.modelValue),
        ...{ class: "inline-flex" },
        ssr: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ class: "icon invisible" },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    ...{ onInput: (...[$event]) => {
            __VLS_ctx.emit('update:modelValue', $event.target.value);
        } },
    id: (__VLS_ctx.id),
    name: (__VLS_ctx.name),
    value: (__VLS_ctx.modelValue),
    placeholder: (__VLS_ctx.placeholder),
    autofocus: (__VLS_ctx.autofocus),
    autocomplete: (__VLS_ctx.autocomplete),
    required: (__VLS_ctx.required),
    disabled: (__VLS_ctx.disabled),
    ...{ class: (['form-control', __VLS_ctx.inputClass, { 'error': __VLS_ctx.error }]) },
    ...(__VLS_ctx.atts),
    ref: "input",
});
/** @type {typeof __VLS_ctx.input} */ ;
if (__VLS_ctx.modelValue) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.modelValue))
                    return;
                (__VLS_ctx.emit('update:modelValue', ''), __VLS_ctx.input && __VLS_ctx.input.focus());
            } },
        type: "button",
        ...{ class: "absolute end-0 top-1/2 -translate-y-1/2 flex items-center px-1 bg-transparent" },
        disabled: (__VLS_ctx.disabled),
        'aria-label': "Clear",
    });
    const __VLS_8 = {}.FgIcon;
    /** @type {[typeof __VLS_components.FgIcon, typeof __VLS_components.fgIcon, ]} */ ;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        icon: "bi-x",
    }));
    const __VLS_10 = __VLS_9({
        icon: "bi-x",
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
}
const __VLS_12 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    enterActiveClass: "transition ease-out duration-100",
    enterFromClass: "opacity-0 scale-95",
    enterToClass: "opacity-100 scale-100",
    leaveActiveClass: "transition ease-in duration-75",
    leaveFromClass: "opacity-100 scale-100",
    leaveToClass: "opacity-0 scale-95",
    persisted: true,
}));
const __VLS_14 = __VLS_13({
    enterActiveClass: "transition ease-out duration-100",
    enterFromClass: "opacity-0 scale-95",
    enterToClass: "opacity-100 scale-100",
    leaveActiveClass: "transition ease-in duration-75",
    leaveFromClass: "opacity-100 scale-100",
    leaveToClass: "opacity-0 scale-95",
    persisted: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ([
            'absolute z-10 mt-2 w-auto bg-white dark:bg-gray-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-600',
            __VLS_ctx.dropdownClass,
        ]) },
    ...(__VLS_ctx.dropdownAtts),
});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.open) }, null, null);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "bg-gray-100 dark:bg-gray-700 p-1" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "form-control-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "start-icon" },
});
const __VLS_16 = {}.FgIcon;
/** @type {[typeof __VLS_components.FgIcon, typeof __VLS_components.fgIcon, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    icon: "bi-search",
}));
const __VLS_18 = __VLS_17({
    icon: "bi-search",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "search",
    ...{ class: "form-control xs pill has-start-icon" },
    placeholder: (__VLS_ctx.localSearchPlaceholder),
});
(__VLS_ctx.searchTerm);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "grid grid-cols-5 gap-2 p-2" },
});
for (const [icon] of __VLS_getVForSourceType((__VLS_ctx.pageIcons))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.selectIcon(icon);
            } },
        type: "button",
        ...{ class: "flex items-center justify-center cursor-pointer p-2 rounded bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-600 [.active]:bg-primary [.active]:text-bg-primary" },
        ...{ class: ({ 'active': __VLS_ctx.modelValue === `bi-${icon}` }) },
        title: (icon),
    });
    const __VLS_20 = {}.Icon;
    /** @type {[typeof __VLS_components.Icon, ]} */ ;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
        icon: (`bi:${icon}`),
        ssr: (true),
    }));
    const __VLS_22 = __VLS_21({
        icon: (`bi:${icon}`),
        ssr: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
}
if (__VLS_ctx.pageIcons.length === 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "col-span-5 text-center py-4 text-gray-500" },
    });
    (__VLS_ctx.localNoIconsFound);
}
if (__VLS_ctx.pages > 1) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex-space-2 items-center justify-between text-xs bg-gray-100 dark:bg-gray-700 p-1" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.prevPage) },
        type: "button",
        ...{ class: "flex items-center justify-center rounded-full p-1 hover:bg-gray-200 dark:hover:bg-primary-600 transition-colors" },
        disabled: (__VLS_ctx.page === 1),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ class: "icon bi-chevron-left rtl:rotate-270" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.page);
    (__VLS_ctx.pages);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.nextPage) },
        type: "button",
        ...{ class: "flex items-center justify-center rounded-full p-1 hover:bg-gray-200 dark:hover:bg-primary-600 transition-colors" },
        disabled: (__VLS_ctx.page === __VLS_ctx.pages),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ class: "icon bi-chevron-right rtl:rotate-270" },
    });
}
var __VLS_15;
const __VLS_24 = {}.FgInfo;
/** @type {[typeof __VLS_components.FgInfo, typeof __VLS_components.fgInfo, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    info: (__VLS_ctx.info),
}));
const __VLS_26 = __VLS_25({
    info: (__VLS_ctx.info),
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
const __VLS_28 = {}.FgError;
/** @type {[typeof __VLS_components.FgError, typeof __VLS_components.fgError, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    error: (__VLS_ctx.error),
}));
const __VLS_30 = __VLS_29({
    error: (__VLS_ctx.error),
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
/** @type {__VLS_StyleScopedClasses['dropdown']} */ ;
/** @type {__VLS_StyleScopedClasses['inited']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-visible']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['error']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['invisible']} */ ;
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['error']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['end-0']} */ ;
/** @type {__VLS_StyleScopedClasses['top-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-y-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['px-1']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-transparent']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['z-10']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:border-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['p-1']} */ ;
/** @type {__VLS_StyleScopedClasses['form-control-container']} */ ;
/** @type {__VLS_StyleScopedClasses['start-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['xs']} */ ;
/** @type {__VLS_StyleScopedClasses['pill']} */ ;
/** @type {__VLS_StyleScopedClasses['has-start-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-5']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:hover:bg-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['[.active]:bg-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['[.active]:text-bg-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-space-2']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['p-1']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['p-1']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:hover:bg-primary-600']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['bi-chevron-left']} */ ;
/** @type {__VLS_StyleScopedClasses['rtl:rotate-270']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['p-1']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:hover:bg-primary-600']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['bi-chevron-right']} */ ;
/** @type {__VLS_StyleScopedClasses['rtl:rotate-270']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            vOnClickOutside: vOnClickOutside,
            Icon: Icon,
            FgLabel: FgLabel,
            FgIcon: FgIcon,
            FgError: FgError,
            FgInfo: FgInfo,
            emit: emit,
            id: id,
            localNoIconsFound: localNoIconsFound,
            localSearchPlaceholder: localSearchPlaceholder,
            searchTerm: searchTerm,
            open: open,
            page: page,
            input: input,
            pages: pages,
            pageIcons: pageIcons,
            selectIcon: selectIcon,
            prevPage: prevPage,
            nextPage: nextPage,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
