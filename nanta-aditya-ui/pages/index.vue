<template>      
    <div class="content-wrapper">
      <div class="conteiner fill">
        <!--CAROUSEL-->
        <Carousel></Carousel>
        <hr class="line" />
        <!--PROFILE-->
        <Profile></Profile>
        <!--DIVIDER-->
        <Divider></Divider>
        <!--SKILL-->
        <CurriculumVitae></CurriculumVitae>
      </div>
    </div>  
</template>

<script>  
  import Carousel from '~/components/Home/Carousel.vue';
  import CurriculumVitae from '~/components/Home/CurriculumVitae.vue';
  import Divider from '~/components/Home/Divider.vue';  
  import Profile from '~/components/Home/Profile.vue';

  export default {    
    layout: 'Home',
    head:{
      link: [
        { rel: 'stylesheet', href:'/css/main.css'},       
      ]
    },
    components:{
      Carousel,
      CurriculumVitae,
      Divider,
      Profile
    }
  }    
</script>
<style>
hr.line {
  border-top: 4px double #3c8dbc;
  text-align: center;
}

hr.line:after {
  content: "§";
  display: inline-block;
  position: relative;
  top: -15px;
  padding: 0 10px;
  background-color: rgba(255, 255, 255, 0);
  color: #3c8dbc;
  font-size: 18px;
}
</style>
