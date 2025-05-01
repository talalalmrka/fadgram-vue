/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, inject, computed, nextTick } from 'vue';
import { AccordionContextKey, ItemIdKey } from '../types/fg-accordion.ts';
import { TransitionExpand } from '@morev/vue-transitions';
const ctx = inject(AccordionContextKey);
const id = inject(ItemIdKey);
if (!ctx || !id)
    throw new Error('FgAccordionBody must be within FgAccordionItem');
const bodyEl = ref();
const isOpen = computed(() => ctx.isItemOpen(id));
const elScroll = ref(0);
function onEnter(el) {
    const htmlEl = el;
    htmlEl.style.height = '0px';
    nextTick(() => {
        elScroll.value = htmlEl.scrollHeight;
        htmlEl.style.height = elScroll.value + 'px';
    });
}
function onAfterEnter(el) {
    el.style.height = 'auto';
}
function onLeave(el) {
    const htmlEl = el;
    htmlEl.style.height = htmlEl.scrollHeight + 'px';
    nextTick(() => {
        htmlEl.style.height = '0px';
    });
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.TransitionExpand;
/** @type {[typeof __VLS_components.TransitionExpand, typeof __VLS_components.transitionExpand, typeof __VLS_components.TransitionExpand, typeof __VLS_components.transitionExpand, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    id: (`fg-accordion-body-${__VLS_ctx.id}`),
    ...{ class: "px-3 py-2 border-t border-gray-200 dark:border-gray-600" },
    ref: "bodyEl",
});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.isOpen) }, null, null);
/** @type {typeof __VLS_ctx.bodyEl} */ ;
var __VLS_5 = {};
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border-t']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:border-gray-600']} */ ;
// @ts-ignore
var __VLS_6 = __VLS_5;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            TransitionExpand: TransitionExpand,
            id: id,
            bodyEl: bodyEl,
            isOpen: isOpen,
        };
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
