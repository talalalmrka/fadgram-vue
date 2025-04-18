<script setup lang="ts">
import { computed } from 'vue';
defineOptions({ inheritAttrs: false });
const props = defineProps<{
    error?: string;
}>();
</script>
<template>
    <div v-if="error" v-bind="$attrs" class="form-info error">
        {{ error }}
    </div>
</template>