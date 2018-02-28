<template>
  <div class='container-main'>
    <mq-layout mq="mobile">
      <MobileMenuBar />
    </mq-layout>
    <mq-layout mq="laptop+">
      <DesktopMenuBar />
    </mq-layout>
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
h1 {
  color: white;
}

.slide-enter-active, .slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

.slide-enter-active {
  transition-delay: 1s;
}
</style>
