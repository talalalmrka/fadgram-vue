/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { provide, inject, computed } from 'vue';
import { AccordionContextKey, ItemIdKey } from '../types/fg-accordion.ts';
import FgAccordionHead from './FgAccordionHead.vue';
const props = defineProps();
const ctx = inject(AccordionContextKey);
if (!ctx)
    throw new Error('FgAccordionItem must be within FgAccordion');
const generateId = inject('generateAccordionId');
const itemId = props.id || (generateId?.() ?? Math.random().toString(36).slice(2));
provide(ItemIdKey, itemId);
const isOpen = computed(() => ctx.isItemOpen(itemId));
const hasTitle = computed(() => props.title || props.icon);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "accordion-item" },
    ...{ class: ({ 'active': __VLS_ctx.isOpen }) },
});
if (__VLS_ctx.hasTitle) {
    /** @type {[typeof FgAccordionHead, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(FgAccordionHead, new FgAccordionHead({
        icon: (__VLS_ctx.icon),
        title: (__VLS_ctx.title),
    }));
    const __VLS_1 = __VLS_0({
        icon: (__VLS_ctx.icon),
        title: (__VLS_ctx.title),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
}
var __VLS_3 = {};
/** @type {__VLS_StyleScopedClasses['accordion-item']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
// @ts-ignore
var __VLS_4 = __VLS_3;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            FgAccordionHead: FgAccordionHead,
            isOpen: isOpen,
            hasTitle: hasTitle,
        };
    },
    __typeProps: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
