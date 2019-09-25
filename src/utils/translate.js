import Vue from 'vue'

export default function translate (translationId, interpolations) {
  return Vue.i18n.translate(translationId, interpolations)
}
