<template>
  <div class="Timetable">
    <h1 class="text-center">Timetable for the group ПІ-15-5</h1>
    <EventsTable />
  </div>
</template>

<script>
  import EventsTable from './EventsTable.vue'

  export default {
    name: 'Timetable',
    components: {
      EventsTable
    }
  }
</script>

<style lang="scss">
.Timetable {
  width: 90%;
  margin: auto;
}
</style>

