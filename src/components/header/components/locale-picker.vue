<template>
  <div class="locale-picker">
    <ui-button
      v-for="locale in locales"
      :key="locale.isoCode"
      class="locale-picker__btn"
      :class="{
        'locale-picker__btn--selected':
          locale.isoCode === currentLocale
      }"
      look="flat-inverse"
      @click="changeLocale(locale.isoCode)"
    >
      {{ `locales.${locale.translationId}` | translate }}
    </ui-button>
  </div>
</template>

<script>
import UiButton from '@components/ui/ui-button'
import { locales } from '@constants/locales'

import { mapGetters, mapActions } from 'vuex'
import { types } from '@store'

export default {
  name: 'locale-picker',
  components: {
    UiButton,
  },

  data () {
    return {
      locales,
    }
  },

  computed: {
    ...mapGetters({
      currentLocale: types.locale,
    }),
  },

  methods: {
    ...mapActions({
      changeLocale: types.CHANGE_LOCALE,
    }),
  },
}
</script>

<style lang="scss" scoped>
.locale-picker {
  display: flex;

  &__btn {
    padding: 0 1rem;
    font-weight: 400;
    color: $color-secondary;

    &:hover {
      color: $color-text-inverse;
    }

    &--selected {
      font-weight: 700;
      color: $color-text-inverse;
    }
  }
}
</style>
