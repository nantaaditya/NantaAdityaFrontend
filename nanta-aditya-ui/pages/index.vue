<template>      
    <div class="content-wrapper">
      <div class="container fill">
        <!--CAROUSEL-->
        <Carousel></Carousel>
        <hr class="line" />
        <!--PROFILE-->
        <Profile :value="about"></Profile>
        <!--DIVIDER-->
        <Divider></Divider>
        <!--CURRICULUM VITAE-->
        <CurriculumVitae :value="curriculum"></CurriculumVitae>
        <!--DIVIDER-->
        <Divider></Divider>
        <!--SKILL-->
        <Skill :value="skills"></Skill>
        <!--DIVIDER-->
        <Divider></Divider>
        <!--PROJECT-->
        <Project :value="projects"></Project>
      </div>
    </div>  
</template>

<script>  
  import Carousel from '~/components/Home/Carousel.vue';
  import CurriculumVitae from '~/components/Home/CurriculumVitae.vue';
  import Divider from '~/components/Home/Divider.vue';  
  import Profile from '~/components/Home/Profile.vue';
  import Skill from '~/components/Home/Skill.vue';
  import Project from '~/components/Home/Project.vue';
  import axios from 'axios';
  import {get} from '~/plugins/ApiHelper.js';

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
      Skill,
      Project
    },
    async asyncData(){
      let aboutData = await get('/api/about-me');    
      let curriculumVitaeData = await get('/api/curriculum-vitae');
      let skillsData = await get('/api/skill');
      let projectsData = await get('/api/project');
      return {
        about: aboutData.data,
        curriculum: curriculumVitaeData.data,
        skills: skillsData.data,
        projects: projectsData.data
      }
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
