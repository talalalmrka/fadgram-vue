export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home","icon":"house"} }],
  ["/form/checkbox.html", { loader: () => import(/* webpackChunkName: "form_checkbox.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/form/checkbox.html.js"), meta: {"title":"Checkbox","icon":"check-square"} }],
  ["/form/error.html", { loader: () => import(/* webpackChunkName: "form_error.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/form/error.html.js"), meta: {"title":"Error","icon":"exclamation-circle"} }],
  ["/form/icon-picker.html", { loader: () => import(/* webpackChunkName: "form_icon-picker.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/form/icon-picker.html.js"), meta: {"title":"Icon Picker","icon":"palette"} }],
  ["/form/info.html", { loader: () => import(/* webpackChunkName: "form_info.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/form/info.html.js"), meta: {"title":"Info","icon":"info-circle"} }],
  ["/form/input.html", { loader: () => import(/* webpackChunkName: "form_input.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/form/input.html.js"), meta: {"title":"Input","icon":"input-cursor"} }],
  ["/form/label.html", { loader: () => import(/* webpackChunkName: "form_label.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/form/label.html.js"), meta: {"title":"Label","icon":"tag"} }],
  ["/form/radio.html", { loader: () => import(/* webpackChunkName: "form_radio.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/form/radio.html.js"), meta: {"title":"Radio","icon":"circle"} }],
  ["/form/rich-select.html", { loader: () => import(/* webpackChunkName: "form_rich-select.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/form/rich-select.html.js"), meta: {"title":"Rich Select","icon":"list-check"} }],
  ["/form/select.html", { loader: () => import(/* webpackChunkName: "form_select.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/form/select.html.js"), meta: {"title":"Select","icon":"list"} }],
  ["/form/switch.html", { loader: () => import(/* webpackChunkName: "form_switch.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/form/switch.html.js"), meta: {"title":"Switch","icon":"toggle-on"} }],
  ["/form/textarea.html", { loader: () => import(/* webpackChunkName: "form_textarea.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/form/textarea.html.js"), meta: {"title":"Textarea","icon":"textarea-resize"} }],
  ["/guide/installation.html", { loader: () => import(/* webpackChunkName: "guide_installation.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/guide/installation.html.js"), meta: {"title":"Installation","icon":"gear-wide-connected"} }],
  ["/guide/introduction.html", { loader: () => import(/* webpackChunkName: "guide_introduction.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/guide/introduction.html.js"), meta: {"title":"Introduction","icon":"stars"} }],
  ["/ui/accordion.html", { loader: () => import(/* webpackChunkName: "ui_accordion.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/ui/accordion.html.js"), meta: {"title":"Accordion","icon":"arrows-collapse"} }],
  ["/ui/alert.html", { loader: () => import(/* webpackChunkName: "ui_alert.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/ui/alert.html.js"), meta: {"title":"Alert","icon":"info-square"} }],
  ["/ui/icon.html", { loader: () => import(/* webpackChunkName: "ui_icon.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/ui/icon.html.js"), meta: {"title":"Icon","icon":"emoji-smile"} }],
  ["/ui/loader.html", { loader: () => import(/* webpackChunkName: "ui_loader.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/ui/loader.html.js"), meta: {"title":"Loader","icon":"arrow-repeat"} }],
  ["/ui/tabs.html", { loader: () => import(/* webpackChunkName: "ui_tabs.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/ui/tabs.html.js"), meta: {"title":"Tabs","icon":"folder2"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/form/", { loader: () => import(/* webpackChunkName: "form_index.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/form/index.html.js"), meta: {"title":"Form"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Guide"} }],
  ["/ui/", { loader: () => import(/* webpackChunkName: "ui_index.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue/docs/.vuepress/.temp/pages/ui/index.html.js"), meta: {"title":"Ui"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
