<template>
  <div class="app">
    <app-header class="app__header" />

    <main class="app__main">
      <img
        class="app__logo"
        src="~Assets/img/logo.svg"
      >

      <router-view />
    </main>

    <app-footer class="app__footer" />
  </div>
</template>

<script>
import AppHeader from 'Components/Header'
import AppFooter from 'Components/Footer'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>

<style lang="scss">
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
