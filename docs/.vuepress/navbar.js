import { navbar } from 'vuepress-theme-hope';
export default navbar([
    '/',
    {
        text: 'Guide',
        icon: 'lightbulb',
        prefix: '/guide/',
        children: ['introduction', 'installation'],
    },
    {
        text: 'Components',
        icon: 'grid-1x2',
        link: '/components/',
    },
]);
