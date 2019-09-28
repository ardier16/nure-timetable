import Vue from 'vue'
import Router from 'vue-router'

import Landing from '@components//landing'
import { routes } from './routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      ...routes.landing,
      component: Landing,
    },
  ],
})

export default router
