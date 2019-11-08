<template>
  <div>
    <iframe src="../../assets/silence.mp3" allow="autoplay" id="audio" style="display:none">
      <audio id="player" autoplay loop>
        <source src="../../assets/scream.mp3" type="audio/ogg" />
      </audio>
    </iframe>
    <img :src="url" style="width: 100%; height: 100vh;" />
  </div>
</template>

<script>
import axios from "../../helpers/axios";

export default {
  name: "scarepage",
  data() {
    return {
      url: ""
    };
  },
  methods: {
    getImage(id) {
      axios
        .get(`images/${id}`)
        .then(({ data }) => {
          this.url = data.url;
        })
        .catch(console.log);
    }
  },
  created() {
    this.getImage(window.location.href.split("=")[1]);
  }
};
</script>

<style>
</style>