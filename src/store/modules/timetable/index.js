import { types } from '@store/types'
import { api } from '@/api'
import { Period } from '@records/period'

export const state = {
  periods: [],
}

export const mutations = {
  [types.SET_PERIODS] (state, periods) {
    state.periods = periods
  },
}

export const actions = {
  async [types.LOAD_TIMETABLE] ({ commit }, group) {
    commit(types.SET_PERIODS, [])

    try {
      const periods = await api().get({
        endpoint: '/timetable',
        query: {
          group,
          include: ['groups', 'subject', 'teachers'],
        },
      })

      // HACK: temporarily back-end does not return 400 code
      if (!Array.isArray(periods)) {
        throw new Error()
      }

      commit(types.SET_PERIODS, periods)
    } catch (e) {
      commit(types.SET_PERIODS, [])
    }
  },
}

export const getters = {
  [types.periods]: state => state.periods.map(p => new Period(p)),
}

export default {
  state,
  mutations,
  actions,
  getters,
}
