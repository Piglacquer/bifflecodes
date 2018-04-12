<template>
  <div class='resume-container'>
    <h1>RESUME</h1>
    <a href="https://drive.google.com/uc?export=download&id=1-MH3KslQLSE8Xb7MTZ6kOrT2VVq0Yr1r"><img class='resume' src="../../static/Biffle_Patrick-Resume.png" alt="resume"></a>
  </div>
</template>
<script>
export default {
  name: "Resume",
  data() {
    return {};
  }
};
</script>
<style scoped>
h1 {
  color: white;
  font-family: DejaVu;
  padding-left: 20px;
  margin: 0;
  font-size: 3rem;
}

.resume-container {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}
.resume {
  width: 80vw;
  height: auto;
}
</style>
