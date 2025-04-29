<script setup lang="ts">
import { ref, onMounted, watch, nextTick, watchEffect, computed } from 'vue'
import Prism from 'prismjs';
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-liquid'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-scss'

import FgIcon from './FgIcon.vue';

interface Props {
    language?: string;
    languageLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
    language: 'html'
})

const prismRef = ref<HTMLElement | null>(null)
const isCopied = ref(false)

const getRawCode = () => {
    return prismRef.value?.querySelector('code')?.textContent || ''
}

const copyCode = async () => {
    try {
        await navigator.clipboard.writeText(getRawCode())
        isCopied.value = true
        setTimeout(() => isCopied.value = false, 2000)
    } catch (err) {
        console.error('Failed to copy:', err)
    }
}

watch(() => getRawCode(), () => {
    nextTick(() => {
        Prism.highlightAll()
    })
})
watchEffect(() => Prism.highlightAll())
onMounted(() => {
    Prism.highlightAll()
})
const getLanguage = computed(() => props.language === 'vue' ? 'html' : props.language);
const getLanguageLabel = computed(() => props.language);
</script>

<template>
    <div class="code-container" style="direction: ltr;">
        <div class="code-toolbar">
            <span class="code-file-name">{{ getLanguageLabel }}</span>
            <button @click="copyCode" class="hover:text-white">
                <fg-icon :icon="isCopied ? 'bi-clipboard-check-fill' : 'bi-clipboard'" />
            </button>
        </div>
        <pre
            ref="prismRef"><code :class="'language-' + getLanguage" data-prismjs-copy="Copy the C snippet!"><slot/></code></pre>
    </div>
</template>
<style scoped>
@import "tailwindcss";
@import "prismjs/themes/prism-okaidia.css";

pre[class*="language-"] {
    margin: 0 !important;
    padding: 0.7em !important;
}

code[class*="language-"],
pre[class*="language-"] {
    font-size: 13px !important;
    font-family: var(--font-mono) !important;
    overflow: auto;
}

:not(pre)>code[class*="language-"],
pre[class*="language-"] {
    background: transparent !important;
}

.icon {
    &.overview-card-icon {
        height: calc(var(--spacing) * 10) !important;
        width: calc(var(--spacing) * 10) !important;
    }
}

.code-container {
    @apply relative mt-4 bg-gray-800 rounded;
    direction: ltr;
}

.code-toolbar {
    @apply text-xs flex justify-between items-center text-gray-200 bg-gray-800 rounded-t px-2 py-1 border-b border-gray-700;
}

.btn-copy-code {
    @apply hover:text-white;
}
</style>