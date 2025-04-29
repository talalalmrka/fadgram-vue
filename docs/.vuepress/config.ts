import { viteBundler } from '@vuepress/bundler-vite'
//import { defaultTheme } from '@vuepress/theme-default'
import { hopeTheme } from 'vuepress-theme-hope'
import { defineUserConfig } from 'vuepress'
import { fileURLToPath, URL } from 'node:url'
import { markdownTabPlugin } from '@vuepress/plugin-markdown-tab'
//import { getDirname, path } from 'vuepress/utils'

//import { markdownIncludePlugin } from '@vuepress/plugin-markdown-include'

import tailwindcss from '@tailwindcss/vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Fadgram Vue',
  description: 'Vue 3 components library with powerfull features compatible with tailwind css 4',
  pagePatterns: ['**/*.md', '!**/*.snippet.md', '!.vuepress', '!node_modules'],
  theme: hopeTheme({
    logo: '/images/logo.png',
    externalLinkIcon: false,
    repo: 'talalalmrka/fadgram-vue',
    pageInfo: ['Author', 'Category', 'Tag', 'ReadingTime'],
    markdown: {
      include: true,
      codeTabs: true,
      tabs: true,
    },
    navbar: [
      {
        text: 'Home',
        icon: 'bi-house-fill',
        link: '/',
      },
      {
        text: 'Get started',
        icon: 'bi-lightbulb-fill',
        link: '/get-started.md',
      },
    ],
    sidebar: [
      {
        text: 'Get started',
        children: [
          {
            text: 'Introduction',
            icon: 'bi-lightbulb-fill',
            link: '/get-started',
          },
        ],
      },
      {
        text: 'Components',
        children: [
          {
            text: 'Accordion',
            icon: 'bi-arrows-collapse',
            link: '/components/accordion',
          },
          {
            text: 'Alert',
            icon: 'bi-info-square',
            link: '/components/alert',
          },
          {
            text: 'Icon',
            icon: 'bi-emoji-smile-fill',
            link: '/components/icon',
          },
          {
            text: 'Loader',
            icon: 'bi-arrow-repeat',
            link: '/components/loader',
          },
        ],
      },
      {
        text: 'Form',
        children: [
          {
            text: 'Label',
            icon: 'bi-tag',
            link: '/components/form/label',
          },
          {
            text: 'Error',
            icon: 'bi-exclamation-circle',
            link: '/components/form/error',
          },
          {
            text: 'Info',
            icon: 'bi-info-circle',
            link: '/components/form/info',
          },
          {
            text: 'Input',
            icon: 'bi-input-cursor',
            link: '/components/form/input',
          },
          {
            text: 'Textarea',
            icon: 'bi-textarea-resize',
            link: '/components/form/textarea',
          },
          {
            text: 'Select',
            icon: 'bi-list',
            link: '/components/form/select',
          },
          {
            text: 'Rich select',
            icon: 'bi-list-check',
            link: '/components/form/rich-select',
          },
          {
            text: 'Checkbox',
            icon: 'bi-check-square',
            link: '/components/form/checkbox',
          },
          {
            text: 'Switch',
            icon: 'bi-toggle-on',
            link: '/components/form/switch',
          },
          {
            text: 'Radio',
            icon: 'bi-circle',
            link: '/components/form/radio',
          },
          {
            text: 'Icon Picker',
            icon: 'bi-palette',
            link: '/components/form/icon-picker',
          },
        ],
      },
    ],
  }),
  bundler: viteBundler({
    viteOptions: {
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('../../src', import.meta.url)),
        },
      },
    },
  }),
  plugins: [
    /*markdownTabPlugin({
      codeTabs: true,
      tabs: true,
    }),*/
    //markdownIncludePlugin({}),
  ],
  //theme: defaultTheme(),
})
