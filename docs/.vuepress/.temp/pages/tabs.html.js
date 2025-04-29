import comp from "/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/tabs.html.vue"
const data = JSON.parse("{\"path\":\"/tabs.html\",\"title\":\"Tabs\",\"lang\":\"en-US\",\"frontmatter\":{},\"readingTime\":{\"minutes\":1.13,\"words\":340},\"filePathRelative\":\"tabs.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
