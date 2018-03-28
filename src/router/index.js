import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import RouteName from './RouteName'
import TablePage from '@/components/TablePage'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: RouteName.LandingPage,
      component: LandingPage
    }, {
      path: '/table',
      name: RouteName.Table,
      component: TablePage
    }
  ]
})

export default router
export { router, RouteName }
