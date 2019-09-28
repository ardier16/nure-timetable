import Vue from 'vue'
import Router from 'vue-router'

import Landing from '@components//landing'
import Timetable from '@components//timetable'

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
    {
      ...routes.timetable,
      component: Timetable,
    },
    {
      path: '*',
      redirect: routes.landing,
    },
  ],
})

export default router
