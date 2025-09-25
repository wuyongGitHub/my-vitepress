import { defineConfig } from 'vitepress'
import { sidebar } from './config/sidebar'

export default defineConfig({
  title: `hsk-ui`,
  description: 'vuecomp-starter',
  base: '/vuecomp-starter/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo.svg' }],
  ],
  themeConfig: {
    footer: {
      message: '©聚玻科技.',
      copyright: 'COPYRIGHT ©聚玻科技 www.jubokj.com 浙ICP备19015116号-1  浙公网安备 33010902000453号',
    },

    nav: [
      { text: '组件', link: '/guide/features', activeMatch: '/guide/' },
      {
        text: '链接',
        items: [
          { text: 'Github', link: 'https://github.com/windlil/vuecomp-starter' },
          {
            items: [
              {
                text: 'vue',
                link: 'https://cn.vuejs.org/',
              },
              {
                text: 'vitepress',
                link: 'https://vitepress.dev/',
              }
            ]
          }
        ]
      }
    ],
    sidebar,
  }
})
