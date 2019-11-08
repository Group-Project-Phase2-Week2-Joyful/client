<template>

   <!-- register -->
  <div v-if="isRegistered" class="register-container">
    <div class="wrapper">
      <div>
        <h1>Register For An Account</h1>
        <p>To sign-up for a free basic account please provide us with some basic information using
        the contact form below. Please use valid credentials.</p>
        
        <form class="form" method="post" action="yourpage.html">
          <input type="text" class="name" placeholder="Name">
            <p class="name-help">Please enter your first and last name.</p>
          <input type="email" class="email" placeholder="Email">
            <p class="email-help">Please enter your current email address.</p>
        
          <input type="submit" class="submit" value="Register">
        </form>
      </div>
    </div>
  </div>
  <!-- end register  -->

</template>

<script>
export default {
  data() {
    return {
      text: 'Name'
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
.form {
  width: 100%;
}
input[type="text"], input[type="email"] {
  width: 98%;
  padding: 15px 0px 15px 8px;
  border-radius: 5px;
  box-shadow: inset 4px 6px 10px -4px rgba(0, 0, 0, 0.3), 0 1px 1px -1px rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.2);
  outline: none;
  border: none;
  border: 1px solid black;
  margin-bottom: 10px;
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


.register-container {
  
  background: rgb(245, 243, 243);
  width: 30%;
  height: 70%;
  border-radius: 30px;
  text-align: center;
  line-height: 250px;
  color: white;
  margin: 0 auto;
  opacity: 0.6;
  align-content: center;  
  
}

.wrapper {
  justify-content: center;
  flex-direction: column;
  
}

h1, p {
  color: rgb(8, 8, 8);
}

</style>