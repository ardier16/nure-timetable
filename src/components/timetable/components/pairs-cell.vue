<template>
  <div class="pairs-cell">
    <pair-card
      v-for="(pair, i) in pairs"
      :key="i"
      :pair="pair"
      class="pairs-cell__pair"
    />
  </div>
</template>

<script>
import PairCard from '@common/components/pair-card'

export default {
  name: 'pairs-cell',
  components: {
    PairCard,
  },

  props: {
    pairs: { type: Array, required: true },
  },
}
</script>

<style lang="scss" scoped>
.pairs-cell {
  width: 14rem;
  height: 11rem;
  padding: 1rem;
  border: 0.1rem solid $color-secondary;
  border-left: none;
  border-top: none;

  &:last-child {
    border-bottom: none;
  }
}
</style>
