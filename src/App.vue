<template>
<div id="parent">
  <MainPage v-if="!isLogin" @setIsLogin="setIsLogin"></MainPage>
</div>
</template>

<script>
import MainPage from "./views/MainPage"
export default {
  name : 'App',
  components : {
    MainPage
  },
  data() {
    return {
      isLogin : false
    };
  },
  methods : {
    setIsLogin(status) {
      this.isLogin = status
    }
  }
};
</script>

<style>
#parent {
   width: 100%;
  height: 100%;
}
body, html {
   width: 100%;
  height: 100%;
}
</style>

