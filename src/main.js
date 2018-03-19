// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMq from 'vue-mq'
import VueParticles from 'vue-particles'
import EmailJS from 'emailjs-com'

Vue.use(VueParticles)
Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    laptop: 1250,
    desktop: Infinity
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
