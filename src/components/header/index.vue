<template>
  <header class="header">
    {{ 'header.title' | translate }}
  </header>
</template>

<script>
export default {
  name: 'app-header',
}
</script>

<style lang="scss" scoped>
.header {
  background-color: $color-primary;
  color: $color-text-inverse;
  padding: 1.6rem 4rem;
}
</style>
