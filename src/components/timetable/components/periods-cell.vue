<template>
  <div class="periods-cell">
    <period-card
      v-for="(period, i) in periods"
      :key="i"
      class="periods-cell__period"
      :period="period"
      @click="$emit(events.periodSelected, period)"
    />
  </div>
</template>

<script>
import PeriodCard from '@common/components/period-card'

const events = {
  periodSelected: 'period-selected',
}

export default {
  name: 'periods-cell',
  components: {
    PeriodCard,
  },

  props: {
    periods: { type: Array, required: true },
  },

  data: () => ({
    events,
  }),
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
