import { locales } from '@constants/locales'

const isoLocales = Object.values(locales).map(x => x.isoCode)
const localePrefix = `/:lang(${isoLocales.join('|')})?`

export const routes = {
  landing: {
    name: 'landing',
    path: withOptionalLocalePrefix('/'),
  },
  timetable: {
    name: 'timetable',
    path: withOptionalLocalePrefix('/timetable'),
  },
}

function withOptionalLocalePrefix (path) {
  return `${localePrefix}${path}`
}

export function extractChildPath (fullPath = '', depthLevel = 1) {
  return fullPath.split('/').slice(-depthLevel).join('/')
}

export function extractChildRoute (route) {
  return {
    name: route.name,
    path: extractChildPath(route.path),
  }
}

export const routeNames = Object.entries(routes)
  .reduce((acc, [key, value]) => ({
    ...acc,
    [key]: value.name,
  }), {})
