<template>
  <header class="header">
    <img
      class="header__logo"
      src="@assets/img/logo-full.svg"
    >

    <locale-picker />
  </header>
</template>

<script>
import LocalePicker from './components/locale-picker'

export default {
  name: 'app-header',
  components: {
    LocalePicker,
  },
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
