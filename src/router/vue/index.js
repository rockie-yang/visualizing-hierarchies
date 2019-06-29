
/* eslint-disable */

import IntroReadme from '@/views/vue/intro.md'
import AboutReadme from '@/views/about.md'
import ReactivityReadme from '@/views/reactivity.md'
import SlotsReadme from './slots.md'

/** @type {import("vue-router").RouteConfig} */
export const config = {
  name:      'vue',
  path:      '/vue',
  component: () => import('@/layouts/SidenavLayout.vue'),
  meta:      {
    title: 'Vue'
  },
  children: [
    {
      path:      '/vue/intro',
      component: () => import('@/views/vue/Intro.vue'),
      meta:      {
        title:  'What is Vue?',
        readme: IntroReadme
      }
    },
    {
      path:      '/vue/reactivity',
      component: () => import('@/views/vue/Reactivity.vue'),
      meta:      {
        title:  'Reactivity',
        readme: ReactivityReadme
      }
    },
    {
      path:      '/vue/slots',
      component: () => import('@/views/vue/Slots.vue'),
      meta:      {
        title: 'Slots',
        readme: SlotsReadme
      }
    }
  ]
}

export default config