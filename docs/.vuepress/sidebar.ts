import { sidebar } from 'vuepress-theme-hope'

export default sidebar([
  {
    text: 'Getting started',
    prefix: 'guide/',
    children: ['introduction', 'installation'],
  },
  {
    text: 'Form',
    prefix: 'form/',
    children: [
      'label',
      'info',
      'error',
      'input',
      'textarea',
      'checkbox',
      'radio',
      'switch',
      'select',
      'rich-select',
      'icon-picker',
    ],
  },
  {
    text: 'Ui',
    prefix: 'ui/',
    children: ['accordion', 'alert', 'icon', 'loader', 'tabs'],
  },
  /* {
    text: 'Getting started',
    icon: 'lightbulb',
    prefix: 'guide/',
    children: ['introduction', 'installation'],
  },
  {
    text: 'Components',
    icon: 'grid-1x2',
    prefix: 'components/',
    children: [
      {
        text: 'Form',
        prefix: 'form/',
        children: 'structure',
      },
    ],
  }, */
])
