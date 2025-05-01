import { defineClientConfig } from 'vuepress/client'
import FadgramVue from '../../src'

import './styles/fonts/poppins/style.css'
import './styles/style.css'
import TabsPreview from './views/TabsPreview.vue'
export default defineClientConfig({
  enhance({ app }) {
    app.use(FadgramVue)
    app.component('TabsPreview', TabsPreview)
  },
  setup() {},
  rootComponents: [],
})
