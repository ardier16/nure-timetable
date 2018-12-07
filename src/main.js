import Vue from 'vue'
import App from './App.vue'
require('../node_modules/bootstrap/scss/bootstrap.scss')


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
