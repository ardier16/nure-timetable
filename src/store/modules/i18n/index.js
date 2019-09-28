import { types } from '@store/types'
import { DEFAULT_LOCALE } from '@constants/locales'

import router from '@router'
import { ensureLocaleParameter } from '@router/i18n'

export const state = {
  locale: localStorage.getItem('locale') || DEFAULT_LOCALE,
}

export const mutations = {
  [types.SET_LOCALE] (state, locale) {
    state.locale = locale
  },
}

export const actions = {
  [types.CHANGE_LOCALE] ({ commit }, locale) {
    localStorage.setItem('locale', locale)
    commit(types.SET_LOCALE, locale)

    const routerLocale = router.currentRoute.params.lang || DEFAULT_LOCALE

    if (locale !== routerLocale) {
      router.replace({
        ...ensureLocaleParameter(router.currentRoute),
      })
    }
  },
}

export const getters = {
  [types.locale]: state => state.locale,
}

export default {
  state,
  mutations,
  actions,
  getters,
}
