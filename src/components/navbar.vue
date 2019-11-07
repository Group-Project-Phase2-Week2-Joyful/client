<template>
  <nav class="navbar navbar-default fixed-top">
    <div class="container" id="navtext">
      <h1 id="pageTitle">Jumpshare!</h1>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'navbar'
};
</script>

<style>
body {
    color: grey;
    font-size: 1em;
    font-family: "Quicksand", sans-serif;
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
</style>