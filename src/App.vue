<template>
<div id="parent">
  <MainPage></MainPage>
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
      
    };
  },
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

