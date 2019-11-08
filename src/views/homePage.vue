<template>
  <div>
    <navbar></navbar>
    <UploadButton @getImages="getImages"></UploadButton>
    <main class="container-fluid">
      
      <div class="row">
        <section class="col-12 col-sm-8 col-lg-6 col-xl-4 mx-auto">
          <contentPost v-for="(image, i) in images" :key="i" :url-image="image.url"></contentPost>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import navbar from "../components/navbar";
import contentPost from "../components/contentPost";
import UploadButton from '../components/UploadButton'
import axios from '../../helpers/axios'

export default {
    name: "homepage",
    components: {
      navbar,
      contentPost,
      UploadButton
    },
    data() {
      return {
        images: []
      }
    },
    methods: {
      getImages() {
        axios.get('/images')
          .then(({ data }) => {
            console.log(data)
            this.images = data
            console.log(this.images)
          })
          .catch(console.log)
      }
    },
    created () {
      console.log('a')
      this.getImages()
    }
}
</script>

<style>
</style>