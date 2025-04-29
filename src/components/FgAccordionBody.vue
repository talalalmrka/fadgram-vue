<script setup lang="ts">
import { ref, inject, computed, nextTick } from 'vue';
import { AccordionContextKey, ItemIdKey } from '../types/fg-accordion.ts';
import type { AccordionContext } from '../types/fg-accordion.ts';
import { TransitionExpand } from '@morev/vue-transitions';



const ctx = inject<AccordionContext>(AccordionContextKey);
const id = inject<string>(ItemIdKey);
if (!ctx || !id) throw new Error('FgAccordionBody must be within FgAccordionItem');

const bodyEl = ref<HTMLElement>();
const isOpen = computed(() => ctx.isItemOpen(id));
const elScroll = ref(0);

function onEnter(el: Element) {
    const htmlEl = el as HTMLElement;
    htmlEl.style.height = '0px';
    nextTick(() => {
        elScroll.value = htmlEl.scrollHeight;
        htmlEl.style.height = elScroll.value + 'px';
    });
}
function onAfterEnter(el: Element) {
    (el as HTMLElement).style.height = 'auto';
}
function onLeave(el: Element) {
    const htmlEl = el as HTMLElement;
    htmlEl.style.height = htmlEl.scrollHeight + 'px';
    nextTick(() => {
        htmlEl.style.height = '0px';
    });
}
</script>

<template>
    <transition-expand>
        <div v-show="isOpen" :id="`fg-accordion-body-${id}`"
            class="px-3 py-2 border-t border-gray-200 dark:border-gray-600" ref="bodyEl">
            <slot />
        </div>
    </transition-expand>
</template>