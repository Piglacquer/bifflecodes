<template>
  <div class='project-container'>
    <h2>Project Name</h2>
    <img src="" alt="">
  </div>
</template>
<script>
export default {
  name: "ProjectContainer",
  data(){
    return {

    }
  }
}</script>
<style scoped>
.project-container{
  display: flex;
  flex-flow: column nowrap;
  background-color: white;
  width: 20vw;
  height: 20vh;
}

h2 {
  font-family: DejaVu;
}
</style>
