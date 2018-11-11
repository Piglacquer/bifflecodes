<template>
  <div class='about-container'>
    <Lottie :options='options' :height='height' :width='width' v-on:animCreated="handleAnimation"/>
    <div>
      <h1 class='about-intro'>Well, hello!</h1>
      <p class='about'>The name's Patrick. Glad you made it by my personal site. 
      I'm a full-stack web developer with a passion for problem solving. 
      Nothing gets me going quite like the thought of coming up with a creative, awesome solution, whether it be for a web app, 
      an animation, or a motor vehicle that just isn't behaving right (though I prefer the web app solutions). 
      Make yourself at home, take a look around, 
      and if you need anything, don't hesitate to drop me a line on the 
      <router-link to='/main/contact' class='white-link'>contact page</router-link>.
      </p>
    </div>
  </div>
</template>
<script>
import Lottie from '../lottie.vue'
import * as animationData from '../../static/face.json'

export default {
  name: "About",
  components: {'Lottie':Lottie},
  data() {
    return {
      options: {animationData: animationData},
      animationSpeed: 1,
      height: 400,
      width: 400,
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
};
</script>
<style scoped>
.about-container {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  height: 80vh;
}
.about-intro {
  color: white;
  font-family: DejaVu;
  padding-left: -75px;
  margin-top: 100px;
  font-size: 3rem;
}

.about {
  color: white;
  font-size: 2rem;
  width: 60vw;
  font-family: "Tajawal", sans-serif;
}

.white-link {
  color: white;
}
</style>
