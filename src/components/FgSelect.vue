<script setup lang="ts">
import { ref, watch } from 'vue';
import FgLabel from './FgLabel.vue';
import FgInfo from './FgInfo.vue';
import FgError from './FgError.vue';
defineOptions({ inheritAttrs: false });

interface Option { value: string | number; label: string; icon?: string; disabled?: boolean }
const props = defineProps<{
  id?: string;
  icon?: string;
  label?: string;
  info?: string;
  error?: string;
  options?: Option[];
  modelValue?: string | number | null;
  placeholder?: string;
  disabled?: boolean;
}>();
const emits = defineEmits<{
  (e: 'update:modelValue', val: string | number | null): void;
}>();

const selectId = ref(props.id || `fg-select-${Math.random().toString(36).substr(2, 9)}`);
const innerValue = ref(props.modelValue ?? null);
const selectRef = ref<HTMLSelectElement | null>(null);
defineExpose({ selectRef });

const options = ref<Option[]>(props.options || []);

watch(() => props.modelValue, val => innerValue.value = val ?? null);

function update(val: string | number | null) {
  emits('update:modelValue', val);
}
</script>
<template>
  <FgLabel :icon="icon" :label="label" :error="error" :for="selectId" />
  <select ref="selectRef" v-bind="$attrs" :id="selectId" v-model="innerValue" class="form-select"
    :class="error ? 'error' : ''" @change="update(($event.target as HTMLInputElement).value)">
    <option v-if="placeholder" value="">{{ placeholder }}</option>
    <option v-for="opt in options" :key="opt.value" :value="opt.value" :disabled="opt.disabled">
      <i v-if="opt.icon" class="icon" :class="opt.icon"></i> {{ opt.label }}
    </option>
  </select>
  <FgInfo :info="info" />
  <FgError :error="error" />
</template>