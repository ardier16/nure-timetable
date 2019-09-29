<template>
  <div class="timetable">
    <div
      v-if="pairs.length"
      class="timetable__pairs">
      <div
        v-for="datePairs in pairsMap"
        :key="datePairs.date.getTime()"
        class="timetable__date-pairs"
      >
        <p class="timetable__date-pairs-date">
          {{ datePairs.date.toLocaleDateString() }}
        </p>

        <div class="timetable__date-pairs-pairs">
          <pair-card
            v-for="(pair, i) in datePairs.pairs"
            :key="i"
            :pair="pair"
            class="timetable__pair"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PairCard from '@common/components/pair-card'

import { mapActions, mapGetters } from 'vuex'
import { types } from '@store/types'

import { DateUtil } from '@utils/date.util'

export default {
  name: 'timetable',
  components: {
    PairCard,
  },

  computed: {
    ...mapGetters({
      pairs: types.pairs,
    }),

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

  async created () {
    await this.loadTimetable(this.$route.query.group)
  },

  methods: {
    ...mapActions({
      loadTimetable: types.LOAD_TIMETABLE,
    }),
  },
}
</script>

<style lang="scss" scoped>
.timetable {
  @include container;

  padding-top: 10rem;
  padding-bottom: 10rem;

  &__date-pairs {
    &:not(:first-child) {
      margin-top: 2rem;
    }

    &-pairs {
      display: flex;
      flex-wrap: wrap;
      margin: -1rem;
    }
  }

  &__pair {
    margin: 1rem;
  }
}
</style>
