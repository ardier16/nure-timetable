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

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
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
