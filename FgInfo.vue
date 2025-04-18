<script setup lang="ts">
defineOptions({ inheritAttrs: false });
const props = defineProps<{
    info?: string;
}>();
</script>
<template>
    <div v-if="info" v-bind="$attrs" class="form-info">
        {{ info }}
    </div>
</template>