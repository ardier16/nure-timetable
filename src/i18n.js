import Vue from 'vue'
import vuexI18n from 'vuex-i18n'

export function initI18n (store) {
  Vue.use(vuexI18n.plugin, store)
}
