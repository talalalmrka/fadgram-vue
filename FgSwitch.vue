<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import FgInfo from './FgInfo.vue';
import FgError from './FgError.vue';
defineOptions({ inheritAttrs: false });

const props = defineProps<{
  id?: string;
  icon?: string | null;
  label?: string;
  info?: string;
  error?: string;
  modelValue?: boolean;
  disabled?: boolean;
}>();
const emits = defineEmits<{
  (e: 'update:modelValue', val: boolean): void;
}>();

const fieldId = ref(props.id || `toggle-${Math.random().toString(36).substr(2, 9)}`);
const innerValue = ref(props.modelValue ?? false);
const toggleRef = ref<HTMLInputElement | null>(null);
const isFlex = computed(() => props.icon && props.label);

defineExpose({ toggleRef });

watch(() => props.modelValue, val => innerValue.value = val ?? false);

function update(val: boolean) {
  emits('update:modelValue', val);
}
</script>
<template>
  <label :for="fieldId" class="form-switch" :class="{ 'error': error }">
    <input ref="toggleRef" v-bind="$attrs" type="checkbox" :id="fieldId" :checked="innerValue" :disabled="disabled"
      @change="update(($event.target as HTMLInputElement).checked)" />
    <span class="toggle-slider"></span>
    <span class="form-switch-label" :class="{ 'flex-space-2': isFlex }">
      <i v-if="icon" class="icon" :class="icon"></i>
      <span v-if="label">{{ label }}</span>
    </span>
  </label>
  <FgInfo :info="info" />
  <FgError :error="error" />
</template>