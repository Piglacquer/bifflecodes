<template>
  <div class='contact'>
    <mq-layout mq="mobile">
      <h1>CONTACT</h1>
      <form class="mobile-form-contact" v-on:submit.prevent='sendEmail(client)' method="post">
        <label for="name">NAME</label>
        <input v-model='client.name' type="text" name="name" placeholder='Your Name'>
        <label for="email">E-MAIL</label>
        <input v-model='client.email' type="text" name="" placeholder='Your E-mail'>
        <label for="reason">WHAT CAN I HELP YOU WITH?</label>
        <input  v-model='client.message' class='mobile-form-reason' type="text" name="reason" placeholder='I really need some help with these bees'>
        <div class="">
          <input class='mobile-form-submit' type="submit" name="submit" value="Submit">
          <h3 v-if='responseShown' class='email-response'>{{response}}</h3>
        </div>
      </form>
    </mq-layout>
    <mq-layout mq="laptop+">
      <div class='contact'>
        <h1 class='page-title'>CONTACT</h1>
        <form class="laptop-form-contact" v-on:submit.prevent='sendEmail(client)' method="post">
          <label for="name">NAME</label>
          <input  v-model='client.name' type="text" name="name" placeholder='Your Name'>
          <label for="email">E-MAIL</label>
          <input  v-model='client.email' type="text" name="email" placeholder='Your E-mail'>
          <label for="reason">WHAT CAN I HELP YOU WITH?</label>
          <textarea  v-model='client.message' class='laptop-form-reason' type="text" name="reason" placeholder='I really need some help with these bees!!!' />
          <div class="submit-response">
            <input v-if='!responseShown' class='laptop-form-submit' type="submit" name="submit" value="SUBMIT">
            <h3 v-if='responseShown' class='email-response'>{{response}}</h3>
          </div>
        </form>
      </div>
    </mq-layout>
  </div>
</template>

<script>

export default {
  name: "Contact",
  data(){
    return{
      client: {
        email: '',
        name: '',
        message: ''
      },
      response: '',
      responseShown: false
    }
  },
  components: {

  },
  methods: {
    logMe(){
      console.log(this.client)
    },
    sendEmail(client){
      return fetch('https://bifflecodes-server.herokuapp.com/send', {
        method: 'POST',
        body: JSON.stringify(client),
        headers: {'content-type': 'application/json'}
      })
      .then(resp => resp.json())
      .then(resp => {
        this.response = resp.message
      })
      .then(() => this.wipeForm())
      .then(() => {
        setTimeout(() => {
          this.responseShown = false
        },2500)
      })
    },
    wipeForm(){
      this.client.email = ''
      this.client.name = ''
      this.client.message = ''
      this.responseShown = true
    }
  }
}
</script>

<style scoped>
.contact {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

h3 {
  margin: 0;
}

.email-response {
  padding: 10px;
  border-radius: 15px;
  border-style: none;
  background-color: #13CCB7;
  color: white;
  font-size: 2rem;
  font-family: DejaVu;
}

.submit-response{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
}

.contact{
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 0;
  padding: 0;
}

label {
  font-family: DejaVu;
}

.mobile-form-contact{
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: space-around;
  color: white;
  width: 80vw;
  background-color: black;
}

.mobile-form-contact input{
  width: 100%;
  padding: 5px 0 5px 0;
  margin: 10px 0 10px 0;
}

.mobile-form-reason{
  height: 25vh;
}
.mobile-form-submit{
  height: 10vh;
  width: 10vw;
  border-radius: 15px;
  border-style: none;
  background-color: rgb(33,33,33);
  color: white;
  font-size: 2rem;
  font-family: DejaVu;
}

.mobile-form-submit:active{
  background: #13CCB7;
  transition: all 0.4s ease 0s;
  border-style: none;
}

.laptop-form-contact{
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: space-around;
  color: white;
  font-size: 1rem;
  background-color: black;
  padding: 1rem;
}

input[type=text], textarea{
  border-style: solid;
  background-color: black;
  border-width: 0 0 1px 1px;
  border-color: white;
  color: white;
  padding: 5px 0 5px 8px;
  margin: 10px 0 10px 0;
}

input:focus, textarea:focus {
    outline: none !important;
    border:1px solid #13CCB7;
    box-shadow: 0 0 10px #13CCB7;
}

.laptop-form-reason{
  height: 30vh;
  width: 50vw;
  font-size: 2rem;
}

.laptop-form-submit{
  padding: 10px;
  border-radius: 15px;
  border-style: none;
  background-color: rgb(33,33,33);
  color: white;
  font-size: 2rem;
  font-family: DejaVu;
}

.laptop-form-submit:hover{
  background: #13CCB7;
  transition: all 0.4s ease 0s;
  border-style: none;
}
</style>
