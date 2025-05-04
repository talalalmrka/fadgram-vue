<script setup lang="ts">
defineProps<{
    title?: string;
    icon?: string;
}>();
</script>

<template>
    <div v-bind="$attrs" class="card">
        <div class="card-header" v-if="(title || icon) && !$slots.header">
            <div class="card-title flex-space-2">
                <fg-icon :icon="icon" />
                <span v-if="title">{{ title }}</span>
            </div>
        </div>
        <div class="card-header" v-if="$slots.header">
            <slot name="header" />
        </div>
        <div class="card-body">
            <slot />
        </div>
        <div class="card-footer" v-if="$slots.footer">
            <slot name="footer" />
        </div>
    </div>
</template>