<template>
  <div class="app">
    <div class="app__logo-wrp">
      <img
        class="app__logo"
        src="~Assets/img/logo.svg"
      >
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
.app {
  &__logo-wrp {
    position: relative;
    height: 100vh;
    width: 100vw;
  }

  &__logo {
    position: absolute;
    max-width: 20rem;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}
</style>
