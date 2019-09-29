<template>
  <div class="periods-cell">
    <period-card
      v-for="(period, i) in periods"
      :key="i"
      :period="period"
      class="periods-cell__period"
    />
  </div>
</template>

<script>
import PeriodCard from '@common/components/period-card'

export default {
  name: 'periods-cell',
  components: {
    PeriodCard,
  },

  props: {
    periods: { type: Array, required: true },
  },
}
</script>

<style lang="scss" scoped>
.periods-cell {
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
</style>
