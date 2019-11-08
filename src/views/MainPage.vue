<template>
<div id="main-page" >
  <RegisterForm v-if="!isRegistered" @setIsRegistered="setIsRegistered"></RegisterForm>
  <LoginForm v-if="isRegistered" @setIsLogin="setIsLogin"></LoginForm>
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
  methods : {
    setIsRegistered(status) {
      this.isRegistered = status
    },
    setIsLogin(status) {
       this.$emit('setIsLogin', true)
    }
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
  object-fit: cover;
  background-repeat: no-repeat;
}

</style>