<template>
  <div class='menu-bar'>
    <ul>
      <li>Hi</li>
      <li>Hi2</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "MobileMenuBar",
  data: () => ({

  })
}</script>
<style scoped>
.menu-bar{
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 150px;
  background-color: rgb(33,33,33)
}

li {
  color: white;
}
</style>
