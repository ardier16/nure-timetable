import { types } from '@store/types'
import { api } from '@/api'
import { Pair } from '@records/pair'

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
      query: {
        group,
        include: ['groups', 'subject', 'teachers'],
      },
    })

    commit(types.SET_PAIRS, pairs)
  },
}

export const getters = {
  [types.pairs]: state => state.pairs.map(p => new Pair(p)),
}

export default {
  state,
  mutations,
  actions,
  getters,
}
