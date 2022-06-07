import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
// import routes from '~pages'
import { createHead } from '@vueuse/head'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'
// import generatedRoutes from 'virtual:generated-pages'
import RouterPrefetch from 'vue-router-prefetch'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import lazy from 'vue-lazyload'
import inspector from '../inspector/index.mjs'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})
const head = createHead()

createApp(App)
  .use(router)
  .use(RouterPrefetch)
  .use(head)
  .use(lazy)
  .use(inspector)
  .mount('#app')