import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import MainPage from '@/components/MainPage'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'
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
      component: MainPage,
      children: [
        {
          path: '/main/about',
          name: 'About.vue',
          component: About
        },
        {
          path: '/main/projects',
          name: 'Projects.vue',
          component: Projects
        },
        {
          path: '/main/resume',
          name: 'Resume.vue',
          component: Resume
        },
        {
          path: '/main/contact',
          name: 'Contact.vue',
          component: Contact
        }
      ]
    }
  ]
})
