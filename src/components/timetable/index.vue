<template>
  <div class="timetable">
    <div class="timetable__pairs">
      <pair-card
        v-for="(pair, i) in pairs"
        :key="i"
        :pair="pair"
        class="timetable__pair"
      />
    </div>
  </div>
</template>

<script>
import PairCard from '@common/components/pair-card'

import { mapActions, mapGetters } from 'vuex'
import { types } from '@store/types'

export default {
  name: 'timetable',
  components: {
    PairCard,
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
  @include container;

  padding-top: 10rem;
  padding-bottom: 10rem;

  &__pairs {
    display: flex;
    flex-wrap: wrap;
    margin: -1rem;
  }

  &__pair {
    margin: 1rem;
  }
}
</style>
