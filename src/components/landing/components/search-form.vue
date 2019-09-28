<template>
  <form
    class="search-form"
    novalidate
    @submit.prevent="submit"
  >
    <ui-text
      v-model="form.group"
      class="search-form__input"
      type="text"
      :placeholder="'landing.search-placeholder' | translate"
    />

    <ui-button
      class="search-form__submit-btn"
      type="submit"
      look="primary"
    >
      {{ 'landing.search-btn' | translate }}
    </ui-button>
  </form>
</template>

<script>
import UiText from '@components/ui/ui-text'
import UiButton from '@components/ui/ui-button'

import { routeNames } from '@router/routes'
import { i18nRouterPush } from '@router/i18n'

export default {
  name: 'search-form',
  components: {
    UiText,
    UiButton,
  },

  data: () => ({
    form: {
      group: '',
    },
  }),

  methods: {
    submit () {
      i18nRouterPush({
        name: routeNames.timetable,
        query: {
          group: this.form.group,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.search-form {
  display: flex;
  padding-top: 10rem;
  padding-bottom: 10rem;

  @include container;

  @include respond-to(small) {
    flex-direction: column;
  }

  &__input {
    width: 75%;
    height: 9rem;
    font-size: 2.4rem;
    padding: 2rem 4rem;
    border-radius: 1rem 0 0 1rem;

    @include respond-to(small) {
      width: 100%;
      height: 7rem;
      border-radius: 1rem;
      padding: 2rem;
      font-size: 1.8rem;
    }
  }

  &__submit-btn {
    width: 25%;
    height: 9rem;
    font-size: 2.4rem;
    border-radius: 0 1rem 1rem 0;

    @include respond-to(small) {
      width: 100%;
      height: 7rem;
      border-radius: 1rem;
      margin-top: 4rem;
      font-size: 1.8rem;
    }
  }
}
</style>
