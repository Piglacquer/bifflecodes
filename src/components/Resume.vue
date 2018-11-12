<template>
  <div class='resume-container'>
    <h1 class='page-title'>RESUME</h1>
    <a href="https://drive.google.com/uc?export=download&id=1SW6Uu9_H_7Yh5GBjKcXgcppaUykZJpf7"><img class='resume' src="../../static/Biffle_Patrick-Resume.png" alt="resume"></a>
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
