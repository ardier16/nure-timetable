<template>
  <form
    class="search-form"
    novalidate
    @submit.prevent
  >
    <ui-text />
    <ui-button
      class="search-form__submit-btn"
      type="submit"
      look="primary"
    >
      Search
    </ui-button>
  </form>
</template>

<script>
import UiText from '@components/ui/ui-text'
import UiButton from '@components/ui/ui-button'

export default {
  name: 'search-form',
  components: {
    UiText,
    UiButton,
  },
}
</script>

<style lang="scss" scoped>

</style>
