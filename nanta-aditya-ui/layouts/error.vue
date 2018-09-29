<template>
  <div class="container">
      <div class="content-wrapper">		
            <section class="content-header">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" 
                        v-if="error.statusCode === 404">
                        <img class="img-center img-responsive" src="/404.jpeg" 
                            alt="page not found" width="300px" height="300px"/>
                        <h4 class="text-center" style="color:#666">Page you're looking for is not found</h4>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" 
                        v-else>
                        <h3 class="text-center text-red">Something went wrong</h3>
                        <h4 class="text-center">Please contact the administrator</h4>
                        <br/>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-lg-push-3 col-md-push-3">
                                <SocialMedia to="mailto:personal@nantaaditya.com?Subject=Nanta%20Web" 
                                    icon="fa fa-3x fa-envelope-o"></SocialMedia>
                                <SocialMedia to="https://www.facebook.com/PramudityaAnantaNur" 
                                    icon="fa fa-3x fa-facebook"></SocialMedia>
                                <SocialMedia to="https://twitter.com/PramudityaAN" 
                                    icon="fa fa-3x fa-twitter"></SocialMedia>
                                <SocialMedia to="http://linkedin.com/in/pramuditya-anantanur-013859136" 
                                    icon="fa fa-3x fa-linkedin"></SocialMedia>                    
                                <SocialMedia to="http://github.com/nantaaditya" 
                                    icon="fa fa-3x fa-github"></SocialMedia>
                                <SocialMedia to="https://bitbucket.org/NantaAditya/" 
                                    icon="fa fa-3x fa-bitbucket"></SocialMedia>
                            </div>                            
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4 class="text-center">
                            <nuxt-link to="/">Back to Home</nuxt-link>
                        </h4>
                    </div>
                </div>                
            </section>		
      </div>    
  </div>
</template>

<script>
import SocialMedia from '~/components/SocialMedia.vue';

export default {
  props: ['error'],
  layout: 'Home',
  components:{
      SocialMedia
  }
}
</script>
<style>
    .img-center {margin:0 auto;}
</style>
