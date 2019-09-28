<template>
  <header class="header">
    <img
      class="header__logo"
      src="@assets/img/logo-full.svg"
    >
  </header>
</template>

<script>
export default {
  name: 'app-header',
}
</script>

<style lang="scss" scoped>
.header {
  @include container;

  background-color: $color-primary;
  color: $color-text-inverse;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;

  &__logo {
    max-height: 3.6rem;
  }
}
</style>
