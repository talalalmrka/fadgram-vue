<script setup lang="ts">
defineOptions({ inheritAttrs: false });
defineProps<{
    error?: string;
}>();
</script>
<template>
    <div v-if="error" v-bind="$attrs" class="form-info error">
        {{ error }}
    </div>
</template>