import { defineClientConfig } from 'vuepress/client'
import FadgramVue from '../../src'

import './style.css'
export default defineClientConfig({
  enhance({ app }) {
    app.use(FadgramVue)
  },
  setup() {},
  rootComponents: [],
})
