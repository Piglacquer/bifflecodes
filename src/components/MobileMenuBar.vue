<template>
  <div class='menu-bar'>
    <router-link to='/main'>
      <div class="anim">
        <lottie :options="defaultOptions" :height="60" :width="60" v-on:animCreated="handleAnimation"/>
      </div>
    </router-link>
    <ul class='menu-links'>
      <router-link to="/main/projects" class='menu-link'>Projects</router-link>
      <router-link to="/main/about" class='menu-link'>About</router-link>
      <router-link to="/main/resume" class='menu-link'>Resume</router-link>
      <router-link to="/main/contact" class='menu-link'>Contact</router-link>
    </ul>
  </div>
</template>

<script>
import Lottie from '../lottie.vue'
import * as animationData from '../../static/PB.json'

export default {
  name: "MobileMenuBar",
  data: () => ({

  }),
  components: {
    'lottie': Lottie
  },
  data(){
    return {
      defaultOptions: {animationData: animationData},
      animationSpeed: 1,
      scrolled: false
    }
  },
  methods: {
      handleAnimation: function (anim) {
        this.anim = anim;
      },
      handleScroll () {
        this.scrolled = window.scrollY > 0
        play()
      },
      stop: function () {
        this.anim.stop();
      },
      play: function () {
        this.anim.play();
      },

      pause: function () {
        this.anim.pause();
      },
      onSpeedChange: function () {
        this.anim.setSpeed(this.animationSpeed);
      }
    }
}
</script>

<style scoped>
.menu-bar{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
  background-color: rgb(33,33,33);
  border-bottom: 3px solid rgb(20,20,20);
}

.menu-links {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 1000px;
  margin-right: 20px;
}

.menu-link{
  text-decoration: none;
  color: white;
  font-family: DejaVu;
  font-size: .7rem;
  padding: 2px;
  border-radius: 5px;
}

.menu-link:active {
  background: #13CCB7;
  transition: all 0.1s ease 0s;
}
</style>
