<script setup lang="ts">
import { ref, watch } from 'vue';
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
  modelValue?: boolean;
  disabled?: boolean;
}>();
const emits = defineEmits<{
  (e: 'update:modelValue', val: boolean): void;
}>();

const fieldId = ref(props.id || `checkbox-${Math.random().toString(36).substr(2, 9)}`);
const innerValue = ref(props.modelValue ?? false);
const checkboxRef = ref<HTMLInputElement | null>(null);
defineExpose({ checkboxRef });

watch(() => props.modelValue, val => innerValue.value = val ?? false);

function update(val: boolean) {
  emits('update:modelValue', val);
}
</script>

<template>
  <div class="form-check" :class="{ 'error': error }">
    <input ref="checkboxRef" v-bind="$attrs" type="checkbox" :id="fieldId" :checked="innerValue" :disabled="disabled"
      @change="update(($event.currentTarget as HTMLInputElement).checked)" />
    <FgLabel :icon="icon" :label="label" :error="error" :for="fieldId" />
  </div>
  <FgInfo :info="info" />
  <FgError :error="error" />
</template>