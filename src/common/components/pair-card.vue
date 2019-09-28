<template>
  <div
    class="pair-card"
    :class="`pair-card--${pair.type}`"
  >
    <p class="pair-card__title">
      {{ pair.subject.shortName }}
    </p>

    <p
      class="pair-card__type"
      :class="`pair-card__type--${pair.type}`"
    >
      {{ `pair-types-short.${pair.type}` }}
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
  padding: 2rem;
  border: 0.1rem solid $color-primary;
  width: 16rem;
  border-radius: 0.5rem;

  @include box-shadow;
}
</style>
