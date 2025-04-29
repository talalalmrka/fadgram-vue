import comp from "/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/components/form/form.html.vue"
const data = JSON.parse("{\"path\":\"/components/form/form.html\",\"title\":\"Form\",\"lang\":\"en-US\",\"frontmatter\":{\"gitInclude\":[\"label.md\"]},\"readingTime\":{\"minutes\":0.05,\"words\":16},\"filePathRelative\":\"components/form/form.md\"}")
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
