<template>
  <transition name="ui-modal__fade">
    <div
      v-if="isOpen || curMode === modes.bottom"
      class="ui-modal"
      :class="`ui-modal--${curMode}`"
    >
      <div
        class="ui-modal__backdrop"
        :class="[
          `ui-modal__backdrop--${curMode}`,
          isOpen && 'ui-modal__backdrop--open',
        ]"
        ref="backdrop"
        @click.stop="closeOnClickBackdrop && emitClose()"
      />

      <div
        class="ui-modal__box"
        :class="`ui-modal__box--${curMode}`"
        :style="boxStyle"
        ref="box"
      >
        <template v-if="curMode === modes.bottom">
          <div
            class="ui-modal__box-thumb"
            @touchstart="startTouch"
            @touchmove.prevent="moveTouch"
            @touchend="endTouch"
          >
            <span class="ui-modal__box-thumb-dash" />
          </div>
        </template>

        <template v-else>
          <button
            v-if="showCloseButton"
            class="ui-modal__close-btn"
            @click.stop="emitClose"
          >
            <i class="mdi mdi-close ui-modal__close-btn-icon" />
          </button>
        </template>

        <div
          class="ui-modal__content"
          :class="{ 'ui-modal__content--bottom': curMode === modes.bottom }"
        >
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ResizeListenerMixin from '@common/mixins/resize-listener'
import BodyScrollPreventer from '@utils/body-scroll-preventer'

const events = {
  updateIsOpen: 'update:isOpen',
}

const modes = {
  bottom: 'bottom',
  default: 'default',
}

export default {
  name: 'ui-modal',
  mixins: [ResizeListenerMixin],

  props: {
    showCloseButton: {
      type: Boolean,
      default: true,
    },

    isOpen: {
      type: Boolean,
      default: false,
    },

    closeOnClickBackdrop: {
      type: Boolean,
      default: true,
    },

    mode: {
      type: String,
      default: modes.default,
    },

    modeXs: {
      type: String,
      default: modes.default,
    },
  },

  data () {
    return {
      modes,
      isTouchActive: false,
      initialTouchY: 0,
      touchDelta: 0,
    }
  },

  computed: {
    curMode () {
      return this.window.isUnderXs && this.modeXs
        ? this.modeXs
        : this.mode
    },

    boxStyle () {
      return (
        this.curMode === modes.bottom && this.isOpen && {
          transform: `translateY(${this.touchDelta}px)`,
          transition: this.isTouchActive ? 'none' : 'all linear 200ms',
        }
      )
    },
  },

  watch: {
    isOpen (value) {
      if (value) {
        BodyScrollPreventer.on()
        this.attachResizeListener()
      } else {
        BodyScrollPreventer.off()
        this.detachResizeListener()
      }
    },
  },

  methods: {
    emitClose () {
      this.$emit(events.updateIsOpen, false)
    },

    startTouch (e) {
      this.isTouchActive = true
      this.initialTouchY = e.touches[0].pageY
    },

    moveTouch (e) {
      const moveDeltaY = e.touches[0].pageY - this.initialTouchY

      if (moveDeltaY > 0) {
        this.touchDelta = moveDeltaY
      }
    },

    endTouch () {
      this.isTouchActive = false

      if (this.touchDelta > this.$refs.box.clientHeight / 2) {
        this.emitClose()
      }

      this.touchDelta = 0
      this.initialTouchY = 0
    },
  },
}
</script>

<style lang="scss" scoped>
$thumb-h: 2.5rem;

.ui-modal {
  &--default {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: $z-modal;
    box-sizing: border-box;
  }

  &__backdrop {
    background-color: rgba($color-black, 0.8);
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;

    &--default {
      position: absolute;
      right: 0;
      bottom: 0;
    }

    &--bottom {
      position: fixed;
      width: 100%;
      height: 100%;
      transition: all 0.25s ease-out;
    }

    &--open {
      opacity: 1;
      visibility: visible;
    }

    &--bottom.ui-modal__backdrop--open {
      z-index: $z-modal - 1;
    }
  }

  &__box {
    background-color: $color-app-bg;
    box-shadow: 0.2rem 0.2rem 2rem 0.1rem rgba($color-black, 0.5);

    &--default {
      position: relative;
      min-width: 10rem;
      min-height: 10rem;
      padding: 4rem;
      border-radius: 1rem;
    }

    &--bottom {
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      position: fixed;
      left: 0;
      bottom: 0;
      right: 0;
      transform: translateY(100%);
      transition: all linear 200ms;
      z-index: $z-modal;
    }

    &-thumb {
      height: $thumb-h;
      position: relative;
      width: 100%;

      &-dash {
        position: absolute;
        display: block;
        width: 5.6em;
        height: 0.4em;
        top: 1.1em;
        left: 50%;
        border-radius: 1em;
        transform: translateX(-50%);
        background-color: $color-primary;
      }
    }
  }

  &__close-btn {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.5s ease;
    border-radius: 50%;
    cursor: pointer;
    color: $color-primary;

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: rgba($color-secondary, 0.5);
    }

    &-icon {
      font-size: 2rem;
      line-height: 2rem;
      padding: 0.4rem;
    }
  }

  &__content {
    max-width: 100%;
    max-height: 100vh;
    overflow: auto;

    &--bottom {
      max-height: calc(75vh - #{$thumb-h});
      padding: 2rem;
      -webkit-overflow-scrolling: touch;
    }
  }

  &__fade-enter,
  &__fade-leave-active {
    opacity: 0;
  }

  &__fade-enter-active,
  &__fade-leave-active {
    transition: opacity 0.25s ease;
  }
}
</style>
