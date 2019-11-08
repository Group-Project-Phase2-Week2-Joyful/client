<template>
  <div>
    <div v-if="jumpScare">
      <scarepage></scarepage>
    </div>
    <homepage v-if="!jumpScare"></homepage>
  </div>
</template>

<script>
import homepage from "./views/homePage";
import scarepage from "./views/scarePage";
export default {
  components: {
    homepage,
    scarepage
  },
  data: function() {
    return {
      linkSeram: "",
      jumpScare: false
    };
  },
  props: [],
  methods: {
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
      this.jumpScare = true;
    }
  }
};
</script>

<style>
</style>