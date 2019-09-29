<template>
  <div class="pairs-column-skeleton">
    <p class="pairs-column-skeleton__header">
      <span class="pairs-column-skeleton__line">
        &nbsp;
      </span>
    </p>

    <div
      class="pairs-column-skeleton__cell"
      v-for="i of 6"
      :key="i"
    >
      <pair-card-skeleton v-if="Math.round(Math.random())" />
    </div>
  </div>
</template>

<script>
import PairCardSkeleton from '@common/components/pair-card-skeleton'

export default {
  name: 'pairs-column-skeleton',
  components: {
    PairCardSkeleton,
  },
}
</script>

<style lang="scss" scoped>
.pairs-column-skeleton {
  width: 14rem;

  &__line {
    @extend %skeleton-bg;

    width: 10rem;
    border-radius: 1rem;
    padding: 0.6rem 0.8rem;
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
