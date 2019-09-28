<template>
  <div class="app">
    <app-header class="app__header" />

    <main class="app__main">
      <router-view />
    </main>

    <app-footer class="app__footer" />
  </div>
</template>

<script>
import AppHeader from '@components/header'
import AppFooter from '@components/footer'

import { locales, DEFAULT_LOCALE } from '@constants/locales'

import { mapActions } from 'vuex'
import { types } from '@store'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
  },

  created () {
    const locale = this.$route.params.lang || DEFAULT_LOCALE
    const isLocaleValid = Object.values(locales)
      .map(l => l.isoCode)
      .includes(locale)

    if (isLocaleValid) {
      this.changeLocale(locale)
    }
  },

  methods: {
    ...mapActions({
      changeLocale: types.CHANGE_LOCALE,
    }),
  },
}
</script>

<style lang="scss">
html {
  font-family: $app-font-family;
  font-size: 10px;
}

body {
  font-size: 1.4rem;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__footer {
    margin-top: auto;
  }
}
</style>
