<template>
  <div
    class="period-card"
    :class="[
      `period-card--${period.type}`,
      period.isLast && 'period-card--last'
    ]"
    @click="$emit(events.click)"
  >
    <p class="period-card__title">
      {{ period.subject.shortName }}
    </p>

    <p class="period-card__type">
      <span
        class="period-card__type-icon"
        :class="`period-card__type-icon--${period.type}`"
      >
      &nbsp;
      </span>

      <span class="period-card__type-text">
        {{ `period-types-short.${period.type}` | translate }}
      </span>
    </p>

    <p class="period-card__location">
      <i class="mdi mdi-map-marker-outline period-card__location-icon" />
      <span class="period-card__location-text">
        {{ period.auditory }}
      </span>
    </p>
  </div>
</template>

<script>
import { Period } from '@records/period'

const events = {
  click: 'click',
}

export default {
  name: 'period-card',

  props: {
    period: { type: Period, required: true },
  },

  data: () => ({
    events,
  }),
}
</script>

<style lang="scss" scoped>
.period-card {
  padding: 1.2rem;
  border: 0.1rem solid $color-primary;
  width: 12rem;
  height: 9rem;
  border-radius: 1rem;
  transition: all 200ms ease-in;
  cursor: pointer;

  @include box-shadow;

  @each $type, $color in $period-dark-colors {
    &--#{$type} {
      border-color: $color;
    }
  }

  @each $type, $color in $period-light-colors {
    &--#{$type}.period-card--last {
      background-color: $color;
    }
  }

  @each $type, $color in $period-primary-colors {
    &--#{$type}:hover {
      background-color: $color;

      .period-card__type-icon--#{$type} {
        background-color: map-get($period-dark-colors, $type);
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

      @each $type, $color in $period-primary-colors {
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
