<template>
  <div class='landing-anim'>
    <mq-layout mq="mobile">
      <router-link to='main'>
        <div class="">
          <lottie :options="defaultOptions" :height="200" :width="200" v-on:animCreated="handleAnimation"/>
        </div>
      </router-link>
    </mq-layout>
    <mq-layout mq="laptop+">
      <router-link to='main'>
        <div class="">
          <lottie :options="defaultOptions" :height="600" :width="600" v-on:animCreated="handleAnimation"/>
        </div>
      </router-link>
    </mq-layout>
  </div>
</template>
<script>
import Lottie from '../lottie.vue'
import * as animationData from '../../static/PB.json';

export default {
  name: "LandingPage",
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
}</script>
<style scoped>
@font-face {
    font-family: "DejaVu";
    src: url(../../static/DejaVuSansMono-BoldOblique.ttf) format("truetype");
}
.landing-anim {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
}

/* .button-affirmative {
  background-color: rgb(19, 204, 183);
  border-radius: 15px;
  font-size: 2rem;
  font-family: DejaVu;
  color: rgb(33, 33, 33);
  text-decoration: none;
  padding: .5rem 1rem .5rem 1rem;
  opacity: 1;
  transition: 0.2s;
} */

/* .button-affirmative:hover {opacity: 0.7} */
</style>
