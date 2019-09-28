<template>
  <router-link
    v-bind="attrs"
    :to="decoratedTo"
  >
    <slot />
  </router-link>
</template>

<script>
import omit from 'lodash/omit'
import { ensureLocaleParameter } from './i18n'

export default {
  name: 'i18n-router-link',
  inheritAttrs: false,

  props: {
    to: {
      type: [String, Object],
      required: true,
    },
  },

  computed: {
    decoratedTo () {
      return ensureLocaleParameter(this.to)
    },

    attrs () {
      return omit(this.$attrs, ['to'])
    },
  },
}
</script>
