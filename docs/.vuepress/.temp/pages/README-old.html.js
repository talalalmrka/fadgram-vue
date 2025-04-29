import comp from "/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/README-old.html.vue"
const data = JSON.parse("{\"path\":\"/README-old.html\",\"title\":\"Hello VuePress\",\"lang\":\"en-US\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0.01,\"words\":2},\"filePathRelative\":\"README-old.md\"}")
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
