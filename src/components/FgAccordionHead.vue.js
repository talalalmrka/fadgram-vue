/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, inject, onMounted, onUnmounted, computed, useSlots } from 'vue';
import { AccordionContextKey, ItemIdKey } from '../types/fg-accordion.ts';
import FgIcon from './FgIcon.vue';
const props = defineProps();
const slots = useSlots();
const hasDefaultSlot = computed(() => !!slots.default);
const ctx = inject(AccordionContextKey);
const id = inject(ItemIdKey);
if (!ctx || !id)
    throw new Error('FgAccordionHead must be within FgAccordionItem');
const btn = ref();
const isOpen = computed(() => ctx.isItemOpen(id));
const hasContent = computed(() => props.title || props.icon);
function onClick() { ctx.toggleItem(id); }
function onKeydown(e) {
    switch (e.key) {
        case 'ArrowDown':
            e.preventDefault();
            ctx.focusNext(id);
            break;
        case 'ArrowUp':
            e.preventDefault();
            ctx.focusPrev(id);
            break;
        case 'Enter':
        case ' ':
            e.preventDefault();
            ctx.toggleItem(id);
            break;
    }
}
onMounted(() => ctx.registerHead(id, btn.value));
onUnmounted(() => ctx.unregisterHead(id));
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.onClick) },
    ...{ onKeydown: (__VLS_ctx.onKeydown) },
    ref: "btn",
    'aria-expanded': (__VLS_ctx.isOpen),
    'aria-controls': (`fg-accordion-body-${__VLS_ctx.id}`),
    ...{ class: "accordion-header" },
});
/** @type {typeof __VLS_ctx.btn} */ ;
if (__VLS_ctx.hasDefaultSlot) {
    var __VLS_0 = {};
}
if (__VLS_ctx.hasContent) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex-space-2" },
    });
    if (__VLS_ctx.icon) {
        /** @type {[typeof FgIcon, ]} */ ;
        // @ts-ignore
        const __VLS_2 = __VLS_asFunctionalComponent(FgIcon, new FgIcon({
            icon: (__VLS_ctx.icon),
        }));
        const __VLS_3 = __VLS_2({
            icon: (__VLS_ctx.icon),
        }, ...__VLS_functionalComponentArgsRest(__VLS_2));
    }
    if (__VLS_ctx.title) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.title);
    }
}
/** @type {__VLS_StyleScopedClasses['accordion-header']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-space-2']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            FgIcon: FgIcon,
            hasDefaultSlot: hasDefaultSlot,
            id: id,
            btn: btn,
            isOpen: isOpen,
            hasContent: hasContent,
            onClick: onClick,
            onKeydown: onKeydown,
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
