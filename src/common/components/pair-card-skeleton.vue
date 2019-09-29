<template>
  <div class="pair-card-skeleton">
    <div class="pair-card-skeleton__title">
      <span class="pair-card-skeleton__line">
        &nbsp;
      </span>
    </div>

    <div class="pair-card-skeleton__type">
      <p class="pair-card-skeleton__type-icon">
        <span class="pair-card-skeleton__line">
          &nbsp;
        </span>
      </p>

      <p class="pair-card-skeleton__type-text">
        <span class="pair-card-skeleton__line">
          &nbsp;
        </span>
      </p>
    </div>

    <div class="pair-card-skeleton__location">
      <p class="pair-card-skeleton__location-icon">
        <span class="pair-card-skeleton__line">
        &nbsp;
        </span>
      </p>

      <p class="pair-card-skeleton__location-text">
        <span class="pair-card-skeleton__line">
          &nbsp;
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pair-card-skeleton',
}
</script>

<style lang="scss" scoped>
.pair-card-skeleton {
  padding: 1.2rem;
  border: 0.1rem solid $color-skeleton;
  width: 12rem;
  height: 9rem;
  border-radius: 1rem;
  transition: all 200ms ease-in;

  @include box-shadow;

  &__line {
    @extend %skeleton-bg;

    width: 6rem;
    border-radius: 1rem;
  }

  &__title {
    font-weight: 700;
    display: flex;
    justify-content: center;
    font-size: 1.6rem;
  }

  &__type {
    display: flex;
    align-items: center;
    margin-top: 1.4rem;

    &-icon {
      display: flex;
      align-items: center;

      .pair-card-skeleton__line {
        padding: 0 0.4rem;
        width: 1rem;
        font-size: 0.85rem;
      }
    }

    &-text {
      margin-left: 1rem;
      display: flex;
      align-items: center;

      .pair-card-skeleton__line {
        padding: 0 2rem;
        width: 5rem;
        font-size: 0.85rem;
      }
    }
  }

  &__location {
    margin-top: 1rem;
    display: flex;
    align-items: center;

    &-icon {
      display: flex;
      align-items: center;

      .pair-card-skeleton__line {
        padding: 0 0.4rem;
        width: 1rem;
        font-size: 0.85rem;
      }
    }

    &-text {
      margin-left: 1rem;
      display: flex;
      align-items: center;

      .pair-card-skeleton__line {
        padding: 0 2rem;
        width: 5rem;
        font-size: 0.85rem;
      }
    }
  }
}
</style>
