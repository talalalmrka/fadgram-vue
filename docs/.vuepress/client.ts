import { defineClientConfig } from 'vuepress/client'
import FadgramVue from '../../src'

import './styles/fonts/poppins/style.css'
import './styles/style.css'
import { LOADER_SIZES, LOADER_TYPES } from '../../src/types'
import TabsPreview from './views/TabsPreview.vue'
export default defineClientConfig({
  enhance({ app }) {
    //app.config.globalProperties.loaderTypes = LOADER_TYPES
    //app.config.globalProperties.loaderSizes = LOADER_SIZES
    app.use(FadgramVue)
    app.component('TabsPreview', TabsPreview)
  },
  setup() {},
  rootComponents: [],
})
