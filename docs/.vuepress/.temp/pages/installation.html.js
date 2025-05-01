import comp from "/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/installation.html.vue"
const data = JSON.parse("{\"path\":\"/installation.html\",\"title\":\"Installation\",\"lang\":\"en-US\",\"frontmatter\":{\"next\":\"./components/accordion.md\"},\"readingTime\":{\"minutes\":0.68,\"words\":204},\"filePathRelative\":\"installation.md\"}")
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
