/**
 * Make a component lazy-loadable, with a placeholder.
 *
 * @param {object} params Lazy load options.
 * @param {object} params.name Component name.
 * @param {function.<Promise>} params.importComponent Loads the component.
 * @param {object} [params.placeholderComponent] Placeholder component.
 * @param {function.<Promise>} [params.createDependencies] Initialize
 * dependencies before the component is rendered.
 * @param {function} [params.destroyDependencies] Destroy
 * component dependencies after component destruction.
 *
 * @return {function.<Promise>} Returns an async component factory.
 */
export function createLazyLoadWrapper ({
  name,
  placeholderComponent,
  importComponent,
  createDependencies = () => Promise.resolve(),
  destroyDependencies = () => {},
}) {
  return async () => ({
    name: `${name}-module`,

    data () {
      return {
        ready: false,
        component: null,
      }
    },

    render (createElement) {
      if (!this.ready) {
        return createElement(placeholderComponent)
      }

      return createElement(this.component)
    },

    async created () {
      const [component] = await Promise.all([
        importComponent(),
        createDependencies(),
      ])
      this.component = component
      this.ready = true
    },

    destroyed () {
      destroyDependencies()
    },
  })
}
