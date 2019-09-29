<template>
  <div class="pairs-table">
    <timetable-legend />

    <pairs-column
      v-for="datePairs in pairsMap"
      :key="datePairs.date.getTime()"
      :date="datePairs.date"
      :pairs="datePairs.pairs"
      class="timetable__date-pairs"
    />
  </div>
</template>

<script>
import PairsColumn from './pairs-column'
import TimetableLegend from './timetable-legend'

import { DateUtil } from '@utils/date.util'

export default {
  name: 'pairs-table',
  components: {
    PairsColumn,
    TimetableLegend,
  },

  props: {
    pairs: { type: Array, required: true },
  },

  computed: {
    pairDates () {
      const pairDates = this.pairs.map(p => p.startDate.getTime())
      const startDate = new Date(Math.min(...pairDates))
      const endDate = new Date(Math.max(...pairDates))

      return DateUtil.getDatesArray(startDate, endDate)
    },

    pairsMap () {
      return this.pairDates.map(date => ({
        date,
        pairs: this.pairs.filter(p => {
          return p.startDate.toLocaleDateString() === date.toLocaleDateString()
        }),
      }))
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
