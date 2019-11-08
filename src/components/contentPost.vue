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
            <img
              :src="urlImage"
              class="img-content img-fluid"
            />
        </div>
      </div>

      <!--ROW for the footer-->
      <div class="row">
        <div class="col-12">
          <footer>
            <p></p>
          </footer>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
    name: "contentPost",
    props: ['urlImage']
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