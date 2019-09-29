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
    commit(types.SET_PAIRS, [])

    try {
      const pairs = await api().get({
        endpoint: '/timetable',
        query: {
          group,
          include: ['groups', 'subject', 'teachers'],
        },
      })

      // HACK: temporarily back-end does not return 400 code
      if (!Array.isArray(pairs)) {
        throw new Error()
      }

      commit(types.SET_PAIRS, pairs)
    } catch {
      commit(types.SET_PAIRS, [])
    }
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
