import { types } from '@store/types'
import { DEFAULT_LOCALE } from '@constants/locales'

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
