export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/demo/encrypt.html\":{\"tokens\":[\"$2b$10$.IdrwHwabbi8qNxEIsCOreK/9zPvP7x7lMudW96q3T.gFsnvtg7Ei\"],\"hint\":\"Password: 1234\"}}},\"license\":\"MIT\",\"logo\":\"/logo.png\",\"externalLinkIcon\":false,\"repo\":\"talalalmrka/fadgram-vue\",\"pageInfo\":[\"Author\",\"Category\",\"Tag\"],\"docsDir\":\"src\",\"darkmode\":\"toggle\",\"contributors\":false,\"lastUpdated\":false,\"editLink\":false,\"navbarLayout\":{\"start\":[\"Brand\"],\"center\":[\"Search\"],\"end\":[\"Repo\",\"Outlook\"]},\"displayFooter\":true,\"locales\":{\"/\":{\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page on GitHub\",\"print\":\"Print\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"encryptLocales\":{\"iconLabel\":\"Page Encrypted\",\"placeholder\":\"Enter password\",\"remember\":\"Remember password\",\"errorHint\":\"Please enter the correct password!\"},\"routeLocales\":{\"skipToContent\":\"Skip to main content\",\"notFoundTitle\":\"Page not found\",\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\"},\"navbar\":[\"/\",{\"text\":\"Get started\",\"icon\":\"lightbulb\",\"prefix\":\"/guide/\",\"children\":[\"introduction\",\"installation\"]}],\"sidebar\":[{\"text\":\"Getting started\",\"prefix\":\"guide/\",\"children\":[\"introduction\",\"installation\"]},{\"text\":\"Form\",\"prefix\":\"form/\",\"children\":[\"label\",\"info\",\"error\",\"input\",\"textarea\",\"checkbox\",\"radio\",\"switch\",\"select\",\"rich-select\",\"icon-picker\"]},{\"text\":\"Ui\",\"prefix\":\"ui/\",\"children\":[\"accordion\",\"alert\",\"icon\",\"loader\",\"tabs\"]}]}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
