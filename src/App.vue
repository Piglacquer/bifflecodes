<template>
  <div id="app">
    <transition name='fade'>
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.fade = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  }
}
}
</script>

<style>

body{
  background-color: black;
  padding: 0;
  margin: 0;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: 1s;
}

.fade-enter-active {
  transition-delay: 1s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
