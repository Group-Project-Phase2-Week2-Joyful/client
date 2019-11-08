<template>
<div  id="main-page" >
  <div class="register">
  <RegisterForm></RegisterForm>
  </div>
  <div class="login">
  <LoginForm></LoginForm>
  </div>
</div>
</template>

<script>
import RegisterForm from "../components/RegisterForm"
import LoginForm from "../components/LoginForm"
export default {
  name: 'MainPage',
  data : function() {
    return {
      isRegistered : false
    }
  },
  register() {

  },
  login() {

  },
  components : {
    RegisterForm,
    LoginForm
  }
}
</script>

<style>
#main-page {
  background: url(https://subwallpaper.com/Widescreen-Wallpapers/dark-horror-wallpapers-background-For-Widescreen-Wallpaper.png) 100% 100%;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  margin: 0;
  object-fit: cover;
  background-repeat: no-repeat;
}
#register {
  padding: 2px;
}
</style>