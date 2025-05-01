<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue';

// Tab definition
type Tab = {
    id: string;
    title: string;
    icon?: string;
};

// Props and Emits
const props = defineProps<{ tabs: Tab[]; modelValue?: number }>();
const emit = defineEmits<{
    (e: 'update:modelValue', value: number): void;
    (e: 'change', value: number): void;
}>();

// Reactive state
const activeIndex = ref(props.modelValue ?? 0);
const tabs = computed(() => props.tabs);

// Tab selection
const selectTab = (index: number) => {
    if (index === activeIndex.value) return;
    activeIndex.value = index;
    emit('update:modelValue', index);
    emit('change', index);
};

// Sync from outside
watch(() => props.modelValue, (newVal) => {
    if (newVal !== undefined && newVal !== activeIndex.value) {
        activeIndex.value = newVal;
    }
});

// Optional: focus management or keyboard nav
onMounted(() => {
    // Fadgram UI handles styling; add keyboard support here if desired
});
</script>

<template>
    <div v-bind="$attrs" class="tabs">
        <ul role="tablist">
            <li v-for="(tab, index) in tabs" :key="tab.title" role="presentation">
                <button :class="{ 'active': activeIndex === index }" role="tab" :aria-selected="activeIndex === index"
                    :aria-controls="`panel-${index}`" :id="`tab-${index}`" @click="selectTab(index)">
                    <fg-icon :icon="tab.icon" />
                    <span>{{ tab.title }}</span>
                </button>
            </li>
        </ul>
        <div class="tabs-content">
            <div v-for="(tab, index) in tabs" :key="tab.id" role="tabpanel" :aria-labelledby="`tab-${index}`"
                :id="`panel-${index}`" v-show="activeIndex === index" :class="{ 'active': activeIndex === index }">
                <slot :name="tab.id" />
            </div>
        </div>
    </div>
</template>
