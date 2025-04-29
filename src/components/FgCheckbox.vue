<script setup lang="ts">
import { computed, ref } from 'vue';
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
  modelValue?: any;
  value?: any;
  uncheckedValue?: any;
  disabled?: boolean;
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', val: any): void;
}>();

const fieldId = props.id || `checkbox-${Math.random().toString(36).slice(2, 11)}`;
const checkboxRef = ref<HTMLInputElement | null>(null);
defineExpose({ checkboxRef });

const isChecked = computed(() => {
  if (Array.isArray(props.modelValue)) {
    // Group mode: check if value exists in array
    return props.value !== undefined && props.modelValue.includes(props.value);
  }
  if (props.value !== undefined) {
    // Single value mode: compare with modelValue
    return props.modelValue === props.value;
  }
  // Default boolean mode
  return Boolean(props.modelValue);
});

function update(checked: boolean) {
  let newValue: any;

  if (Array.isArray(props.modelValue)) {
    // Group array logic
    newValue = [...props.modelValue];
    if (checked) {
      if (!newValue.includes(props.value)) {
        newValue.push(props.value);
      }
    } else {
      newValue = newValue.filter((item: any) => item !== props.value);
    }
  } else if (props.value !== undefined) {
    // Single value mode
    newValue = checked ? props.value : props.uncheckedValue;
  } else {
    // Default boolean toggle
    newValue = !props.modelValue;
  }

  emits('update:modelValue', newValue);
}
</script>

<template>
  <div class="form-check" :class="{ 'error': error }">
    <input ref="checkboxRef" v-bind="$attrs" type="checkbox" :id="fieldId" :checked="isChecked" :disabled="disabled"
      @change="update(($event.currentTarget as HTMLInputElement).checked)" />
    <fg-label :icon="icon" :label="label" :error="error" :for="fieldId" />
  </div>
  <fg-info :info="info" />
  <fg-error :error="error" />
</template>