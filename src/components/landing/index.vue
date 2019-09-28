<template>
  <div class="landing">
    <search-form />
    <services />
  </div>
</template>

<script>
import SearchForm from './components/search-form'
import Services from './components/services'

export default {
  name: 'landing',
  components: {
    SearchForm,
    Services,
  },
}
</script>

<style lang="scss" scoped>

</style>
