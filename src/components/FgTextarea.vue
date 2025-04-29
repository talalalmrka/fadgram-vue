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
  modelValue?: string;
  placeholder?: string;
  rows?: string | number;
  disabled?: boolean;
}>();
const emits = defineEmits<{
  (e: 'update:modelValue', val: string): void;
}>();

const fieldId = ref(props.id || `textarea-${Math.random().toString(36).substr(2, 9)}`);
const rows = props.rows ?? 4;
const innerValue = ref(props.modelValue ?? '');
const textareaRef = ref<HTMLTextAreaElement | null>(null);
defineExpose({ textareaRef });

watch(() => props.modelValue, val => innerValue.value = val ?? '');

function update(val: string) {
  emits('update:modelValue', val);
}
</script>
<template>
  <FgLabel :icon="icon" :label="label" :error="error" :for="fieldId" />
  <textarea ref="textareaRef" v-bind="$attrs" :id="fieldId" v-model="innerValue" :placeholder="placeholder" :rows="rows"
    :disabled="disabled" class="form-control" :class="error ? 'error' : ''"
    @input="update(($event.target as HTMLInputElement).value)"></textarea>
  <FgInfo :info="info" />
  <FgError :error="error" />

</template>
