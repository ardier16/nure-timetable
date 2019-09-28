<template>
  <input
    class="ui-text"
    v-bind="$attrs"
    v-on="listeners"
    :value="value"
  >
</template>

<script>
const events = {
  input: 'input',
}

export default {
  name: 'ui-text',

  props: {
    value: { type: [String, Number], required: true },
  },

  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: event => {
          this.$emit(events.input, event.target.value)
        },
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.ui-text {
  padding: 1rem 2rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 0.1rem solid $color-secondary;
  transition: all 300ms ease-in-out;

  &:hover {
    @include box-shadow;
  }
}
</style>
