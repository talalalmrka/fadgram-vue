/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, watch, onMounted, computed } from 'vue';
const props = defineProps();
const emit = defineEmits();
// Reactive state
const activeIndex = ref(props.modelValue ?? 0);
const tabs = computed(() => props.tabs);
// Tab selection
const selectTab = (index) => {
    if (index === activeIndex.value)
        return;
    activeIndex.value = index;
    emit('update:modelValue', index);
    emit('change', index);
};
// Sync from outside
watch(() => props.modelValue, (newVal) => {
    if (newVal !== undefined && newVal !== activeIndex.value) {
        activeIndex.value = newVal;
    }
});
// Optional: focus management or keyboard nav
onMounted(() => {
    // Fadgram UI handles styling; add keyboard support here if desired
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "tabs" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    role: "tablist",
});
for (const [tab, index] of __VLS_getVForSourceType((__VLS_ctx.tabs))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        key: (tab.title),
        role: "presentation",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.selectTab(index);
            } },
        ...{ class: ({ 'active': __VLS_ctx.activeIndex === index }) },
        role: "tab",
        'aria-selected': (__VLS_ctx.activeIndex === index),
        'aria-controls': (`panel-${index}`),
        id: (`tab-${index}`),
    });
    const __VLS_0 = {}.FgIcon;
    /** @type {[typeof __VLS_components.FgIcon, typeof __VLS_components.fgIcon, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        icon: (tab.icon),
    }));
    const __VLS_2 = __VLS_1({
        icon: (tab.icon),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (tab.title);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "tabs-content" },
});
for (const [tab, index] of __VLS_getVForSourceType((__VLS_ctx.tabs))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: (tab.id),
        role: "tabpanel",
        'aria-labelledby': (`tab-${index}`),
        id: (`panel-${index}`),
        ...{ class: ({ 'active': __VLS_ctx.activeIndex === index }) },
    });
    __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.activeIndex === index) }, null, null);
    var __VLS_4 = {};
    var __VLS_5 = __VLS_tryAsConstant(tab.id);
}
/** @type {__VLS_StyleScopedClasses['tabs']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['tabs-content']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
// @ts-ignore
var __VLS_6 = __VLS_5, __VLS_7 = __VLS_4;
[__VLS_dollars.$attrs,];
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            activeIndex: activeIndex,
            tabs: tabs,
            selectTab: selectTab,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
