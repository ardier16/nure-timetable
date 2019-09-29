<template>
  <div class="pairs-column">
    <p class="pairs-column__header">
      {{ date | formatDate }}
    </p>

    <pairs-cell
      v-for="number of Object.values(pairStartTimes)"
      :key="number"
      :pairs="pairs.filter(p => p.number === number)"
      class="pair-column__cell"
    />
  </div>
</template>

<script>
import PairsCell from './pairs-cell'

import { pairStartTimes } from '@constants/pair-start-times'

export default {
  name: 'pairs-column',
  components: {
    PairsCell,
  },

  props: {
    date: { type: Date, required: true },
    pairs: { type: Array, required: true },
  },

  data: () => ({
    pairStartTimes,
  }),
}
</script>

<style lang="scss" scoped>
.pairs-column {
  border: 0.1rem solid $color-secondary;
  width: 14rem;

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    background-color: $color-primary;
    color: $color-text-inverse;
    font-weight: 700;
    font-size: 1.6rem;
  }
}
</style>
