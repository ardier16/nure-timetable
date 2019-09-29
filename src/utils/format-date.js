import Vue from 'vue'

export function formatDate (date) {
  const locale = Vue.i18n.locale()
  const dateFormatter = new Intl.DateTimeFormat(locale, {
    month: 'short',
    day: 'numeric',
    weekday: 'short',
  })

  return dateFormatter.format(date)
}
