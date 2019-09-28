import Vue from 'vue'
import Vuex from 'vuex'

import i18n from './modules/i18n'
import timetable from './modules/timetable'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    i18n,
    timetable,
  },
})

export { types } from './types'
