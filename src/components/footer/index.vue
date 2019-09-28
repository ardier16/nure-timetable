<template>
  <footer class="footer">
    Footer
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
}
</script>

<style lang="scss" scoped>
.footer {
  @include container;

  background-color: $color-primary;
  color: $color-text-inverse;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
}
</style>
