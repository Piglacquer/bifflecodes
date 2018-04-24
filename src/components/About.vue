<template>
  <div class='about-container'>
    <h1 class='about-intro'>GOOD DAY!</h1>
    <p class='about'>My name is Patrick Biffle, and I'm a full stack web developer with a passion for code, motors, and Mexican food. I spend most of my time on the front-end, using Vue and React. I also have a background in digital media creation. Check out some of my projects to see some of the work I've done. If you like it, and would like someone to help you get to where you want to be on the web, swing by the contact page and drop me a line!</p>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {};
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
  margin: 0;
  font-size: 3rem;
}

.about {
  color: white;
  font-size: 2rem;
  width: 60vw;
  font-family: "Tajawal", sans-serif;
}
</style>
