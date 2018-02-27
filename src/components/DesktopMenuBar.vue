<template>
  <div class='menu-bar'>
    <lottie :options="defaultOptions" :height="100" :width="100" v-on:animCreated="handleAnimation"/>
    <ul>
      <li>About</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>
  </div>
</template>
<script>
import Lottie from '../lottie.vue'
import * as animationData from '../../static/PB.json'

export default {
  name: "DesktopMenuBar",
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
  flex-flow: column nowrap;
  height: 100%;
  width: 240px;
  background-color: rgb(33,33,33)
}

li{
  color: white;
}
</style>
