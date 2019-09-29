<template>
  <div class="period-details">
    <p class="period-details__title">
      {{ period.subject.name }}
    </p>

    <div class="period-details__info">
      <div class="period-details__info-block">
        <p class="period-details__info-block-lbl">
          {{ 'period-details.type' | translate }}
        </p>

        <p class="period-details__info-block-val">
          <span
            class="period-details__type-icon"
            :class="`period-details__type-icon--${period.type}`"
          >
            &nbsp;
          </span>

          <span class="period-details__type-text">
            {{ `period-types.${period.type}` | translate }}
          </span>
        </p>
      </div>

      <div class="period-details__info-block">
        <p class="period-details__info-block-lbl">
          {{ 'period-details.auditory' | translate }}
        </p>

        <p class="period-details__info-block-val">
          {{ period.auditory }}
        </p>
      </div>

      <div class="period-details__info-block">
        <p class="period-details__info-block-lbl">
          {{ 'period-details.teacher' | translate }}
        </p>

        <p class="period-details__info-block-val">
          {{ period.teacher.name || '—' }}
        </p>
      </div>

      <div class="period-details__info-block">
        <p class="period-details__info-block-lbl">
          {{ 'period-details.groups' | translate }}
        </p>

        <div class="period-details__info-block-val period-details__groups-wrp">
          <p
            v-for="group in period.groups"
            :key="group"
            class="period-details__group"
          >
            {{ group }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Period } from '@records/period'

const events = {
  click: 'click',
}

export default {
  name: 'period-details',

  props: {
    period: { type: Period, required: true },
  },

  data: () => ({
    events,
  }),
}
</script>

<style lang="scss" scoped>
.period-details {
  width: 50rem;

  @include respond-to(small) {
    width: 100%;
  }

  &__title {
    font-weight: 700;
    text-align: center;
    font-size: 2.4rem;

    @include respond-to(small) {
      font-size: 2rem;
    }
  }

  &__info {
    margin-top: 4rem;

    &-block {
      padding: 1.6rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:not(:last-child) {
        border-bottom: 0.1rem solid $color-secondary;
      }

      &-lbl {
        width: 40%;
      }

      &-val {
        margin-left: 2rem;
        width: 60%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-weight: 500;
        text-align: right;
      }
    }
  }

  &__type {
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

  $group-margin: 0.8rem;

  @include respond-to(small) {
    $group-margin: 0.4rem;
  }

  &__groups-wrp {
    display: flex;
    flex-wrap: wrap;
    margin: -$group-margin;
  }

  &__group {
    margin: $group-margin;
    background-color: $color-primary;
    color: $color-text-inverse;
    padding: 0.8rem;
    font-weight: 500;
    border-radius: 1rem;
  }
}
</style>
