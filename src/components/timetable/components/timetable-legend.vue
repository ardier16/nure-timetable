<template>
  <div class="timetable-legend">
    <p class="timetable-legend__header">
      &nbsp;
    </p>

    <div
      v-for="[number, times] of Object.entries(pairTimes)"
      :key="number"
      class="timetable-legend__pair"
    >
      <p class="timetable-legend__pair-start">
        {{ times.start }}
      </p>

      <p class="timetable-legend__pair-number">
        {{ number }}
      </p>

      <p class="timetable-legend__pair-end">
        {{ times.end }}
      </p>
    </div>
  </div>
</template>

<script>
import { pairTimes } from '@constants/pair-times'

export default {
  name: 'timetable-legend',

  data: () => ({
    pairTimes,
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

  &__pair {
    height: 11rem;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    &:not(:last-child) {
      border-bottom: 0.1rem solid $color-secondary;
    }

    &-number {
      background-color: $color-primary;
      color: $color-text-inverse;
      padding: 1.2rem;
      line-height: 1rem;
      border-radius: 50%;
      font-weight: 700;
      font-size: 2rem;
    }
  }
}
</style>
