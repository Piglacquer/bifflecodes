<template>
  <div id="">
    <mq-layout mq="mobile">
      <MobileMenuBar />
    </mq-layout>
    <mq-layout mq="laptop+">
      <DesktopMenuBar />
    </mq-layout>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import DesktopMenuBar from '@/components/DesktopMenuBar'
import MobileMenuBar from '@/components/MobileMenuBar'

export default {
  name: "MainPage",
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
</style>
