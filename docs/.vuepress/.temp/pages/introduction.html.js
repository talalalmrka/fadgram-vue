import comp from "/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/introduction.html.vue"
const data = JSON.parse("{\"path\":\"/introduction.html\",\"title\":\"Introduction\",\"lang\":\"en-US\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0.94,\"words\":283},\"filePathRelative\":\"introduction.md\"}")
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
