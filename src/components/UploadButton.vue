<template>
  <div class="upload-container">
    <!-- Styled -->
    <div class="container">
    <div class="u-button-container">
    <b-field class="file">
        <b-upload v-model="file">
            <a class="button is-danger">
                <b-icon icon="upload"></b-icon>
                <span>Choose file</span>
            </a>
        </b-upload>
        <span class="file-name" v-if="file">
            {{ file.name }}
        </span>
        
    </b-field>
    </div>
    <b-button @click="upload" variant="outline-danger">Upload</b-button>
    </div>
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
            this.$emit('getImages')
          })
          .catch(console.log)
      },
      
    }
  }
</script>

<style scoped>
.upload-container {
  margin-top: 10px;
  text-align: center;
  
}
.u-button-container {
  display: flex;
  justify-content: center;
}
</style>