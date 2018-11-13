<template>
  <div class='about-container'>
    <h1 class='page-title'>ABOUT</h1>
    <div class='about-body'>
      <div class='about-body-container'>
        <h1 class='about-intro'>WELL, HELLO!</h1>
        <p class='about'><faceAnim class='face'/>The name's Patrick, Patrick Biffle. Glad you made it by my personal site. 
        I'm a full-stack web developer with a passion for problem solving. 
        Nothing gets me going quite like the thought of coming up with a creative, awesome solution, whether it be for a web app, 
        an animation, or a motor vehicle that just isn't behaving right (though I prefer the web app solutions). 
        Make yourself at home, take a look around, 
        and if you need anything, don't hesitate to drop me a line on the 
        <router-link to='/main/contact' class='white-link'>contact page</router-link>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import faceAnim from '@/components/FaceAnim'

export default {
  name: "About",
  components: {'faceAnim': faceAnim},
  data() {
    return {
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
  justify-content: space-between;
  height: 80vh;
  overflow: hidden;
  width: 100vw;
}

.about-body {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 60vw;
}

.face {
  float: left;
}

.about-intro {
  color: white;
  font-family: DejaVu;
  font-size: 2.5rem;
}

.about {
  color: white;
  font-size: 2rem;
  width: 40vw;
  font-family: "Tajawal", sans-serif;
}

.white-link {
  color: white;
}
</style>
