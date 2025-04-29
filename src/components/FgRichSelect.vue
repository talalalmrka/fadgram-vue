<script setup lang="ts">
import { ref, computed, nextTick, watch } from 'vue';
import { vOnClickOutside } from '@vueuse/components'
import { FgLabel, FgInfo, FgError, FgInput } from './';
defineOptions({ inheritAttrs: false });

interface Option { value: string | number; label: string; icon?: string; disabled?: boolean }

const props = withDefaults(defineProps<{
  id?: string;
  icon?: string;
  label?: string;
  info?: string;
  error?: string;
  options?: Option[];
  modelValue?: string | number | null;
  placeholder?: string;
  searchable?: boolean;
  searchPlaceholder?: string;
  clearable?: boolean;
  noResults?: string;
}>(), {
  id: undefined,
  options: () => [],
  modelValue: null,
  placeholder: 'Select an option',
  searchable: true,
  searchPlaceholder: 'Search...',
  clearable: true,
  noResults: 'No results found',
});

const emits = defineEmits<{
  (e: 'update:modelValue', value: string | number | null): void;
}>();
const selectId = ref(props.id || `fg-rich-select-${Math.random().toString(36).substr(2, 9)}`);
const isOpen = ref(false);
const searchTerm = ref('');
const highlightIndex = ref(0);
const placeholder = props.placeholder || 'اختر...';
const searchPlaceholder = props.searchPlaceholder || 'ابحث...';
const clearable = props.clearable ?? true;

const options = computed(() => props.options || []);
const filteredOptions = computed(() => {
  if (props.searchable && searchTerm.value)
    return options.value.filter(opt => opt.label.toString().toLowerCase().includes(searchTerm.value.toLowerCase()));
  return options.value;
});
const selectedOption = computed(() => options.value.find(opt => opt.value === props.modelValue) || null);

function toggle() {
  if (!options.value.length) return;
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    highlightIndex.value = 0;
    nextTick(() => document.querySelector<HTMLInputElement>(`#${selectId.value} input`)?.focus());
  }
}
function close() { isOpen.value = false; searchTerm.value = ''; }
function select(opt: Option) { if (!opt.disabled) { emits('update:modelValue', opt.value); close(); } }
function clear() { emits('update:modelValue', null); close(); }

function onKeydown(e: KeyboardEvent) {
  if (!isOpen.value && ['Enter', ' '].includes(e.key)) { toggle(); e.preventDefault(); return; }
  if (!isOpen.value) return;
  const len = filteredOptions.value.length;
  if (e.key === 'ArrowDown') { highlightIndex.value = (highlightIndex.value + 1) % len; e.preventDefault(); }
  else if (e.key === 'ArrowUp') { highlightIndex.value = (highlightIndex.value - 1 + len) % len; e.preventDefault(); }
  else if (e.key === 'Enter') { select(filteredOptions.value[highlightIndex.value]); e.preventDefault(); }
  else if (e.key === 'Escape') { close(); e.preventDefault(); }
}

watch(() => props.modelValue, () => searchTerm.value = '');

const selectRef = ref<HTMLElement | null>(null);
defineExpose({ selectRef });
</script>



<template>
  <div v-on-click-outside="close" ref="selectRef" v-bind="$attrs" class="relative" @keydown="onKeydown" @blur="close">
    <FgLabel :icon="icon" :label="label" :error="error" :for="selectId" />
    <div class="form-control-container">
      <div :id="selectId" tabindex="0" class="form-control has-end-icon" :class="{ 'error': error }" @click="toggle">
        <span class="flex-1 truncate">
          {{ selectedOption?.label || placeholder }}
        </span>
      </div>
      <div class="end-icon flex-space-1">
        <button v-if="selectedOption && clearable" @click.stop="clear" class="flex items-center"
          title="Clear selection">
          <i class="icon bi-x"></i>
        </button>
        <i class="icon bi-chevron-expand"></i>
      </div>
    </div>
    <transition name="fade">
      <ul v-if="isOpen"
        class="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto focus:outline-none p-0 list-none text-sm">
        <li v-if="searchable" class="px-3 py-2">
          <FgInput type="search" v-model="searchTerm" :placeholder="searchPlaceholder" startIcon="bi-search"
            class="xs" />
        </li>
        <li v-for="(opt, idx) in filteredOptions" :key="opt.value" @mouseenter="highlightIndex = idx"
          @click="select(opt)"
          class="px-3 py-2 cursor-pointer flex-space-2 justify-between hover:bg-primary-100 disabled:opacity-50 disabled:cursor-not-allowed [.active]:bg-primary [.active]:text-white dark:[.active]:bg-primary-500 [.active]:hover:bg-primary-600 dark:hover:[.active]:bg-primary-600"
          :class="{
            //'bg-primary-100': highlightIndex === idx,
            //'opacity-50 cursor-not-allowed': opt.disabled,
            'active': opt.value === selectedOption?.value,
          }">
          <span class="grow">
            <i v-if="opt.icon" class="icon" :class="opt.icon"></i>
            <span class="truncate">{{ opt.label }}</span>
          </span>
          <span v-if="opt.value === selectedOption?.value"><i class="icon bi-check"></i></span>
        </li>
        <li v-if="filteredOptions.length === 0" class="px-3 py-2 text-gray-500">
          {{ noResults }}
        </li>
      </ul>
    </transition>
    <FgInfo :info="info" />
    <FgError :error="error" />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>