<template>
  <div class="legend-skeleton">
    <p class="legend-skeleton__header">
      &nbsp;
    </p>

    <div
      v-for="i in 6"
      :key="i"
      class="legend-skeleton__pair"
    >
      <p class="legend-skeleton__pair-date">
        <span class="legend-skeleton__line">
          &nbsp;
        </span>
      </p>

      <p class="legend-skeleton__pair-number">
        <span class="legend-skeleton__line">
          &nbsp;
        </span>
      </p>

      <p class="legend-skeleton__pair-date">
        <span class="legend-skeleton__line">
          &nbsp;
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'legend-skeleton',
}
</script>

<style lang="scss" scoped>
.legend-skeleton {
  width: 6rem;

  &__line {
    @extend %skeleton-bg;

    width: 6rem;
    border-radius: 1rem;
  }

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
      display: flex;
      align-items: center;

      .legend-skeleton__line {
        padding: 0 1.6rem;
        width: 1rem;
        border-radius: 50%;
        font-size: 2.5rem;
      }
    }

    &-date {
      display: flex;
      align-items: center;

      .legend-skeleton__line {
        padding: 0 1.6rem;
        width: 1rem;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
