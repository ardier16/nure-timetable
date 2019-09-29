<template>
  <div class="timetable">
    <div
      v-if="pairs.length"
      class="timetable__pairs"
    >
      <pairs-table :pairs="pairs" />
    </div>
  </div>
</template>

<script>
import PairsTable from './components/pairs-table'

import { mapActions, mapGetters } from 'vuex'
import { types } from '@store/types'

export default {
  name: 'timetable',
  components: {
    PairsTable,
  },

  computed: {
    ...mapGetters({
      pairs: types.pairs,
    }),
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
