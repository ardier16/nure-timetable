<template>
  <div class="pairs-table">
    <timetable-legend class="pairs-table__legend" />

    <div class="pairs-table__pairs">
      <pairs-column
        v-for="datePairs in pairsMap"
        :key="datePairs.date.getTime()"
        :date="datePairs.date"
        :pairs="datePairs.pairs"
        class="pairs-table__column"
      />
    </div>
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
    filteredPairs () {
      return this.pairs
    },

    pairDates () {
      const pairDates = this.filteredPairs.map(p => p.startDate.getTime())
      const startDate = new Date(Math.min(...pairDates))
      const endDate = new Date(Math.max(...pairDates))

      return DateUtil.getDatesArray(startDate, endDate)
    },

    pairsMap () {
      return this.pairDates.map(date => ({
        date,
        pairs: this.filteredPairs.filter(p => {
          return p.startDate.toLocaleDateString() === date.toLocaleDateString()
        }),
      }))
    },
  },

  mounted () {
    const options = {
      container: '.pairs-table__pairs',
      easing: 'linear',
      offset: 1,
      force: true,
      cancelable: true,
      x: true,
      y: false,
    }
    this.$scrollTo('.pairs-column--present', -1, options)
  },
}
</script>

<style lang="scss" scoped>
.pairs-table {
  display: flex;

  &__legend {
    width: 6rem;
  }

  &__pairs {
    width: calc(100% - 4rem);
    display: flex;
    overflow-x: scroll;

    @include scrollbar;
  }
}
</style>
