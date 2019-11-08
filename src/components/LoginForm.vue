<template>
  
   <!-- login -->
   <!-- v-if="!isRegistered" -->
  <div  class="register-container">
        <h1>Log In</h1>
        <form @submit.prevent="login()" style="display: inline-grid" class="form">
          <input style="width: 300px;" v-model="email" type="email" class="email" placeholder="Email">
            <p class="email-help">Please enter your current email address.</p>
          <input style="width: 300px;" v-model="password" type="password" class="password" placeholder="Password">
            <p class="email-help">Please enter your password.</p>
          <input @click="login()" type="submit" class="submit" value="Log In">
        </form>
  </div>
  <!-- end login  -->

</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email : '',
      password : ''
    }
  },
  methods : {

    login() {
      axios({
        method: 'post',
        url: 'http://localhost:3000/user/login',
        data : {
          email : this.email,
          password : this.password
        }
      })
      .then(({data}) => {
       console.log(data);
        this.$emit('setIsLogin', true)
       localStorage.setItem('token', data.token)
       
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>
/* codepen */

body {
  background: url(http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/dark_wall.png);
}
/*sass variables used*/
/*site container*/
.wrapper {
  width: 420px;
  margin: 0 auto;
}
h1 {
  text-align: center;
  padding: 30px 0px 0px 0px;
  font: 25px Oswald;
  color: #FFF;
  text-transform: uppercase;
  text-shadow: #000 0px 1px 5px;
  margin: 0px;
}
p {
  font: 13px Open Sans;
  color: rgb(56, 51, 51);
  text-shadow: #000 0px 1px 5px;
  margin-bottom: 30px;
}
.form-register {
  width: 100%;
  display: -moz-inline-grid
}
input[type="text"], input[type="email"], input[type="password"] {
  width: 98%;
  height : 50%;
  padding: 20px 0px 20px 20px;
  border-radius: 50px;
  box-shadow: inset 4px 6px 10px -4px rgba(0, 0, 0, 0.3), 0 1px 1px -1px rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.2);
  outline: none;
  border: none;
  border: 1px solid black;
  margin-bottom: 2px;
  color: rgb(37, 34, 34);
  text-shadow: rgb(34, 32, 32) 0px 1px 5px;
}
input[type="submit"] {
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  outline: none;
  border: none;
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#28D2DE), to(#1A878F));
  background-image: -webkit-linear-gradient(#28D2DE 0%, #1A878F 100%);
  background-image: -moz-linear-gradient(#28D2DE 0%, #1A878F 100%);
  background-image: -o-linear-gradient(#28D2DE 0%, #1A878F 100%);
  background-image: linear-gradient(#28D2DE 0%, #1A878F 100%);
  font: 14px Oswald;
  color: #FFF;
  text-transform: uppercase;
  text-shadow: #000 0px 1px 5px;
  border: 1px solid #000;
  opacity: 0.7;
  -webkit-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.7);
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.7);
  border-top: 1px solid rgba(255, 255, 255, 0.8) !important;
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(50%, transparent), to(rgba(255, 255, 255, 0.2)));
}
input:focus {
  box-shadow: inset 4px 6px 10px -4px rgba(0, 0, 0, 0.7), 0 1px 1px -1px rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.3);
  -webkit-transition: 1s ease;
  -moz-transition: 1s ease;
  -o-transition: 1s ease;
  -ms-transition: 1s ease;
  transition: 1s ease;
}
input[type="submit"]:hover {
  opacity: 1;
  cursor: pointer;
}
.name-help, .email-help {
  display: none;
  padding: 0px;
  margin: 0px 0px 15px 0px;
}
.optimize {
  position: fixed;
  right: 3%;
  top: 0px;
}


/* end codepen */


.input {
  margin: 10vh 9px;
  

}

.register-container {
  
  background: rgb(245, 243, 243);
  width: 500px;
  height: 45vh;
  margin-top: 10vh;
  border-radius: 30px;
  text-align: center;
  line-height: 250px;
  color: white;
  margin: auto;
  opacity: 0.5;
  align-content: center;  
  
}


h1, p {
  color: rgb(8, 8, 8);
}

</style>