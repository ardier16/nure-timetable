<template>
  <div class="timetable">
    Timetable here
    Group: {{ $route.query.group }}
    <br>
    {{ pairs[0] }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { types } from '@store/types'

export default {
  name: 'timetable',

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
}
</style>
