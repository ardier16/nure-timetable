import Vue from 'vue'

export function translate (translationId, interpolations) {
  return Vue.i18n.translate(translationId, interpolations)
}
