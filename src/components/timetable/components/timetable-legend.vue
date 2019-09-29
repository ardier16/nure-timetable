<template>
  <div class="timetable-legend">
    <p class="timetable-legend__header">
      &nbsp;
    </p>

    <p
      v-for="number of Object.values(pairStartTimes)"
      :key="number"
      class="timetable-legend__pair-number-wrp"
    >
      <span class="timetable-legend__pair-number">
        {{ number }}
      </span>
    </p>
  </div>
</template>

<script>
import { pairStartTimes } from '@constants/pair-start-times'

export default {
  name: 'timetable-legend',

  data: () => ({
    pairStartTimes,
  }),
}
</script>

<style lang="scss" scoped>
.timetable-legend {
  width: 4rem;

  &__header {
    height: 6rem;
    border-bottom: 0.1rem solid $color-secondary;
  }

  &__pair-number-wrp {
    height: 11rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 2rem;

    &:not(:last-child) {
      border-bottom: 0.1rem solid $color-secondary;
    }
  }

  &__pair-number {
    background-color: $color-primary;
    color: $color-text-inverse;
    padding: 1.2rem;
    line-height: 1rem;
    border-radius: 50%;
  }
}
</style>
