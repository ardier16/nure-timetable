const mutations = {
  // i18n
  SET_LOCALE: 'SET_LOCALE',

  // timetable
  SET_PAIRS: 'SET_PAIRS',
}

const actions = {
  // i18n
  CHANGE_LOCALE: 'CHANGE_LOCALE',

  // timetable
  LOAD_TIMETABLE: 'LOAD_TIMETABLE',
}

const getters = {
  // i18n
  locale: 'locale',

  // timetable
  pairs: 'pairs',
}

export const types = {
  ...mutations,
  ...actions,
  ...getters,
}
