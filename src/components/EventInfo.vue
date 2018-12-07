<template>
  <div 
    :class="'modal_div ' + (isVisible ? 'modal_visible ' : 'modal_hidden ') + event.type.type">
    <span class='modal_close' @click.stop="closeModal">X</span>
    <p class='pair-title'>{{ event.subject.title }}</p>
    <hr />
    <div class='pair-desc'>
      <p>Тип</p>
      <p>Аудитория</p>
      <p>Преподаватель</p>
      <p>Группы</p>
    </div>
    <div class='pair-info'>
      <p>{{ event.type.full_name }}</p>
      <p>{{ event.auditory }}</p>
      <p>{{ (event.teacher && event.teacher.full_name) || '-' }}</p>
      <p>{{ event.groups.map(g => g.name).join(', ') }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EventInfo',
    props: ['isVisible', 'event'],
    methods: {
      closeModal() {
        this.$emit('close-modal')
      }
    }
  }
</script>
