<template>
  <div id="projects">
      <h1>IM PROJECTS</h1>
      <h2>WEB</h2>
      <div class="projects-container">
        <div class="project">
          <div class='project-pic'>
            <img class='project-pic' src="../../static/TF.png" alt="Terra-Former">
          </div>
          <div class='project-info-slider'>
            <h2>WEB</h2>
            <h3>TERRA-FORMER</h3>
            <div class='project-info'>
              <a target="_blank" href='https://github.com/TerraFormersApp'>
                <img src='static/github-logo.png'>
              </a>
              <a target="_blank" href='https://terra-former.firebaseapp.com/#/'>
                <img src='static/sign-out-option.png'>
              </a>
            </div>
          </div>
        </div>
        <div class="project">
          <div class='project-pic'>
            <img class='project-pic' src="static/Weredar.png" alt="weredar">
          </div>
          <div class='project-info-slider'>
            <h2>WEB</h2>
            <h3>WEREDAR</h3>
            <div class='project-info'>
              <a target="_blank" href='https://github.com/TheMoonMoth/Were.com--Frontend'>
                <img src='static/github-logo.png'>
              </a>
              <a target="_blank" href='https://weredar-1.firebaseapp.com/'>
                <img src='static/sign-out-option.png'>
              </a>
            </div>
          </div>
        </div>
        <div class="project">
          <div class='project-pic'>
            <img class='project-pic' src="static/oysterWithCaviar.png" alt="oysterWithCaviar">
          </div>
          <div class='project-info-slider'>
            <h2>WEB</h2>
            <h3>CAVIAR DREAMS</h3>
            <div class='project-info'>
              <a target='_blank' href='https://github.com/Piglacquer/towerClient'>
                <img src='static/github-logo.png'>
              </a>
              <a target='_blank' href='https://caviar-dreams-8c551.firebaseapp.com/#/'>
                <img src='static/sign-out-option.png'>
              </a>
            </div>
          </div>
        </div>
        <div class="project">
          <div class='project-pic'>
          </div>
          <div class='project-info-slider'>
            <div class='project-info'>
              <a href=''>
                <img src='static/github-logo.png'>
              </a>
              <a href=''>
                <img src='static/sign-out-option.png'>
              </a>
            </div>
          </div>
        </div>
      </div>
      <h2>FILM</h2>
      <div class="projects-container">
        <div class="project">
          <div class='project-pic'>
            <img class='project-pic' src="static/CultSundays.png" alt="CultSundays">
          </div>
          <div class='project-info-slider'>
            <h2>FILM</h2>
            <h3>CULT SUNDAYS</h3>
            <div class='project-info'>
              <a target="_blank" href='https://vimeo.com/search?q=kadencedist+cult+sundays'>
                <img src='static/vimeo.png'>
              </a>
            </div>
          </div>
        </div>
        <div class="project">
          <div class='project-pic'>
            <img class='project-pic' src="static/Homecoming.png" alt="homecoming">
          </div>
          <div class='project-info-slider'>
            <h2>FILM</h2>
            <h3>HOMECOMING</h3>
            <div class='project-info'>
              <a target="_blank" href='https://www.youtube.com/watch?v=5SKg8R6Wo4Q'>
                <img src='static/youtube.png'>
              </a>
            </div>
          </div>
        </div>
        <div class="project">
          <div class='project-pic'>
            <img class='project-pic' src="../../static/ThursdayThrows.png" alt="ThursdayThrows">
          </div>
          <div class='project-info-slider'>
            <h2>FILM</h2>
            <h3>THURSDAY THROWS</h3>
            <div class='project-info'>
              <a target="_blank" href='https://vimeo.com/search?q=kadencedist+thursday+throws'>
                <img src='static/vimeo.png'>
              </a>
            </div>
          </div>
        </div>
        <div class="project">
          <div class='project-pic'>
            <img class='project-pic' src="../../static/chocopie.png" alt="Chocopie">
          </div>
          <div class='project-info-slider'>
            <h2>FILM</h2>
            <h3>CHOCO-PIE</h3>
            <div class='project-info'>
              <a target='_blank' href='https://vimeo.com/129407891'>
                <img src='static/vimeo.png'>
              </a>
            </div>
          </div>
        </div>
      </div>
      <h2>MOTION</h2>
      <div class="projects-container">
        <div class="project">
          <div class='project-pic'>
        </div>
        <div class='project-info-slider'>
          <div class='project-info'>
            <a href=''>
              <img src='static/github-logo.png'>
            </a>
            <a href=''>
              <img src='static/sign-out-option.png'>
            </a>
          </div>
        </div>
        </div>
      </div>
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
  width: 300px;
}

.project-info-slider{
  display: flex;
  flex-flow: column nowrap;
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

.project:hover .project-info-slider{
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

h2, h3{
  white-space: nowrap;
  color: white;
  font-family: DejaVu;
}

</style>
