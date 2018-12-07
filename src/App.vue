<template>
<div id="app">
    <Timetable />
</div>
</template>

<script>
import Timetable from './components/Timetable.vue'

export default {
    name: 'app',
    components: {
        Timetable
    }
}
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 30px;
  padding-bottom: 20px;
  font-size: 12pt;
  margin-left: 10%;
}

/* scrollbar */
.multiple::-webkit-scrollbar,
#timetable-block::-webkit-scrollbar {
  height: 0.6em;
}

.multiple::-webkit-scrollbar {
  width: 0.5em;
}

.multiple::-webkit-scrollbar-track,
#timetable-block::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 3em;
}

.multiple::-webkit-scrollbar-thumb,
#timetable-block::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  border-radius: 3em;
  outline: 1px solid slategrey;
}

</style>
