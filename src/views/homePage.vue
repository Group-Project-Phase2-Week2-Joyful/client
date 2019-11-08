<template>
  <div>
  <navbar></navbar>
  <main class="container-fluid">
            <div class="row">
                <section class="col-12 col-sm-8 col-lg-6 col-xl-4 mx-auto">
                  <UploadButton></UploadButton>
                    
                
                    <!--this is the FIRST post-->
                    <article class="row posts">
                        
                        <!--ROW for the heading and date-->
                        <div class="col-12">
                            <div class="row">
                                <div class="col-6">
                                    <h3 class="postTitle">Joy of Life</h3>
                                </div>
                                <div class="col-6 dateDiv">
                                    <span>12/14/16</span>
                                </div>
                            </div>
                            
                            <!--ROW for the image-->
                            <div class="row">
                                <div class="col-12 imgDiv">
                                    <div class="container">
                                        <img src="https://cdn.lynda.com/course/542431/542431-636251707678601607-16x9.jpg" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                            
                            <!--ROW for the footer-->
                            <div class="row">
                                <div class="col-12">
                                    <footer>
                                        <p>lalala hola como estas vamo a calmarnos x y z</p>
                                    </footer>
                                </div>
                            </div>
                            
                        </div>
                    </article>
                
                
                
                    <!--this is the SECOND post-->
                    <article class="row posts">
                        
                        <!--ROW for the heading and date-->
                        <div class="col-12">
                            <div class="row">
                                <div class="col-6">
                                    <h3 class="postTitle">Joy of Life</h3>
                                </div>
                                <div class="col-6 dateDiv">
                                    <span>12/14/16</span>
                                </div>
                            </div>
                            
                            <!--ROW for the image-->
                            <div class="row">
                                <div class="col-12 imgDiv">
                                    <div class="container">
                                        <img src="https://ericpare.com/s/ericpare/sg/d4b4724-light-painting-kim-henry-eric-pare-arizona-reflection-tube-stories-2048-jpg-yc8n.jpg" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                            
                            <!--ROW for the footer-->
                            <div class="row">
                                <div class="col-12">
                                    <footer>
                                        <p>lalala hola como estas vamo a calmarnos x y z</p>
                                    </footer>
                                </div>
                            </div>
                            
                        </div>
                    </article>
                    
                    
                    
                    <!--this is the THIRD post-->
                    <article class="row posts">
                        
                        <!--ROW for the heading and date-->
                        <div class="col-12">
                            <div class="row">
                                <div class="col-6">
                                    <h3 class="postTitle">Joy of Life</h3>
                                </div>
                                <div class="col-6 dateDiv">
                                    <span>12/14/16</span>
                                </div>
                            </div>
                            
                            <!--ROW for the image-->
                            <div class="row">
                                <div class="col-12 imgDiv">
                                    <div class="container">
                                        <img src="https://cdn.thepennyhoarder.com/wp-content/uploads/2014/08/04100029/pexels-photo-139407.jpeg" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                            
                            <!--ROW for the footer-->
                            <div class="row">
                                <div class="col-12">
                                    <footer>
                                        <p>lalala hola como estas vamo a calmarnos x y z</p>
                                    </footer>
                                </div>
                            </div>
                            
                        </div>
                    </article>
                    
                    
                    
                    <!--this is the FOURTH post-->
                    <article class="row posts">
                        
                        <!--ROW for the heading and date-->
                        <div class="col-12">
                            <div class="row">
                                <div class="col-6">
                                    <h3 class="postTitle">Joy of Life</h3>
                                </div>
                                <div class="col-6 dateDiv">
                                    <span>12/14/16</span>
                                </div>
                            </div>
                            
                            <!--ROW for the image-->
                            <div class="row">
                                <div class="col-12 imgDiv">
                                    <div class="container">
                                        <img src="http://jvdc.me/assets/jvdcme-beautiful-photography-cityscape-bokeh.jpg" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                            
                            <!--ROW for the footer-->
                            <div class="row">
                                <div class="col-12">
                                    <footer>
                                        <p>lalala hola como estas vamo a calmarnos x y z</p>
                                    </footer>
                                </div>
                            </div>
                            
                        </div>
                    </article>
                    
                    
                    
                    <!--this is the FOURTH post-->
                    <article class="row posts">
                        
                        <!--ROW for the heading and date-->
                        <div class="col-12">
                            <div class="row">
                                <div class="col-6">
                                    <h3 class="postTitle">Joy of Life</h3>
                                </div>
                                <div class="col-6 dateDiv">
                                    <span>12/14/16</span>
                                </div>
                            </div>
                            
                            <!--ROW for the image-->
                            <div class="row">
                                <div class="col-12 imgDiv">
                                    <div class="container image">
                                        <img src="http://jvdc.me/assets/jvdcme-beautiful-photography-cityscape-bokeh.jpg" class="img img-fluid full-width">
                                    </div>
                                </div>
                            </div>
                            
                            <!--ROW for the footer-->
                            <div class="row">
                                <div class="col-12">
                                    <footer>
                                        <p>lalala hola como estas vamo a calmarnos x y z</p>
                                    </footer>
                                </div>
                            </div>
                            
                        </div>
                    </article>
                
            </div>
            
        </main>
  </div>
</template>

<script>
import navbar from "../components/navbar";
import UploadButton from "../components/UploadButton"
export default {
    name: "homePage",
    components:{
        navbar,
        UploadButton
    }
}
</script>

<style>
</style>