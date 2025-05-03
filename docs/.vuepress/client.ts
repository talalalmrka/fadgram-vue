import { defineClientConfig } from 'vuepress/client'
import { nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import FadgramVue from '../../src'
import './styles/style.css'
import TabsPreview from './views/TabsPreview.vue'
export default defineClientConfig({
  enhance({ app }) {
    app.use(FadgramVue)
    app.component('TabsPreview', TabsPreview)
  },
  setup() {
    if (typeof window !== 'undefined') {
      const router = useRouter()
      const route = useRoute()

      // Create reusable scroll handler
      let scrollHandler: () => void
      let navbar: HTMLElement | null = null
      const scrolledClass = 'scrolled'

      const initializeNavbar = () => {
        navbar = document.querySelector('.vp-navbar')
        if (!navbar) return

        const handleScroll = () => {
          const currentScroll = window.pageYOffset
          const navbarHeight = navbar?.offsetHeight || 0

          if (currentScroll > navbarHeight) {
            navbar?.classList.add(scrolledClass)
          } else {
            navbar?.classList.remove(scrolledClass)
          }
        }

        // Remove existing listener if any
        if (scrollHandler) {
          window.removeEventListener('scroll', scrollHandler)
        }

        scrollHandler = handleScroll
        window.addEventListener('scroll', scrollHandler, { passive: true })
      }

      // Check initial route
      if (route.path === '/') {
        nextTick(() => {
          initializeNavbar()
        })
      }

      // Handle subsequent navigations
      router.afterEach((to) => {
        if (to.path === '/') {
          nextTick(() => {
            initializeNavbar()
          })
        }
      })

      // Cleanup when leaving home
      router.beforeEach((to, from, next) => {
        if (from.path === '/' && to.path !== '/') {
          if (scrollHandler) {
            window.removeEventListener('scroll', scrollHandler)
          }
          navbar?.classList.remove(scrolledClass)
        }
        next()
      })
    }
  },
  rootComponents: [],
})
