import Vue from 'vue'
import vuexI18n from 'vuex-i18n'

import translationsEn from '@assets/translations/en'
import translationsRu from '@assets/translations/ru'
import translationsUk from '@assets/translations/uk'

import { locales, DEFAULT_LOCALE } from '@constants/locales'

export function initI18n (store) {
  Vue.use(vuexI18n.plugin, store)

  Vue.i18n.add(locales.en.isoCode, translationsEn)
  Vue.i18n.add(locales.ru.isoCode, translationsRu)
  Vue.i18n.add(locales.uk.isoCode, translationsUk)

  Vue.i18n.set(DEFAULT_LOCALE)
}
