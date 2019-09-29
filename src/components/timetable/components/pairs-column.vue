<template>
  <div class="pairs-table">
    <p class="timetable__date-pairs-date">
      {{ date.toLocaleDateString() }}
    </p>

    <p class="timetable__date-pairs-pairs">
      <pair-card
        v-for="(pair, i) in pairs"
        :key="i"
        :pair="pair"
        class="timetable__pair"
      />
    </p>
  </div>
</template>

<script>
import PairCard from '@common/components/pair-card'

export default {
  name: 'pairs-column',
  components: {
    PairCard,
  },

  props: {
    date: { type: Date, required: true },
    pairs: { type: Array, required: true },
  },
}
</script>

<style lang="scss" scoped>

</style>
