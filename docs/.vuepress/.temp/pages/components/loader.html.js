import comp from "/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/components/loader.html.vue"
const data = JSON.parse("{\"path\":\"/components/loader.html\",\"title\":\"Loader\",\"lang\":\"en-US\",\"frontmatter\":{},\"readingTime\":{\"minutes\":1.11,\"words\":334},\"filePathRelative\":\"components/loader.md\"}")
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
