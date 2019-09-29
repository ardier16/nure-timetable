import { breakpoints } from '@utils/media'

export default {
  data () {
    return {
      window: {
        width: 0,
        isUnderXs: false,
        isUnderSm: false,
      },
    }
  },

  methods: {
    attachResizeListener () {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    },

    detachResizeListener () {
      window.removeEventListener('resize', this.handleResize)
    },

    handleResize () {
      const width = window.innerWidth
      this.window.width = width
      this.window.isUnderXs = width <= breakpoints.XS
      this.window.isUnderSm = width <= breakpoints.SM
    },
  },
}
