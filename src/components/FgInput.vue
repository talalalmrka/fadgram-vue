<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import FgLabel from './FgLabel.vue';
import FgInfo from './FgInfo.vue';
import FgError from './FgError.vue';
defineOptions({ inheritAttrs: false });

const props = defineProps<{
    id?: string;
    icon?: string;
    label?: string;
    info?: string;
    error?: string;
    size?: string,
    modelValue?: string | number;
    placeholder?: string;
    disabled?: boolean;
    type?: string;
    startIcon?: string;
    endIcon?: string;
}>();
const emits = defineEmits<{
    (e: 'update:modelValue', val: string | number): void;
}>();

const fieldId = ref(props.id || `input-${Math.random().toString(36).substr(2, 9)}`);
const fieldType = ref(props.type || 'text');
const innerValue = ref(props.modelValue ?? '');
const inputRef = ref<HTMLInputElement | null>(null);
const showPassword = ref(false); // Track password visibility

const hasIcon = computed(() => props.startIcon || props.endIcon || props.type === 'password'); // Include password type

defineExpose({ inputRef });

watch(() => props.modelValue, val => innerValue.value = val ?? '');

function update(val: string | number) {
    emits('update:modelValue', val);
}

// Toggle password visibility
const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
    fieldType.value = showPassword.value ? 'text' : 'password';
};
</script>

<template>
    <FgLabel :icon="icon" :label="label" :error="error" :for="fieldId" />
    <div v-if="hasIcon" class="form-control-container">
        <span v-if="startIcon" class="start-icon">
            <i class="icon" :class="startIcon"></i>
        </span>
        <input ref="inputRef" v-bind="$attrs" :id="fieldId" :type="fieldType" v-model="innerValue"
            :placeholder="placeholder" :disabled="disabled" class="form-control"
            :class="[size, { 'error': error, 'has-start-icon': startIcon, 'has-end-icon': endIcon || type === 'password' }]"
            @input="update(($event.target as HTMLInputElement).value)" />
        <button type="button" v-if="type === 'password'" class="end-icon btn-password-toggle"
            @click="togglePasswordVisibility">
            <i class="icon" :class="showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'"></i>
        </button>
        <span v-else-if="endIcon" class="end-icon">
            <i class="icon" :class="endIcon"></i>
        </span>
    </div>
    <input v-if="!hasIcon" ref="inputRef" v-bind="$attrs" :id="fieldId" :type="fieldType" v-model="innerValue"
        :placeholder="placeholder" :disabled="disabled" class="form-control" :class="[size, { 'error': error }]"
        @input="update(($event.target as HTMLInputElement).value)" />
    <fg-info :info="info" />
    <fg-error :error="error" />
</template>