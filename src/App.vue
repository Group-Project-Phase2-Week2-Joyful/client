<template>
<div id="parent">
  <MainPage v-if="!isLogin" @setIsLogin="setIsLogin"></MainPage>
   <div v-if="jumpScare">
      <scarepage></scarepage>
    </div>
    <homepage v-if="!jumpScare && isLogin"></homepage>
</div>
</template>

<script>
import MainPage from "./views/MainPage"
import homepage from "./views/homePage";
import scarepage from "./views/scarePage";

export default {
  name : 'App',
  components : {
    MainPage,
    homepage,
    scarepage
  },
  data() {
    return {
      isLogin : false,
      linkSeram: "",
      jumpScare: false
    };
  },
  methods : {
    setIsLogin(status) {
      this.isLogin = status
    },
    getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return "";
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
  },
  created() {
     this.linkSeram = this.getParameterByName("q");
    if (this.linkSeram) {
      this.isLogin = true;
      this.jumpScare = true;
    }
  }
  
    }

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

