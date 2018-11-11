<template>
  <div class='container-main'>
    <mq-layout mq="mobile">
      <MobileMenuBar />
    </mq-layout>
    <mq-layout mq="laptop+">
      <DesktopMenuBar />
      <div id="sphereContainer" ref="sphere" class="canvas1"></div>
    </mq-layout>
    <div class="router">
      <transition name='slide'>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import DesktopMenuBar from "@/components/DesktopMenuBar";
import MobileMenuBar from "@/components/MobileMenuBar";
import createScene from "@/components/Background.js"

export default {
  name: "Main",
  data() {
    return {};
  },
  components: {
    MobileMenuBar,
    DesktopMenuBar
  },
  mounted() {
    createScene()
  }
};
</script>

<style scoped>
#sphereContainer {
  position: absolute;
  z-index: -10;
}

h1 {
  color: white;
}

.slide-enter-active,
.slide-leave-active {
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
