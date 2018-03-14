<template>
  <div class='contact'>
    <mq-layout mq="mobile">
      <h1>IM CONTACT</h1>
      <form class="mobile-form-contact" v-on:submit.prevent='logMe' method="post">
        <label for="name">NAME</label>
        <input type="text" name="name" placeholder='Your Name'>
        <label for="email">E-MAIL</label>
        <input type="text" name="" placeholder='Your E-mail'>
        <label for="reason">WHAT CAN I HELP YOU WITH?</label>
        <input  class='mobile-form-reason' type="text" name="reason" placeholder='I really need some help with these bees'>
        <input class='mobile-form-submit' type="submit" name="submit" value="Submit">
      </form>
    </mq-layout>
    <mq-layout mq="laptop+">
      <h1>IM CONTACT</h1>
      <form class="laptop-form-contact" v-on:submit.prevent='logMe' method="post">
        <label for="name">NAME</label>
        <input  v-model='client.name' type="text" name="name" placeholder='Your Name'>
        <label for="email">E-MAIL</label>
        <input  v-model='client.email' type="text" name="email" placeholder='Your E-mail'>
        <label for="reason">WHAT CAN I HELP YOU WITH?</label>
        <input  v-model='client.reason' class='laptop-form-reason' type="text" name="reason" placeholder='I really need some help with these bees'>
        <input class='laptop-form-submit' type="submit" name="submit" value="SUBMIT">
      </form>
    </mq-layout>
  </div>
</template>
<script>
export default {
  name: "Contact",
  data(){
    return{
      client: {
        name: '',
        email: '',
        reason: ''
      }
    }
  },
  methods: {
    logMe(){
      console.log(this.client)
    }
  }
}</script>
<style scoped>

.contact{
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

h1 {
  color: white;
  font-family: DejaVu;
  /* padding-left: 3px; */
  margin: 0;
  font-size: 3rem;
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

input[type=text]{
  border-style: solid;
  background-color: black;
  border-width: 0 0 1px 1px;
  border-color: white;
  color: white;
  padding: 5px 0 5px 8px;
  margin: 10px 0 10px 0;
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
