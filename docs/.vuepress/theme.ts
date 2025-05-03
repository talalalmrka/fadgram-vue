import { hopeTheme } from 'vuepress-theme-hope'

import navbar from './navbar'
import sidebar from './sidebar'

export default hopeTheme({
  hostname: 'https://talalalmrka.github.io/fadgram-vue/',
  /* 
  author: {
    name: 'Talal Almrka',
    email: 'talalminfo@gmail.com',
    url: 'https://github.com/talalalmrka',
  }, */
  license: 'MIT',
  logo: '/logo.png',
  favicon: '/favicon.ico',
  externalLinkIcon: false,
  repo: 'talalalmrka/fadgram-vue',
  pageInfo: ['Author', 'Category', 'Tag'],
  docsDir: 'src',
  darkmode: 'toggle',
  contributors: false,
  lastUpdated: false,
  editLink: false,
  // navbar
  navbar,
  navbarLayout: {
    start: ['Brand'],
    center: ['Search'],
    end: [
      'Repo',
      //'ColorModeSwitch',
      'Outlook',
    ],
  },
  // sidebar
  sidebar,

  //footer: 'Default footer',

  displayFooter: true,

  encrypt: {
    config: {
      '/demo/encrypt.html': {
        hint: 'Password: 1234',
        password: '1234',
      },
    },
  },

  metaLocales: {
    editLink: 'Edit this page on GitHub',
  },

  // These features are enabled for demo, only preserve features you need here
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: 'Recommended',
        replacer: ({ tag }) => {
          if (tag === 'em')
            return {
              tag: 'Badge',
              attrs: { type: 'tip' },
              content: 'Recommended',
            }
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
    highlighter: {
      type: 'prismjs',
      theme: 'vsc-dark-plus',
    },
    // uncomment these if you need TeX support
    // math: {
    //   // install katex before enabling it
    //   type: "katex",
    //   // or install mathjax-full before enabling it
    //   type: "mathjax",
    // },

    // install chart.js before enabling it
    // chartjs: true,

    // install echarts before enabling it
    // echarts: true,

    // install flowchart.ts before enabling it
    // flowchart: true,

    // install mermaid before enabling it
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // install @vue/repl before enabling it
    // vuePlayground: true,

    // install sandpack-vue3 before enabling it
    // sandpack: true,

    // install @vuepress/plugin-revealjs and uncomment these if you need slides
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
  },

  plugins: {
    copyCode: {
      showInMobile: true,
    },
    docsearch: {
      appId: 'EASLZ50AQS',
      apiKey: '77dec93712c7df375029d5edadbc7e74',
      indexName: 'talalalmrkaio',
    },
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    /* comment: {
      provider: 'Giscus',
      repo: 'vuepress-theme-hope/giscus-discussions',
      repoId: 'R_kgDOG_Pt2A',
      category: 'Announcements',
      categoryId: 'DIC_kwDOG_Pt2M4COD69',
    },

    components: {
      components: ['Badge', 'VPCard'],
    }, */

    icon: {
      // prefix: 'fa6-solid:',
      prefix: 'bi:',
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
    git: true,
  },
})
