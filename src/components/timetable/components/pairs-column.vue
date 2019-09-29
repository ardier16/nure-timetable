<template>
  <div
    class="pairs-column"
    :class="isDayLast
      ? 'pairs-column--last' : 'pairs-column--present'"
  >
    <p class="pairs-column__header">
      <span class="pairs-column__date">
        {{ date | formatDate }}
      </span>
    </p>

    <pairs-cell
      v-for="number of Object.keys(pairTimes)"
      :key="number"
      :pairs="pairs.filter(p => p.number === number)"
      class="pair-column__cell"
    />
  </div>
</template>

<script>
import PairsCell from './pairs-cell'

import { pairTimes } from '@constants/pair-times'
import { DateUtil } from '@utils/date.util'

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
    pairTimes,
  }),

  computed: {
    isDayLast () {
      return DateUtil.getStartTimestamp(this.date) <
        DateUtil.getStartTimestamp(Date.now())
    },
  },
}
</script>

<style lang="scss" scoped>
.pairs-column {
  width: 14rem;

  &--last {
    background-color: rgba($color-primary, 0.15);
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6rem;
    padding: 2.4rem 1rem;
    font-weight: 700;
    font-size: 1.6rem;
    border: 0.1rem solid $color-secondary;
    border-left: none;
    border-top: none;
  }

  &__date {
    background-color: $color-primary;
    color: $color-text-inverse;
    padding: 0.6rem 1rem;
    border-radius: 1rem;
  }
}
</style>
