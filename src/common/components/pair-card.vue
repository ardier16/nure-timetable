<template>
  <div
    class="pair-card"
    :class="[
      `pair-card--${pair.type}`,
      pair.isLast && 'pair-card--last'
    ]"
  >
    <p class="pair-card__title">
      {{ pair.subject.shortName }}
    </p>

    <p class="pair-card__type">
      <span
        class="pair-card__type-icon"
        :class="`pair-card__type-icon--${pair.type}`"
      >
      &nbsp;
      </span>

      <span class="pair-card__type-text">
        {{ `pair-types-short.${pair.type}` | translate }}
      </span>
    </p>

    <p class="pair-card__location">
      <i class="mdi mdi-map-marker-outline pair-card__location-icon" />
      <span class="pair-card__location-text">
        {{ pair.auditory }}
      </span>
    </p>
  </div>
</template>

<script>
import { Pair } from '@records/pair'

export default {
  name: 'pair-card',

  props: {
    pair: { type: Pair, required: true },
  },
}
</script>

<style lang="scss" scoped>
.pair-card {
  padding: 1.6rem;
  border: 0.1rem solid $color-primary;
  width: 12rem;
  border-radius: 1rem;
  transition: all 200ms ease-in;
  cursor: pointer;

  @include box-shadow;

  @each $type, $color in $pair-dark-colors {
    &--#{$type} {
      border-color: $color;
    }
  }

  @each $type, $color in $pair-light-colors {
    &--#{$type}.pair-card--last {
      background-color: $color;
    }
  }

  @each $type, $color in $pair-primary-colors {
    &--#{$type}:hover {
      background-color: $color;

      .pair-card__type-icon--#{$type} {
        background-color: map-get($pair-dark-colors, $type);
      }
    }
  }

  &__title {
    font-weight: 700;
    text-align: center;
    font-size: 1.6rem;
  }

  &__type {
    display: flex;
    align-items: center;
    margin-top: 1rem;

    &-icon {
      display: inline-block;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      transition: all 200ms ease-in;

      @each $type, $color in $pair-primary-colors {
        &--#{$type} {
          background-color: $color;
        }
      }
    }

    &-text {
      margin-left: 1rem;
    }
  }

  &__location {
    margin-top: 0.6rem;

    &-text {
      margin-left: 0.4rem;
    }
  }
}
</style>
