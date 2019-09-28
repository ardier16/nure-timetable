import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import VueLazyLoad from 'vue-lazyload'
import VueHead from 'vue-head'

import './devtools'
import { initI18n } from './i18n'
import { initApi } from './api'

import translate from '@utils/translate'

import App from './components/app'
import I18nRouterLink from './router/i18n-router-link'

import store from '@store'
import { config } from '@/config'

import '../node_modules/@mdi/font/css/materialdesignicons.min.css'

async function init () {
  initI18n(store)
  initApi(config.API_URL)

  Vue.config.productionTip = false

  Vue.component('i18n-router-link', I18nRouterLink)

  Vue.use(VueScrollTo, { offset: -25 })
  Vue.use(VueLazyLoad)
  Vue.use(VueHead)

  Vue.filter('translate', translate)

  new Vue({
    router: require('@router').default,
    store,
    render: h => h(App),
  }).$mount('#app')
}

init()
