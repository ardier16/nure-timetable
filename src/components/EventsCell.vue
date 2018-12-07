<template>
  <div :class="'pairs-block ' + (events.length > 1 ? 'multiple' : '')" @mouseover="events.length > 1 ? isScrolled = true : null"
    @mouseout="events.length > 1 ? isScrolled = false : null" @mousewheel.stop="scroll($event)">
    <Event v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
  import Event from './Event'

  const SCROLL_COEFF = 1.2

  export default {
    name: 'EventsCell',
    props: ['events'],
    data: function () {
      return {
        isScrolled: false
      }
    },
    components: {
      Event
    },
    methods: {
      scroll(e) {
        if (!this.isScrolled) {
          document.getElementById("timetable-block").scrollLeft += SCROLL_COEFF * e.deltaY;
        }
      }
    }
  }
</script>

<style lang="scss">
  .pairs-block {
    width: 120px;
    height: 80px;
    color: black;
  }

  .multiple {
    display: block;
    overflow: auto;
    max-height: 90px;
  }
</style>
