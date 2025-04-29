<script setup lang="ts">
import { ref, inject, onMounted, onUnmounted, computed, useSlots } from 'vue';
import { AccordionContextKey, ItemIdKey } from '../types/fg-accordion.ts';
import type { AccordionContext } from '../types/fg-accordion.ts';
import FgIcon from './FgIcon.vue';
const props = defineProps<{ title?: string; icon?: string }>();
const slots = useSlots()
const hasDefaultSlot = computed(() => !!slots.default)
const ctx = inject<AccordionContext>(AccordionContextKey);
const id = inject<string>(ItemIdKey);
if (!ctx || !id) throw new Error('FgAccordionHead must be within FgAccordionItem');

const btn = ref<HTMLElement>();
const isOpen = computed(() => ctx.isItemOpen(id));
const hasContent = computed(() => props.title || props.icon)
function onClick() { ctx!.toggleItem(id!); }
function onKeydown(e: KeyboardEvent) {
    switch (e.key) {
        case 'ArrowDown': e.preventDefault(); ctx!.focusNext(id!); break;
        case 'ArrowUp': e.preventDefault(); ctx!.focusPrev(id!); break;
        case 'Enter':
        case ' ': e.preventDefault(); ctx!.toggleItem(id!); break;
    }
}

onMounted(() => ctx.registerHead(id!, btn.value!));
onUnmounted(() => ctx.unregisterHead(id!));
</script>

<template>
    <button ref="btn" @click="onClick" @keydown="onKeydown" :aria-expanded="isOpen"
        :aria-controls="`fg-accordion-body-${id}`" class="accordion-header">
        <slot v-if="hasDefaultSlot" />
        <div v-if="hasContent" class="flex-space-2">
            <fg-icon v-if="icon" :icon="icon" />
            <span v-if="title">{{ title }}</span>
        </div>
    </button>
</template>