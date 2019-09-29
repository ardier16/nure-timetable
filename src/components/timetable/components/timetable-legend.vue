<template>
  <div class="timetable-legend">
    <p class="timetable-legend__header">
      &nbsp;
    </p>

    <p
      v-for="number of Object.values(pairStartTimes)"
      :key="number"
      class="timetable-legend__pair-number"
    >
      {{ number }}
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
  border: 0.1rem solid $color-primary;
  width: 4rem;

  &__header {
    height: 4rem;
    background-color: $color-primary;
  }

  &__pair-number {
    height: 12rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $color-primary;
    color: $color-text-inverse;
    font-weight: 700;
    font-size: 2rem;
    border-top: 0.1rem solid $color-secondary;
  }
}
</style>
