import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import VueLazyLoad from 'vue-lazyload'
import VueHead from 'vue-head'

import './devtools'
import { initI18n } from './i18n'

import translate from 'Utils/translate'

import App from './components/App'

import store from 'Store'

import '@/styles/reset.scss'

async function init () {
  initI18n(store)
  Vue.config.productionTip = false

  Vue.use(VueScrollTo, { offset: -25 })
  Vue.use(VueLazyLoad)
  Vue.use(VueHead)

  Vue.filter('translate', translate)

  new Vue({
    router: require('Router').default,
    store,
    render: h => h(App),
  }).$mount('#app')
}

init()
