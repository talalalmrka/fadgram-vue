import { navbar } from 'vuepress-theme-hope'

export default navbar([
  '/',
  {
    text: 'Get started',
    icon: 'lightbulb',
    prefix: '/guide/',
    children: ['introduction', 'installation'],
  },
])
