<template>
  <div class='menu-bar'>
    <router-link to='/main'>
      <div class="anim">
        <lottie :options="defaultOptions" :height="80" :width="80" v-on:animCreated="handleAnimation"/>
      </div>
    </router-link>
    <ul class='menu-links'>
      <router-link to="/main/projects" class='menu-link'>PROJECTS</router-link>
      <router-link to="/main/about" class='menu-link'>ABOUT</router-link>
      <router-link to="/main/resume" class='menu-link'>RESUME</router-link>
      <router-link to="/main/contact" class='menu-link'>CONTACT</router-link>
    </ul>
  </div>
</template>
<script>
import Lottie from '../lottie.vue'
import * as animationData from '../../static/PB.json'

export default {
  name: "TabletMenuBar",
  data() {
    return {
      defaultOptions: {animationData: animationData},
      animationSpeed: 1,
      scrolled: false
    }
  },
  components: {
    'lottie': Lottie
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
}</script>
<style scoped>
.menu-bar{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  width: 100%;
  background-color: rgb(33,33,33);
  border-bottom: 5px solid rgb(20,20,20);
}

ul{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 50vw;
  margin-right: 20px;
  text-decoration: none;
}

.menu-link{
  text-decoration: none;
  color: white;
  font-family: DejaVu;
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 10px;
}

.menu-link:hover {
  background: #13CCB7;
  transition: all .4s ease 0s;
  box-shadow: -6px 6px rgb(97,97,97);
}

.menu-link:active{
  background: #13CCB7;
  transition: all .1s ease 0s;
  box-shadow: 0px 0px rgb(97,97,97);
}
</style>
