import { defineClientConfig } from 'vuepress/client'
import {
  FgAccordion,
  FgAccordionBody,
  FgAccordionHead,
  FgAccordionItem,
  FgAlert,
  FgCheckbox,
  FgCode,
  FgError,
  FgIcon,
  FgIconPicker,
  FgInfo,
  FgInput,
  FgLabel,
  FgLoader,
  FgRadio,
  FgRichSelect,
  FgSelect,
  FgSwitch,
  FgTextarea,
} from '@/components'
import './style.css'
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('FgAccordion', FgAccordion)
    app.component('FgAccordionBody', FgAccordionBody)
    app.component('FgAccordionHead', FgAccordionHead)
    app.component('FgAccordionItem', FgAccordionItem)
    app.component('FgAlert', FgAlert)
    app.component('FgCheckbox', FgCheckbox)
    app.component('FgCode', FgCode)
    app.component('FgError', FgError)
    app.component('FgIcon', FgIcon)
    app.component('FgIconPicker', FgIconPicker)
    app.component('FgInfo', FgInfo)
    app.component('FgInput', FgInput)
    app.component('FgLabel', FgLabel)
    app.component('FgLoader', FgLoader)
    app.component('FgRadio', FgRadio)
    app.component('FgRichSelect', FgRichSelect)
    app.component('FgSelect', FgSelect)
    app.component('FgSwitch', FgSwitch)
    app.component('FgTextarea', FgTextarea)
  },
  setup() {},
  rootComponents: [],
})
