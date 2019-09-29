<template>
  <footer class="footer">
    <i18n-router-link
      class="footer__logo-wrp"
      :to="{ name: routeNames.landing }"
    >
      <img
        class="footer__logo"
        src="@assets/img/logo-full.svg"
      >
    </i18n-router-link>

    <p class="footer__copyright">
      {{ 'footer.copyright' | translate }}
    </p>

    <social-networks class="footer__social-networks" />
  </footer>
</template>

<script>
import SocialNetworks from './components/social-networks'

import { routeNames } from '@router/routes'

export default {
  name: 'app-footer',
  components: {
    SocialNetworks,
  },

  data: () => ({
    routeNames,
  }),
}
</script>

<style lang="scss" scoped>
.footer {
  @include container;

  background-color: $color-primary;
  color: $color-text-inverse;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @include respond-to(small) {
    flex-direction: column;
  }

  &__logo-wrp {
    width: 20rem;

    @include respond-to(small) {
      display: none;
    }
  }

  &__logo {
    max-height: 2.8rem;
  }

  &__copyright {
    font-weight: 100;
    color: $color-secondary;
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
  }

  &__social-networks {
    width: 20rem;

    @include respond-to(small) {
      width: 100%;
      margin-top: 1rem;
    }
  }
}
</style>
