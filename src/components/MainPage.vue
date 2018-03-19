<template>
  <div class='container-main'>
    <mq-layout mq="mobile">
      <MobileMenuBar />
    </mq-layout>
    <mq-layout mq="laptop+">
      <DesktopMenuBar />
    </mq-layout>
    <div class="particles">
      <vue-particles color="#dedede"></vue-particles>
    </div>
    <div class="router">
      <transition name='slide'>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import DesktopMenuBar from '@/components/DesktopMenuBar'
import MobileMenuBar from '@/components/MobileMenuBar'

export default {
  name: "Main",
  data(){
    return {

    }
  },
  components: {
    MobileMenuBar,
    DesktopMenuBar
  }
}</script>
<style scoped>
.particles {
  z-index: -1;
  position: absolute;
  top: 90;
  width: 100%;
  height: 85%;
}

vue-particles {
  width: 100%;
  height: 100vh;
}

h1 {
  color: white;
}

.slide-enter-active, .slide-leave-active {
  transition: opacity 1s, transform 1s;
  /* transition-delay: 1s; */
}
.slide-enter {
  opacity: 0;
  transform: translateX(-30%);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(50%);
}

.slide-enter-active {
  transition-delay: 1s;
}

</style>
