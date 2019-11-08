<template>
  <div class="upload-container">
    <!-- Styled -->
    <b-form-file
      v-model="file"
      :state="Boolean(file)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
    <b-button @click="upload">Upload</b-button>
  </div>
</template>

<script>
import axios from '../../helpers/axios'
  export default {
    data() {
      return {
        file: null
      }
    },
    methods: {
      upload() {
        let formData = new FormData()
        formData.append('file', this.file);
        axios.post('images/upload', formData)
          .then(({ data }) => {
            console.log(data)
            this.file = null
          })
          .catch(console.log)
      },
      
    }
  }
</script>

<style scoped>
.upload-container {
  margin-top: 200px;
}
</style>