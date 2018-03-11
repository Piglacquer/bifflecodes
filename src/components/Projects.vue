<template>
  <div id="">
      <h1>IM PROJECTS</h1>
      <div class="projects-container">
        <div class="project">
          <div class='project-pic'>
            <img class='project-pic' src="../../static/TF.png" alt="Terra-Former">
          </div>
          <div class='project-info'>
            <a target="_blank" href='https://github.com/TerraFormersApp'>
              <img src='static/github-logo.png'>
            </a>
            <a target="_blank" href='https://terra-former.firebaseapp.com/#/'>
              <img src='static/sign-out-option.png'>
            </a>
          </div>
        </div>
        <div class="project">
          <div class='project-pic'>
          </div>
          <div class='project-info'>
            <a href=''>
              <img src='static/github-logo.png'>
            </a>
            <a href=''>
              <img src='static/sign-out-option.png'>
            </a>
          </div>
        </div>
        <div class="project">
          <div class='project-pic'>
          </div>
          <div class='project-info'>
            <a href=''>
              <img src='static/github-logo.png'>
            </a>
            <a href=''>
              <img src='static/sign-out-option.png'>
            </a>
          </div>
        </div>
        <div class="project">
          <div class='project-pic'>
            <img class='project-pic' src="../../static/chocopie.png" alt="Chocopie">
          </div>
          <div class='project-info'>
            <a target='_blank' href='https://vimeo.com/129407891'>
              <img src='static/github-logo.png'>
            </a>
            <a href=''>
              <img src='static/sign-out-option.png'>
            </a>
          </div>
        </div>
      </div>
    </nav>
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

.projects-container {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 100vw;
}

.project {
  display: flex;
  flex-flow: column nowrap;
  width: 300px;
  height: 300px;
  background-color: white;
  justify-content: center;
}

.project-info {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  opacity: 0.96;
  height: 300px;
  width: 0px;
  -webkit-transition: width .5s; /* Safari */
  transition: width .5s;
  background-color: #13CCB7;
  overflow: hidden;
}

.project:hover .project-info{
  width: 300px;
}

.project-pic {
  position: absolute;
  height: 300px;
  width: 300px;
}

img {
  position: abolute;
  width: 50px;
  height: 50px;
}

img:hover{
  background-color: black;
  padding: 5px;
  border-radius: 10px;
}
</style>
