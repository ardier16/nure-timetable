<template>
  <div class="periods-column-skeleton">
    <p class="periods-column-skeleton__header">
      <span class="periods-column-skeleton__line">
        &nbsp;
      </span>
    </p>

    <div
      class="periods-column-skeleton__cell"
      v-for="i of 6"
      :key="i"
    >
      <period-card-skeleton v-if="Math.round(Math.random())" />
    </div>
  </div>
</template>

<script>
import PeriodCardSkeleton from '@common/components/period-card-skeleton'

export default {
  name: 'periods-column-skeleton',
  components: {
    PeriodCardSkeleton,
  },
}
</script>

<style lang="scss" scoped>
.periods-column-skeleton {
  width: 14rem;

  &__line {
    @extend %skeleton-bg;

    width: 8rem;
    border-radius: 1rem;
    padding: 0.4rem 0.8rem;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    padding: 2rem 1rem;
    font-weight: 700;
    font-size: 1.4rem;
    border: 0.1rem solid $color-secondary;
    border-right: none;
    border-top: none;
  }

  &__cell {
    width: 14rem;
    height: 11rem;
    padding: 1rem;
    border: 0.1rem solid $color-secondary;
    border-right: none;
    border-top: none;

    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
