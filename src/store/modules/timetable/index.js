import { types } from '@store/types'
import { api } from '@/api'

export const state = {
  pairs: [],
}

export const mutations = {
  [types.SET_PAIRS] (state, pairs) {
    state.pairs = pairs
  },
}

export const actions = {
  async [types.LOAD_TIMETABLE] ({ commit }, group) {
    const pairs = await api().get({
      endpoint: 'timetable',
      query: { group },
    })

    commit(types.SET_PAIRS, pairs)
  },
}

export const getters = {
  [types.pairs]: state => state.pairs,
}

export default {
  state,
  mutations,
  actions,
  getters,
}
