/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, provide, onMounted, watch } from 'vue';
import { AccordionContextKey } from '../types/fg-accordion.ts';
let idCounter = 0;
function generateId() {
    return `fg-accordion-item-${idCounter++}`;
}
provide('generateAccordionId', generateId);
const props = defineProps();
// Multiple attribute takes precedence
const mode = props.multiple ? 'multiple' : (props.mode || 'single');
const storageKey = props.storageKey || 'fg-accordion';
const persist = props.persist ?? true;
// State
const openItems = ref(new Set());
const heads = ref(new Map());
// Load persisted state
onMounted(() => {
    if (persist) {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            try {
                JSON.parse(saved).forEach((id) => openItems.value.add(id));
            }
            catch { }
            ;
        }
    }
});
// Persist to localStorage
watch(openItems, (set) => {
    if (persist) {
        localStorage.setItem(storageKey, JSON.stringify(Array.from(set)));
    }
}, { deep: true });
// Methods
function toggleItem(id) {
    if (openItems.value.has(id)) {
        openItems.value.delete(id);
    }
    else {
        if (mode === 'single')
            openItems.value.clear();
        openItems.value.add(id);
    }
}
function isItemOpen(id) {
    return openItems.value.has(id);
}
function registerHead(id, el) {
    heads.value.set(id, el);
}
function unregisterHead(id) {
    heads.value.delete(id);
}
function focusNext(id) {
    const keys = Array.from(heads.value.keys());
    const idx = keys.indexOf(id);
    const next = keys[(idx + 1) % keys.length];
    heads.value.get(next)?.focus();
}
function focusPrev(id) {
    const keys = Array.from(heads.value.keys());
    const idx = keys.indexOf(id);
    const prev = keys[(idx - 1 + keys.length) % keys.length];
    heads.value.get(prev)?.focus();
}
provide(AccordionContextKey, {
    openItems: openItems.value,
    toggleItem,
    isItemOpen,
    mode,
    registerHead,
    unregisterHead,
    focusNext,
    focusPrev,
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg divide-y divide-gray-200 dark:divide-gray-600" },
    role: "presentation",
});
var __VLS_0 = {};
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:border-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['divide-y']} */ ;
/** @type {__VLS_StyleScopedClasses['divide-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:divide-gray-600']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {};
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
