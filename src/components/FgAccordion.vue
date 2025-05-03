<script setup lang="ts">
import { ref, provide, onMounted, watch } from 'vue';
import { AccordionContextKey, type AccordionContext } from '../types/fg-accordion';

let idCounter = 0;
function generateId() {
    return `fg-accordion-item-${idCounter++}`;
}

provide('generateAccordionId', generateId);

type Props = {
    mode?: AccordionContext['mode'];
    multiple?: boolean;
    storageKey?: string;
    persist?: boolean;
};
const props = defineProps<Props>();
// Multiple attribute takes precedence
const mode: AccordionContext['mode'] = props.multiple ? 'multiple' : (props.mode || 'single');
const storageKey = props.storageKey || 'fg-accordion';
const persist = props.persist ?? true;

// State
const openItems = ref<Set<string>>(new Set());
const heads = ref<Map<string, HTMLElement>>(new Map());

// Load persisted state
onMounted(() => {
    if (persist) {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            try { JSON.parse(saved).forEach((id: string) => openItems.value.add(id)); }
            catch { };
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
function toggleItem(id: string) {
    if (openItems.value.has(id)) {
        openItems.value.delete(id);
    } else {
        if (mode === 'single') openItems.value.clear();
        openItems.value.add(id);
    }
}
function isItemOpen(id: string) {
    return openItems.value.has(id);
}
function registerHead(id: string, el: HTMLElement) {
    heads.value.set(id, el);
}
function unregisterHead(id: string) {
    heads.value.delete(id);
}
function focusNext(id: string) {
    const keys = Array.from(heads.value.keys());
    const idx = keys.indexOf(id);
    const next = keys[(idx + 1) % keys.length];
    heads.value.get(next)?.focus();
}
function focusPrev(id: string) {
    const keys = Array.from(heads.value.keys());
    const idx = keys.indexOf(id);
    const prev = keys[(idx - 1 + keys.length) % keys.length];
    heads.value.get(prev)?.focus();
}

provide<AccordionContext>(AccordionContextKey, {
    openItems: openItems.value,
    toggleItem,
    isItemOpen,
    mode,
    registerHead,
    unregisterHead,
    focusNext,
    focusPrev,
});
</script>

<template>
    <div class="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg divide-y divide-gray-200 dark:divide-gray-600"
        role="presentation">
        <slot />
    </div>
</template>
