<template>
  <div id="">
    <h1>IM PROJECTS</h1>
    <div class="project-types">
      <router-link to='/main/webdev'>WEB DEV</router-link>
      <router-link to='/main/motion'>MOTION</router-link>
      <router-link to='/main/film'>FILM</router-link>
      <router-link to='/main/photo'>PHOTO</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Projects",
  data(){
    return {}
  }
}</script>
<style scoped>
h1 {
  color: white;
  font-family: DejaVu;
  padding-left: 20px;
  margin: 0;
  font-size: 3rem;
}

.project-types router-link {
  font-family: DejaVu;
  color: white;
}
</style>
