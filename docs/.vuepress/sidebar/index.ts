import { sidebar } from 'vuepress-theme-hope'

export const themeSidebar = sidebar([
  {
    text: 'Get started',
    icon: 'bi-lightbulb',
    collapsible: true,
    expanded: true,
    prefix: '/guide/',
    children: [
      {
        text: 'Introduction',
        icon: 'bi-stars',
        link: 'introduction.md',
      },
      {
        text: 'Installation',
        icon: 'bi-gear-wide-connected',
        link: 'installation.md',
      },
    ],
  },
  {
    text: 'Components',
    icon: 'bi-grid-1x2-fill',
    prefix: '/components/',
    collapsible: true,
    expanded: true,
    children: [
      {
        text: 'Form',
        icon: 'bi-ui-checks-grid',
        prefix: '/components/form/',
        collapsible: true,
        expanded: true,
        children: [
          {
            text: 'Label',
            icon: 'bi-tag',
            link: 'label.md',
          },
          {
            text: 'Error',
            icon: 'bi-exclamation-circle',
            link: 'error.md',
          },
          {
            text: 'Info',
            icon: 'bi-info-circle',
            link: 'info.md',
          },
          {
            text: 'Input',
            icon: 'bi-input-cursor',
            link: 'input.md',
          },
          {
            text: 'Textarea',
            icon: 'bi-textarea-resize',
            link: 'textarea.md',
          },
          {
            text: 'Select',
            icon: 'bi-list',
            link: 'select.md',
          },
          {
            text: 'Rich select',
            icon: 'bi-list-check',
            link: 'rich-select.md',
          },
          {
            text: 'Checkbox',
            icon: 'bi-check-square',
            link: 'checkbox.md',
          },
          {
            text: 'Switch',
            icon: 'bi-toggle-on',
            link: 'switch.md',
          },
          {
            text: 'Radio',
            icon: 'bi-circle',
            link: 'radio.md',
          },
          {
            text: 'Icon Picker',
            icon: 'bi-palette',
            link: 'icon-picker.md',
          },
        ],
      },
      {
        text: 'Accordion',
        icon: 'bi-arrows-collapse',
        link: 'accordion.md',
      },
      {
        text: 'Alert',
        icon: 'bi-info-square',
        link: 'alert.md',
      },
      {
        text: 'Icon',
        icon: 'bi-emoji-smile-fill',
        link: 'icon.md',
      },
      {
        text: 'Loader',
        icon: 'bi-arrow-repeat',
        link: 'loader.md',
      },
      {
        text: 'Tabs',
        icon: 'bi-folder2',
        link: 'tabs.md',
      },
    ],
  },
])
