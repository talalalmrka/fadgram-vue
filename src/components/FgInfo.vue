<script setup lang="ts">
defineOptions({ inheritAttrs: false });
defineProps<{
    info?: string;
}>();
</script>
<template>
    <div v-if="info" v-bind="$attrs" class="form-info">
        {{ info }}
    </div>
</template>