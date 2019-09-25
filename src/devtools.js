import Vue from 'vue'
import { config } from './config'

if (config.ENABLE_DEVTOOLS === 'true') {
  Vue.config.devtools = true
}
