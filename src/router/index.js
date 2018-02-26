import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import MainPage from '@/components/MainPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/main',
      name: 'MainPage',
      component: MainPage
    }
  ]
})
