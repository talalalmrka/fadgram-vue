/* FgAccordionItem.vue */
<script setup lang="ts">
import { provide, inject, computed } from 'vue';
import { AccordionContextKey, ItemIdKey } from '../types/fg-accordion.ts';
import type { AccordionContext } from '../types/fg-accordion.ts';
import FgAccordionHead from './FgAccordionHead.vue';

const props = defineProps<{
    id?: string;
    title?: string;
    icon?: string;
}>();
const ctx = inject<AccordionContext>(AccordionContextKey);
if (!ctx) throw new Error('FgAccordionItem must be within FgAccordion');

const generateId = inject<() => string>('generateAccordionId');
const itemId = props.id || (generateId?.() ?? Math.random().toString(36).slice(2));

provide<string>(ItemIdKey, itemId);
const isOpen = computed(() => ctx.isItemOpen(itemId));
const hasTitle = computed(() => props.title || props.icon)
</script>

<template>
    <div class="accordion-item" :class="{ 'active': isOpen }">
        <fg-accordion-head v-if="hasTitle" :icon="icon" :title="title" />
        <slot />
    </div>
</template>