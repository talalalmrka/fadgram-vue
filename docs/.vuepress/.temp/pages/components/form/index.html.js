import comp from "/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/components/form/index.html.vue"
const data = JSON.parse("{\"path\":\"/components/form/\",\"title\":\"Form\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Form\",\"article\":false,\"feed\":false,\"sitemap\":false},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
