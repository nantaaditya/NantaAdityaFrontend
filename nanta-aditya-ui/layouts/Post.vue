<template>  
  <div class="wrapper">    
    <div id="fb-root"></div>
    <!--HEADER-->
    <Header></Header>
    <nuxt/>
    <!--FOOTER-->
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  },  
}
</script>
