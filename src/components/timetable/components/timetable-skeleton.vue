<template>
  <div class="timetable-skeleton">
    <legend-skeleton class="timetable-skeleton__legend" />

    <div class="timetable-skeleton__periods">
      <periods-column-skeleton
        v-for="i in 9"
        :key="i"
        class="timetable-skeleton__periods-column"
      />
    </div>
  </div>
</template>

<script>
import LegendSkeleton from './legend-skeleton'
import PeriodsColumnSkeleton from './periods-column-skeleton'

export default {
  name: 'timetable-skeleton',
  components: {
    LegendSkeleton,
    PeriodsColumnSkeleton,
  },
}
</script>

<style lang="scss" scoped>
.timetable-skeleton {
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
