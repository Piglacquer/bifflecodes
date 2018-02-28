import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import MainPage from '@/components/MainPage'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'
import Video from '@/components/Video'
import WebDev from '@/components/WebDev'
import Photo from '@/components/Photo'
import Motion from '@/components/Motion'

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
        },
        {
          path: '/main/photo',
          name: 'Photo.vue',
          component: Photo
        },
        {
          path: '/main/video',
          name: 'Video.vue',
          component: Video
        },
        {
          path: '/main/webdev',
          name: 'WebDev.vue',
          component: WebDev
        },
        {
          path: '/main/motion',
          name: 'Motion.vue',
          component: Motion
        }
      ]
    }
  ]
})
