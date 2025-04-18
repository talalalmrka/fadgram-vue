<script setup lang="ts">
import { ref, watch } from 'vue';
import FgInfo from './FgInfo.vue';
import FgError from './FgError.vue';
defineOptions({ inheritAttrs: false });

interface Option { value: string | number; label: string; disabled?: boolean }
const props = defineProps<{
  id?: string;
  icon?: string | null;
  label?: string;
  info?: string;
  error?: string;
  options?: Option[];
  modelValue?: string | number;
}>();
const emits = defineEmits<{
  (e: 'update:modelValue', val: string | number): void;
}>();

const fieldId = ref(props.id || `radio-${Math.random().toString(36).substr(2, 9)}`);
const options = props.options || [];
const innerValue = ref(props.modelValue ?? null);
const radioRef = ref<HTMLInputElement | null>(null);
defineExpose({ radioRef });

watch(() => props.modelValue, val => innerValue.value = val ?? null);

function update(val: string | number) {
  emits('update:modelValue', val);
}
</script>

<template>
  <fieldset>
    <legend v-if="label || icon" class="form-label" :class="{ 'flex-space-2': icon && label }">
      <i v-if="icon" class="icon" :class="icon"></i>
      <span>{{ label }}</span>
    </legend>
    <div v-for="opt in options" :key="opt.value" class="form-radio"
      :class="opt.disabled ? 'opacity-50 cursor-not-allowed' : ''">
      <input ref="radioRef" v-bind="$attrs" :id="fieldId + '-' + opt.value" type="radio" :name="fieldId" :value="opt.value"
        :checked="opt.value === innerValue" :disabled="opt.disabled" @change="update(opt.value)" />
      <label :for="fieldId + '-' + opt.value" class="form-label">{{ opt.label }}</label>
    </div>
  </fieldset>
  <FgInfo :info="info" />
  <FgError :error="error" />
</template>