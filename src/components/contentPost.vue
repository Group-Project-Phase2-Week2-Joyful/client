<template>
  <article class="row posts">
    <!--ROW for the heading and date-->
    <div class="col-12">
      <div class="row">
        <div class="col-6">
          <h3 class="postTitle"></h3>
        </div>
        <div class="col-6 dateDiv">
          <span>&nbsp;</span>
        </div>
      </div>

      <!--ROW for the image-->
      <div class="row">
        <div class="col-12 imgDiv">
            <img @click="seeDetail"
              :src="urlImage"
              class="img-content img-fluid"
            />
        </div>
      </div>

      <!--ROW for the footer-->
      <div class="row">
        <div class="col-12">
          <footer style="text-align: center; margin-top: 10px;">
            <a class="twitter-share-button"
              :href="sharelink"
              data-size="large">
            <i class="fab fa-twitter" style="color: red; font-size: 30px; margin-top: 5px;"></i></a>
          </footer>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
    name: "contentPost",
    data() {
      return {
        sharelink: 'https://twitter.com/intent/tweet?text=' + window.location.href + `?q=${this.idImage}`
      }
    },
    props: ['urlImage', 'idImage'],
    methods: {
      insertParam(key, value) {
        key = encodeURI(key); value = encodeURI(value);

        var kvp = document.location.search.substr(1).split('&');

        var i=kvp.length; var x; while(i--) 
        {
            x = kvp[i].split('=');

            if (x[0]==key)
            {
                x[1] = value;
                kvp[i] = x.join('=');
                break;
            }
        }

        if(i<0) {kvp[kvp.length] = [key,value].join('=');}

        //this will reload the page, it's likely better to store this until finished
        document.location.search = kvp.join('&'); 
      },
      seeDetail() {
        console.log(this.idImage)
        window.history.pushState("object or string", "Title", `?q=${this.idImage}`);
      }
    }
};
</script>

<style scoped>
body {
    color: grey;
    font-size: 1em;
    font-family: "Metamorphous", sans-serif;
    font-weight: 500;
    background-color: rgb(0, 0, 0);
}

main{
    margin-top: 120px;
}

nav{
    background-color: rgb(82, 70, 70);
    box-shadow: 0px 0px 100px -10px #BEBEBE;
}

h1, h2, h3, h4, h5, h6, p{
    margin: 0px;
}

.postTitle{
    line-height: 60px;
}

#pageTitle{
    font-family: Arial, sans-serif;
    font-weight: 700;
}

span{
    line-height: 60px;
}

footer{
    height: 50px;
}


.dateDiv{
    text-align: right;
}

.container{
    padding: 0px;
}

.posts{
    margin-top: 40px;
    border-radius: 15px;
    box-shadow: 0px 0px 10px #DEDEDE;
}

#navtext{
    height: 90px;
}

.imgDiv{
    padding: 0px;
}

footer p{
    line-height: 50px;
}

.image{
    position:relative;
    overflow:hidden;
    padding-bottom:100%;
}

.image img{
      position: absolute;
      max-width: 100%;
      max-height: 100%;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
}

.img-content {
  width: 100%;
}
</style>