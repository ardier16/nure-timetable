import Vue from 'vue'
import vuexI18n from 'vuex-i18n/dist/vuex-i18n.cjs'

export function initI18n (store) {
  Vue.use(vuexI18n.plugin, store)
}
