import { sidebar } from 'vuepress-theme-hope'

export default sidebar({
  '/': [
    {
      text: 'Get started',
      icon: 'lightbulb',
      prefix: 'guide/',
      children: ['introduction', 'installation'],
    },
    {
      text: 'Components',
      icon: 'grid-1x2',
      prefix: 'components/',
      children: 'structure',
    },
    /* {
      text: 'Demo',
      icon: 'grid-1x2',
      prefix: 'demo/',
      children: 'structure',
    }, */
  ],
})
