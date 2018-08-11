<template>      
    <div class="content-wrapper">
      <div class="container fill">
        <!--CAROUSEL-->
        <Carousel></Carousel>
        <hr class="line" />
        <!--PROFILE-->
        <Profile></Profile>
        <!--DIVIDER-->
        <Divider></Divider>
        <!--CURRICULUM VITAE-->
        <CurriculumVitae></CurriculumVitae>
        <!--DIVIDER-->
        <Divider></Divider>
        <!--SKILL-->
        <Skill></Skill>
        <!--DIVIDER-->
        <Divider></Divider>
      </div>
    </div>  
</template>

<script>  
  import Carousel from '~/components/Home/Carousel.vue';
  import CurriculumVitae from '~/components/Home/CurriculumVitae.vue';
  import Divider from '~/components/Home/Divider.vue';  
  import Profile from '~/components/Home/Profile.vue';
  import Skill from '~/components/Home/Skill.vue';

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
      Profile,
      Skill
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
