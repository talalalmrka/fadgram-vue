<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { vOnClickOutside } from '@vueuse/components'
import { Icon } from '@iconify/vue';
import FgLabel from './FgLabel.vue';
import FgIcon from './FgIcon.vue';
import FgError from './FgError.vue';
import FgInfo from './FgInfo.vue';
import biIcons from '@iconify-json/bi/icons.json';

// Static data outside the component to avoid re-computation
const biIconNames = Object.keys(biIcons.icons);

interface Props {
    id?: string;
    name?: string;
    modelValue?: string | null;
    icon?: string;
    label?: string | null;
    placeholder?: string;
    autofocus?: boolean;
    autocomplete?: string;
    required?: boolean;
    disabled?: boolean;
    inputClass?: string | null;
    atts?: Record<string, unknown>;
    info?: string;
    containerClass?: string | null;
    containerAtts?: Record<string, unknown>;
    groupClass?: string | null;
    groupAtts?: Record<string, unknown>;
    dropdownClass?: string | null;
    dropdownAtts?: Record<string, unknown>;
    size?: string | null;
    icons?: string[];
    perPage?: number;
    noIconsFound?: string;
    searchPlaceholder?: string;
    error?: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
    (e: 'change', value: string): void;
}>();
// Computed properties
const id = computed(() => props.id || `icon-picker-${Math.random().toString(36).slice(2, 10)}`);
const localIcons = computed(() => props.icons || biIconNames);
const localNoIconsFound = computed(() => props.noIconsFound ?? 'No icons found');
const localSearchPlaceholder = computed(() => props.searchPlaceholder ?? 'Search...');
const perPage = computed(() => props.perPage || 25);

// Reactive state
const searchTerm = ref('');
const open = ref(false);
const page = ref(1);
const input = ref<HTMLInputElement | null>(null);

// Debounced search term
const debouncedSearchTerm = ref('');
//let searchTimeout: number;
let searchTimeout: ReturnType<typeof setTimeout>;

watch(searchTerm, (newVal) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        debouncedSearchTerm.value = newVal.toLowerCase();
        page.value = 1;
    }, 150);
});

// Icon filtering and pagination
const filteredIcons = computed(() =>
    localIcons.value.filter(icon =>
        icon.toLowerCase().includes(debouncedSearchTerm.value)
    )
);

const pages = computed(() => Math.ceil(filteredIcons.value.length / perPage.value));
const pageIcons = computed(() =>
    filteredIcons.value.slice((page.value - 1) * perPage.value, page.value * perPage.value)
);

// Watch for modelValue changes including initial value
watch(() => props.modelValue, (newVal) => {
    if (newVal) {
        const cleanIcon = newVal.replace('bi-', '');
        const iconIndex = localIcons.value.indexOf(cleanIcon);
        if (iconIndex > -1) {
            // Calculate page number considering array index starts at 0
            page.value = Math.floor(iconIndex / perPage.value) + 1;
        }
    }
    emit('change', newVal ?? '');
}, { immediate: true });

// Methods
function selectIcon(icon: string) {
    emit('update:modelValue', `bi-${icon}`);
    open.value = false;
    searchTerm.value = '';
}
function prevPage() {
    page.value = Math.max(1, page.value - 1);
}

function nextPage() {
    page.value = Math.min(pages.value, page.value + 1);
}

// Focus management
onMounted(() => {
    if (props.autofocus && input.value) {
        input.value.focus();
    }
});
</script>

<template>
    <!-- Label -->
    <fg-label v-if="label" :for="id" :icon="icon" :required="required" :label="label" :error="error" />

    <!-- Container -->
    <div v-on-click-outside="() => (open = false)" :class="['dropdown inited overflow-visible w-full', containerClass]"
        v-bind="containerAtts">
        <!-- Input Group -->
        <div class="relative">
            <div class="input-group w-full" :class="[size, groupClass, { 'error': error }]" v-bind="groupAtts">
                <button type="button" :title="modelValue ?? ''" @click="open = !open" class="items-center">
                    <Icon v-if="modelValue" :icon="modelValue" class="inline-flex" :ssr="true" />
                    <i v-else class="icon invisible"></i>
                </button>
                <input :id="id" :name="name" :value="modelValue" :placeholder="placeholder" :autofocus="autofocus"
                    :autocomplete="autocomplete" :required="required" :disabled="disabled"
                    :class="['form-control', inputClass, { 'error': error }]" v-bind="atts" ref="input"
                    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
            </div>
            <button v-if="modelValue" type="button" @click="(emit('update:modelValue', ''), input && input.focus())"
                class="absolute end-0 top-1/2 -translate-y-1/2 flex items-center px-1 bg-transparent"
                :disabled="disabled" aria-label="Clear">
                <fg-icon icon="bi-x" />
            </button>
        </div>

        <!-- Dropdown -->
        <transition enter-active-class="transition ease-out duration-100" enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
            leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <div v-show="open" :class="[
                'absolute z-10 mt-2 w-auto bg-white dark:bg-gray-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-600',
                dropdownClass,
            ]" v-bind="dropdownAtts">
                <!-- Search -->
                <div class="bg-gray-100 dark:bg-gray-700 p-1">
                    <div class="form-control-container">
                        <span class="start-icon">
                            <fg-icon icon="bi-search" />
                        </span>
                        <input type="search" class="form-control xs pill has-start-icon" v-model="searchTerm"
                            :placeholder="localSearchPlaceholder" />
                    </div>
                </div>

                <!-- Icons Grid -->
                <div class="grid grid-cols-5 gap-2 p-2">
                    <template v-for="icon in pageIcons" :key="icon">
                        <span type="button" @click="selectIcon(icon)"
                            class="flex items-center justify-center cursor-pointer p-2 rounded bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-600 [.active]:bg-primary [.active]:text-bg-primary"
                            :class="{ 'active': modelValue === `bi-${icon}` }" :title="icon">
                            <Icon :icon="`bi:${icon}`" :ssr="true" />
                        </span>
                    </template>
                    <div v-if="pageIcons.length === 0" class="col-span-5 text-center py-4 text-gray-500">
                        {{ localNoIconsFound }}
                    </div>
                </div>

                <!-- Pagination -->
                <div v-if="pages > 1"
                    class="flex-space-2 items-center justify-between text-xs bg-gray-100 dark:bg-gray-700 p-1">
                    <button type="button"
                        class="flex items-center justify-center rounded-full p-1 hover:bg-gray-200 dark:hover:bg-primary-600 transition-colors"
                        @click.prevent="prevPage" :disabled="page === 1">
                        <i class="icon bi-chevron-left rtl:rotate-270"></i>
                    </button>
                    <span>{{ page }} / {{ pages }}</span>
                    <button type="button"
                        class="flex items-center justify-center rounded-full p-1 hover:bg-gray-200 dark:hover:bg-primary-600 transition-colors"
                        @click.prevent="nextPage" :disabled="page === pages">
                        <i class="icon bi-chevron-right rtl:rotate-270"></i>
                    </button>
                </div>
            </div>
        </transition>
        <fg-info :info="info" />
        <fg-error :error="error" />
    </div>
</template>