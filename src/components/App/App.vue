<template>
  <div class="app">
    <app-header class="app__header" />

    <main class="app__main">
      <img
        class="app__logo"
        src="@assets/img/logo.svg"
      >

      <router-view />
    </main>

    <app-footer class="app__footer" />
  </div>
</template>

<script>
import AppHeader from '@components/header'
import AppFooter from '@components/footer'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>

<style lang="scss">
@import '@/scss/reset.scss';

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__logo {
    position: absolute;
    max-width: 20rem;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  &__footer {
    margin-top: auto;
  }
}
</style>
