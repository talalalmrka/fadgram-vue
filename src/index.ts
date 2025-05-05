import type { App } from 'vue'
import FgAccordion from './components/FgAccordion.vue'
import FgAccordionBody from './components/FgAccordionBody.vue'
import FgAccordionHead from './components/FgAccordionHead.vue'
import FgAccordionItem from './components/FgAccordionItem.vue'
import FgAlert from './components/FgAlert.vue'
import FgBadge from './components/FgBadge.vue'
import FgButton from './components/FgButton.vue'
import FgCard from './components/FgCard.vue'
import FgCheckbox from './components/FgCheckbox.vue'
import FgCode from './components/FgCode.vue'
import FgError from './components/FgError.vue'
import FgIcon from './components/FgIcon.vue'
import FgIconPicker from './components/FgIconPicker.vue'
import FgInfo from './components/FgInfo.vue'
import FgInput from './components/FgInput.vue'
import FgLabel from './components/FgLabel.vue'
import FgLoader from './components/FgLoader.vue'
import FgRadio from './components/FgRadio.vue'
import FgRichSelect from './components/FgRichSelect.vue'
import FgSelect from './components/FgSelect.vue'
import FgSwitch from './components/FgSwitch.vue'
import FgTabs from './components/FgTabs.vue'
import FgTextarea from './components/FgTextarea.vue'
import { TransitionExpand, TransitionScale, TransitionSlide } from '@morev/vue-transitions'

const components = [
  FgAccordion,
  FgAccordionBody,
  FgAccordionHead,
  FgAccordionItem,
  FgAlert,
  FgBadge,
  FgButton,
  FgCard,
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
  FgTabs,
  FgTextarea,
]

const FadgramVue = {
  install(app: App) {
    app.component('TransitionExpand', TransitionExpand)
    app.component('TransitionScale', TransitionScale)
    app.component('TransitionSlide', TransitionSlide)
    components.forEach((component) => {
      if (component.__name) {
        app.component(component.__name, component)
      } else {
        console.log('Component is missing a name property:', component)
      }
    })
  },
}

export default FadgramVue

export {
  FgAccordion,
  FgAccordionBody,
  FgAccordionHead,
  FgAccordionItem,
  FgAlert,
  FgBadge,
  FgButton,
  FgCard,
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
  FgTabs,
  FgTextarea,
}
