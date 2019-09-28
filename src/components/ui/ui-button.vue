<template>
  <button
    class="ui-button"
    :class="`ui-button--${look}`"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
const buttonLooks = {
  primary: 'primary',
  secondary: 'secondary',
  default: 'default',
  flatInverse: 'flat-inverse',
}

export default {
  name: 'ui-button',

  props: {
    look: { type: String, default: buttonLooks.default },
  },
}
</script>

<style lang="scss" scoped>
.ui-button {
  @include button;

  &--primary { @include button-primary; }
  &--secondary { @include button-secondary; }

  &--flat-inverse {
    color: $color-text-inverse;
  }
}
</style>
