<template>
  <div class="timetable">
    <template v-if="isLoaded && pairs.length">
      <pairs-table :pairs="pairs" />
    </template>

    <template v-else-if="!isLoaded">
      <timetable-skeleton />
    </template>
  </div>
</template>

<script>
import TimetableSkeleton from './components/timetable-skeleton'
import PairsTable from './components/pairs-table'

import { mapActions, mapGetters } from 'vuex'
import { types } from '@store/types'

export default {
  name: 'timetable',
  components: {
    TimetableSkeleton,
    PairsTable,
  },

  data: () => ({
    isLoaded: false,
  }),

  computed: {
    ...mapGetters({
      pairs: types.pairs,
    }),
  },

  async created () {
    await this.loadTimetable(this.$route.query.group)
    this.isLoaded = true
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

  padding-top: 1rem;
  padding-bottom: 1rem;

  @include respond-to(small) {
    padding: 0;
  }
}
</style>
