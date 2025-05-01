/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref } from 'vue';
const tabs = [
    {
        id: "home",
        title: "Home",
        icon: "bi-house-fill",
    },
    {
        id: "profile",
        title: "Profile",
        icon: "bi-person-fill",
    },
    {
        id: "settings",
        title: "Settings",
        icon: "bi-gear-wide-connected",
    },
];
const currentTab = ref(0);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.FgTabs;
/** @type {[typeof __VLS_components.FgTabs, typeof __VLS_components.fgTabs, typeof __VLS_components.FgTabs, typeof __VLS_components.fgTabs, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.currentTab),
    tabs: (__VLS_ctx.tabs),
}));
const __VLS_2 = __VLS_1({
    modelValue: (__VLS_ctx.currentTab),
    tabs: (__VLS_ctx.tabs),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
{
    const { home: __VLS_thisSlot } = __VLS_3.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
}
{
    const { profile: __VLS_thisSlot } = __VLS_3.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
}
{
    const { settings: __VLS_thisSlot } = __VLS_3.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
}
var __VLS_3;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            tabs: tabs,
            currentTab: currentTab,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
