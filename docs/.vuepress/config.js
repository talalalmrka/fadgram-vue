import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';
import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import theme from './theme.js';
export default defineUserConfig({
    base: '/fadgram-vue/',
    lang: 'en-US',
    title: 'Fadgram Vue',
    description: 'Vue 3 components library with powerfull features compatible with tailwind css 4',
    pagePatterns: ['**/*.md', '!**/*.snippet.md', '!.vuepress', '!node_modules'],
    theme,
    //theme: hopeTheme({}),
    bundler: viteBundler({
        viteOptions: {
            base: '/fadgram-vue/',
            plugins: [tailwindcss()],
            resolve: {
                alias: {
                    '@': fileURLToPath(new URL('../../src', import.meta.url)),
                },
            },
        },
    }),
    // Enable it with pwa
    // shouldPrefetch: false,
});
