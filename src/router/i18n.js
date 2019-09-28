import Vue from 'vue'
import _isString from 'lodash/isString'

import router from '@router'
import { DEFAULT_LOCALE } from '@constants/locales'

export function i18nRouterPush (to) {
  return router.push(ensureLocaleParameter(to))
}

export function ensureLocaleParameter (to) {
  const locale = Vue.i18n.locale()
  const lang = locale === DEFAULT_LOCALE ? undefined : locale

  let decoratedTo
  if (_isString(to)) {
    decoratedTo = {
      path: to,
      params: {
        lang,
      },
    }
  } else {
    decoratedTo = {
      ...to,
      params: {
        ...(to.params || {}),
        lang,
      },
    }
  }

  return decoratedTo
}
