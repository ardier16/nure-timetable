<template>
  <div class="periods-table">
    <timetable-legend class="periods-table__legend" />

    <div class="periods-table__periods">
      <periods-column
        v-for="datePeriods in periodsMap"
        :key="datePeriods.date.getTime()"
        class="periods-table__column"
        :date="datePeriods.date"
        :periods="datePeriods.periods"
        @period-selected="selectPeriod"
      />
    </div>

    <ui-modal
      :is-open.sync="isDetailsModalShown"
      mode-xs="bottom"
    >
      <period-details
        v-if="selectedPeriod"
        :period="selectedPeriod"
      />
    </ui-modal>
  </div>
</template>

<script>
import UiModal from '@components/ui/ui-modal'
import PeriodDetails from '@common/components/period-details'

import PeriodsColumn from './periods-column'
import TimetableLegend from './timetable-legend'

import { DateUtil } from '@utils/date.util'

export default {
  name: 'periods-table',
  components: {
    UiModal,
    PeriodDetails,
    PeriodsColumn,
    TimetableLegend,
  },

  props: {
    periods: { type: Array, required: true },
  },

  data: () => ({
    selectedPeriod: null,
    isDetailsModalShown: false,
  }),

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

  methods: {
    selectPeriod (period) {
      this.selectedPeriod = period
      this.isDetailsModalShown = true
    },
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
