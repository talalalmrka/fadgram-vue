<script setup lang="ts">
defineProps<{
    icon?: string;
}>();
</script>
<template>
    <i v-if="icon" class="icon" :class="icon"></i>
</template>