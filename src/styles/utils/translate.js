import Vue from './node_modules/src/styles/utils/vue'

export default function translate (translationId, interpolations) {
  return Vue.i18n.translate(translationId, interpolations)
}
