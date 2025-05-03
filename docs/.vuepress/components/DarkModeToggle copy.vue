<script setup lang="ts">
import { useDarkMode, useToggleDarkMode } from '@vuepress/helper/client'
import { watchEffect } from 'vue'

/**
 * useDarkMode() returns a Ref<boolean>:
 *  - true  = dark mode active
 *  - false = light mode active
 * It also handles writing to localStorage under the hood.
 */
const isDark = useDarkMode()

const toggle = useToggleDarkMode()

// (Optional) react if user or system changes mode elsewhere
watchEffect(() => {
    // you could do side‑effects here if needed
    // console.log('Dark now?', isDark.value)
})
</script>

<template>
    <button type="button" @click="toggle()">
        <fg-icon v-show="isDark" icon="bi-sun" />
        <fg-icon v-show="!isDark" icon="bi-moon" />
    </button>
</template>