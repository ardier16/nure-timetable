<template>
  <div class="timetable">
    Timetable here
    Group: {{ $route.query.group }}
  </div>
</template>

<script>
export default {
  name: 'timetable',
}
</script>

<style lang="scss" scoped>
.timetable {
  @include container;
}
</style>
