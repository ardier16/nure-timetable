export default {
  counter: 0,
  scrollTop: 0,
  originalStyles: '',
  scrollContainer: document.scrollingElement || document.documentElement,

  on: function () {
    if (this.counter === 0) {
      this.scrollTop = this.scrollContainer.scrollTop
      this.originalStyles = document.body.style.cssText
      document.body.style.cssText = ';' + `
        overflow: hidden;
        position: fixed;
        height: 100%;
        width: 100%;
        top: ${-this.scrollTop}px;
      `.replace(/\s/, '')
    }

    this.counter++
  },

  off: function () {
    if (this.counter === 0) {
      return
    }

    this.counter--

    if (this.counter === 0) {
      document.body.style.cssText = this.originalStyles
      this.scrollContainer.scrollTop = this.scrollTop
    }
  },
}
