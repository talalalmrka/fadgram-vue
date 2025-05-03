export const siteData = JSON.parse("{\"base\":\"/fadgram-vue/\",\"lang\":\"en-US\",\"title\":\"Fadgram Vue\",\"description\":\"Vue 3 components library with powerfull features compatible with tailwind css 4\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/fadgram-vue/favicon.ico\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
