<template>
  <div class="periods-table">
    <timetable-legend class="periods-table__legend" />

    <div class="periods-table__periods">
      <periods-column
        v-for="datePeriods in periodsMap"
        :key="datePeriods.date.getTime()"
        :date="datePeriods.date"
        :periods="datePeriods.periods"
        class="periods-table__column"
      />
    </div>
  </div>
</template>

<script>
import PeriodsColumn from './periods-column'
import TimetableLegend from './timetable-legend'

import { DateUtil } from '@utils/date.util'

export default {
  name: 'periods-table',
  components: {
    PeriodsColumn,
    TimetableLegend,
  },

  props: {
    periods: { type: Array, required: true },
  },

  computed: {
    filteredPeriods () {
      return this.periods
    },

    periodDates () {
      const periodDates = this.filteredPeriods.map(p => p.startDate.getTime())
      const startDate = new Date(Math.min(...periodDates))
      const endDate = new Date(Math.max(...periodDates))

      return DateUtil.getDatesArray(startDate, endDate)
    },

    periodsMap () {
      return this.periodDates.map(date => ({
        date,
        periods: this.filteredPeriods.filter(p => {
          return p.startDate.toLocaleDateString() === date.toLocaleDateString()
        }),
      }))
    },
  },

  mounted () {
    const options = {
      container: '.periods-table__periods',
      easing: 'linear',
      offset: 1,
      force: true,
      cancelable: true,
      x: true,
      y: false,
    }
    this.$scrollTo('.periods-column--present', -1, options)
  },
}
</script>

<style lang="scss" scoped>
.periods-table {
  display: flex;

  &__legend {
    width: 6rem;
  }

  &__periods {
    width: calc(100% - 6rem);
    display: flex;
    overflow-x: scroll;

    @include scrollbar;
  }
}
</style>
