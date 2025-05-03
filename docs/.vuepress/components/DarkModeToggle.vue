<script setup lang="ts">
import { useDarkMode } from "@vuepress/helper/client";
//import { useDarkMode } from 'vuepress-theme-hope/lib/client/composables/index.js'
//const { isDarkMode: isDark, toggleDarkMode } = useDarkMode();
const isDarkMode = useDarkMode();

console.log(isDarkMode.value);
function toggle() {
    console.log('toggle');
    isDarkMode.value = !isDarkMode.value

}
</script>

<style scoped>
.dark-toggle {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    font-size: 1.25rem;
    line-height: 1;
    transition: opacity 0.3s;
}

.dark-toggle:hover {
    opacity: 0.8;
}
</style>
<template>
    <button @click="toggle" class="dark-toggle"
        :aria-label="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
        <span v-if="isDarkMode">🌙</span>
        <span v-else>☀️</span>
    </button>
</template>
