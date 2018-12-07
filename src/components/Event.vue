<template>
  <div :class="'pair open_modal ' +  event.type.type" @click="showModal">
    <p>{{ event.subject.brief }}</p>
    <p>{{ event.type.short_name + ' ' + event.auditory }}</p>
    <EventInfo @close-modal="closeModal" :event="event" :isVisible="modalVisible" />
  </div>
</template>

<script>
  import EventInfo from './EventInfo.vue'

  export default {
    name: 'Event',
    components: {
      EventInfo
    },
    props: ['event'],
    data: function () {
      return {
        modalVisible: false
      }
    },
    methods: {
      showModal() {
        const overlay = document.getElementById('overlay')

        this.modalVisible = true
        overlay.addEventListener('click', this.closeModal)
        overlay.className = 'modal_visible'
      },

      closeModal() {
        const overlay = document.getElementById('overlay')

        this.modalVisible = false
        overlay.removeEventListener('click', this.showModal)
        overlay.className = 'modal_hidden'
      }
    }
  }
</script>

<style lang="scss">
  $lectureColor: #ffe778;
  $labColor: #e4bef5;
  $practiceColor: #ccf997;
  $examColor: #ffb2ac;
  $testColor: #ffcac6;
  $consultationColor: #c1e9ef;

  .pair {
    cursor: pointer;
    font-size: 11pt;
    border-style: solid;
    border-radius: 4px;
    height: 70px;
    width: 100px;
    border-width: 1px;
    vertical-align: middle;
    text-align: center;
    margin: 10px;
    padding: 10% 0%;
    font-family: sans-serif;
  }

  .pair>p {
    margin-bottom: 3px;
  }


  .lecture {
    background-color: $lectureColor;
  }

  .laboratory {
    background-color: $labColor;
  }

  .practice {
    background-color: $practiceColor;
  }

  .exam {
    background-color: $examColor;
  }

  .test {
    background-color: $testColor;
  }

  .consultation {
    background-color: $consultationColor;
  }




  /* last pairs */
  .lastpair-td {
    background-color: rgba(152, 152, 152, 0.55);
  }

  .lastpair-td .lecture {
    background-color: desaturate(darken($lectureColor, 25%), 50%);
  }

  .lastpair-td .laboratory {
    background-color: desaturate(darken($labColor, 25%), 50%);
  }

  .lastpair-td .practice {
    background-color: desaturate(darken($practiceColor, 25%), 50%);
  }

  .lastpair-td .exam {
    background-color: desaturate(darken($examColor, 25%), 50%);
  }

  .lastpair-td .test {
    background-color: desaturate(darken($testColor, 25%), 50%);
  }

  .lastpair-td .consultation {
    background-color: desaturate(darken($consultationColor, 25%), 50%);
  }




  .pair-title {
    font-size: 20pt;
    font-weight: bold;
  }

  .pair-desc {
    text-align: left;
    margin-left: 10px;
    display: block;
    width: 40%;
  }

  .pair-info {
    width: 60%;
    margin-left: 203px;
    text-align: right;
    margin-right: 10px;
    display: block;
    margin-top: -211px;
    font-style: italic;
  }




  /* overlay */
  #overlay {
    z-index: 0;
    position: fixed;
    background-color: #000;
    opacity: 0.8;
    -moz-opacity: 0.8;
    filter: alpha(opacity=80);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    cursor: pointer;
  }




  /* modals */
  @keyframes fadeIn {
    from {
      opacity: 0;
      visibility: hidden;
    }

    to {
      opacity: 0.8;
      visibility: visible;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 0.8;
      visibility: visible;
    }

    to {
      opacity: 0;
      visibility: hidden;
    }
  }

  .modal_visible {
    animation-name: 'fadeIn';
    z-index: 1;
    animation-duration: 0.5s;
    visibility: visible;
  }

  .modal_hidden {
    z-index: 5;
    animation-name: 'fadeOut';
    animation-duration: 0.5s;
    visibility: hidden;
  }

  .modal_div {
    width: 600px;
    height: 400px;
    border-radius: 20px;
    border: 2px #000 solid;
    position: fixed;
    top: 45%;
    left: 50%;
    margin-top: -200px;
    margin-left: -300px;
    padding: 20px 10px;
    font-size: 14pt;
    cursor: default;
  }

  .modal_div .modal_close {
    width: 36px;
    height: 33px;
    position: absolute;
    font-size: 17pt;
    top: 12px;
    right: 12px;
    cursor: pointer;
    display: block;
    color: white;
    background-color: rgba(255, 4, 4, 0.6);
    border-radius: 50%;
  }

  .modal_div>div>p {
    margin-top: 25px;
    font-size: 15pt;
  }
</style>