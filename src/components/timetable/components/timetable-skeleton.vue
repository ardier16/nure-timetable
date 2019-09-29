<template>
  <div class="timetable-skeleton">
    <legend-skeleton class="timetable-skeleton__legend" />

    <div class="timetable-skeleton__pairs">
      <pairs-column-skeleton
        v-for="i in 9"
        :key="i"
        class="timetable-skeleton__pairs-column"
      />
    </div>
  </div>
</template>

<script>
import LegendSkeleton from './legend-skeleton'
import PairsColumnSkeleton from './pairs-column-skeleton'

export default {
  name: 'timetable-skeleton',
  components: {
    LegendSkeleton,
    PairsColumnSkeleton,
  },
}
</script>

<style lang="scss" scoped>
.timetable-skeleton {
  display: flex;

  &__legend {
    width: 6rem;
  }

  &__pairs {
    width: calc(100% - 6rem);
    display: flex;
    overflow-x: scroll;

    @include scrollbar;
  }
}
</style>
