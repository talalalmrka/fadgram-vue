<script setup lang="ts">
import { computed } from 'vue';
defineOptions({ inheritAttrs: false });
const props = defineProps<{
    icon?: string;
    label?: string;
    error?: string | boolean;
}>();
const hasLabel = computed(() => props.icon || props.label);
const isFlex = computed(() => props.icon && props.label);
</script>
<template>
    <label v-if="hasLabel" v-bind="$attrs" class="form-label" :class="{ 'error': error, 'flex-space-2': isFlex }">
        <i v-if="icon" class="icon" :class="icon"></i>
        <span v-if="label">{{ label }}</span>
    </label>
</template>