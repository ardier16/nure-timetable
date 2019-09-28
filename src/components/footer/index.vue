<template>
  <footer class="footer">
    <img
      class="footer__logo"
      src="@assets/img/logo-full.svg"
    >

    <p class="footer__copyright">
      Created by @ardier16
    </p>

    <social-networks />
  </footer>
</template>

<script>
import SocialNetworks from './components/social-networks'

export default {
  name: 'app-footer',
  components: {
    SocialNetworks,
  },
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
  justify-content: space-between;
  align-items: center;

  &__logo {
    max-height: 2.8rem;
  }

  &__copyright {
    font-weight: 100;
    color: $color-secondary;
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
  }
}
</style>
