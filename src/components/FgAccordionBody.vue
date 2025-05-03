<script setup lang="ts">
import { ref, inject, computed } from 'vue';
import { AccordionContextKey, ItemIdKey } from '../types/fg-accordion';
import type { AccordionContext } from '../types/fg-accordion';
import { TransitionExpand } from '@morev/vue-transitions';



const ctx = inject<AccordionContext>(AccordionContextKey);
const id = inject<string>(ItemIdKey);
if (!ctx || !id) throw new Error('FgAccordionBody must be within FgAccordionItem');

const bodyEl = ref<HTMLElement>();
const isOpen = computed(() => ctx.isItemOpen(id));
</script>

<template>
    <transition-expand>
        <div v-show="isOpen" :id="`fg-accordion-body-${id}`"
            class="px-3 py-2 border-t border-gray-200 dark:border-gray-600" ref="bodyEl">
            <slot />
        </div>
    </transition-expand>
</template>