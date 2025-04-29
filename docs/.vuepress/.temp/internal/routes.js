export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Introduction"} }],
  ["/components/accordion.html", { loader: () => import(/* webpackChunkName: "components_accordion.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/components/accordion.html.js"), meta: {"title":"Accordion"} }],
  ["/components/alert.html", { loader: () => import(/* webpackChunkName: "components_alert.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/components/alert.html.js"), meta: {"title":"Alert"} }],
  ["/components/icon.html", { loader: () => import(/* webpackChunkName: "components_icon.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/components/icon.html.js"), meta: {"title":"Icon"} }],
  ["/components/loader.html", { loader: () => import(/* webpackChunkName: "components_loader.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/components/loader.html.js"), meta: {"title":"Loader"} }],
  ["/components/form/checkbox.html", { loader: () => import(/* webpackChunkName: "components_form_checkbox.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/components/form/checkbox.html.js"), meta: {"title":"Checkbox"} }],
  ["/components/form/error.html", { loader: () => import(/* webpackChunkName: "components_form_error.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/components/form/error.html.js"), meta: {"title":"Error"} }],
  ["/components/form/icon-picker.html", { loader: () => import(/* webpackChunkName: "components_form_icon-picker.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/components/form/icon-picker.html.js"), meta: {"title":"Icon Picker"} }],
  ["/components/form/info.html", { loader: () => import(/* webpackChunkName: "components_form_info.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/components/form/info.html.js"), meta: {"title":"Info"} }],
  ["/components/form/input.html", { loader: () => import(/* webpackChunkName: "components_form_input.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/components/form/input.html.js"), meta: {"title":"Input"} }],
  ["/components/form/label.html", { loader: () => import(/* webpackChunkName: "components_form_label.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/components/form/label.html.js"), meta: {"title":"Label"} }],
  ["/components/form/radio.html", { loader: () => import(/* webpackChunkName: "components_form_radio.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/components/form/radio.html.js"), meta: {"title":"Radio"} }],
  ["/components/form/rich-select.html", { loader: () => import(/* webpackChunkName: "components_form_rich-select.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/components/form/rich-select.html.js"), meta: {"title":"Rich Select"} }],
  ["/components/form/select.html", { loader: () => import(/* webpackChunkName: "components_form_select.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/components/form/select.html.js"), meta: {"title":"Select"} }],
  ["/components/form/switch.html", { loader: () => import(/* webpackChunkName: "components_form_switch.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/components/form/switch.html.js"), meta: {"title":"Switch (Toggle)"} }],
  ["/components/form/textarea.html", { loader: () => import(/* webpackChunkName: "components_form_textarea.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/components/form/textarea.html.js"), meta: {"title":"Textarea"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/components/", { loader: () => import(/* webpackChunkName: "components_index.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/components/index.html.js"), meta: {"title":"Components"} }],
  ["/components/form/", { loader: () => import(/* webpackChunkName: "components_form_index.html" */"/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/docs/.vuepress/.temp/pages/components/form/index.html.js"), meta: {"title":"Form"} }],
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
