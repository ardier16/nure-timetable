<template>
  <header class="header">
    <i18n-router-link :to="{ name: routeNames.landing }">
      <img
        class="header__logo"
        src="@assets/img/logo-full.svg"
      >
    </i18n-router-link>

    <locale-picker />
  </header>
</template>

<script>
import LocalePicker from './components/locale-picker'

import { routeNames } from '@router/routes'

export default {
  name: 'app-header',
  components: {
    LocalePicker,
  },

  data: () => ({
    routeNames,
  }),
}
</script>

<style lang="scss" scoped>
.header {
  @include container;

  background-color: $color-primary;
  color: $color-text-inverse;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__logo {
    max-height: 3.6rem;
  }
}
</style>
