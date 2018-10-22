<template>
  <section class="content-header no-padding">
    <div class="row bg-blue">

	    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 vcenter">
        <Break type="visible-lg visible-md" :count="2"></Break>
          <h2 class="text-center">{{day}}, {{date}}</h2>
	  	  <Break type="visible-lg visible-md"></Break>
			    <h3 class="text-center" style="font-size: 85px">{{hours}} : {{minutes}} <span style="font-size: 25px">.{{seconds}}</span></h3>
			  <Break type="visible-lg visible-md"></Break>
          <h3 class="text-center">{{greeting}}</h3>
			  <Break type="visible-lg visible-md"></Break>
		  </div>

			<div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 bg-overlay">
			  <div class="row text-center">

				  <Break :count="3"></Break>
				  <h1 data-aos="zoom-in">Hello, I'm <b>Nanta</b></h1>
				  <h2 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">Welcome to my website.</h2>
				  <Break type="visible-lg visible-md" :count="2"></Break>
          
          <SocialMedia animate="flip-up" delay="700" 
            to="mailto:personal@nantaaditya.com?Subject=Nanta%20Web" icon="fa fa-3x fa-envelope-o" name="email"></SocialMedia>

          <SocialMedia animate="flip-up" delay="700" 
            to="https://www.facebook.com/PramudityaAnantaNur" icon="fa fa-3x fa-facebook" name="facebook"></SocialMedia>

          <SocialMedia animate="flip-up" delay="700" 
            to="https://twitter.com/PramudityaAN" icon="fa fa-3x fa-twitter" name="twitter"></SocialMedia>

          <SocialMedia animate="flip-up" delay="700" 
            to="http://linkedin.com/in/pramuditya-anantanur-013859136" icon="fa fa-3x fa-linkedin" name="linkedin"></SocialMedia>
					
          <SocialMedia animate="flip-up" delay="700" 
            to="http://github.com/nantaaditya" icon="fa fa-3x fa-github" name="github"></SocialMedia>

          <SocialMedia animate="flip-up" delay="700" 
            to="https://bitbucket.org/NantaAditya/" icon="fa fa-3x fa-bitbucket" name="bitbucket"></SocialMedia>

				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Break from '~/components/Break.vue';
import SocialMedia from '~/components/SocialMedia.vue';

import moment from 'moment';
import { getZeroPad } from '~/plugins/DateFilter.js';

export default {
  name: "Carousel",
  components:{
    Break,
    SocialMedia
  },
  data () {
    return {
      day: moment().format('dddd'),
      date: moment().format('D MMM YYYY'),
      hours: 0,
      minutes: 0,
      seconds: 0,
      greeting: ''
    }
  },
  timers:{
    updateDateTime: { time: 1000, autostart: true, repeat: true },
    sayGreeting:  { time: 1000, autostart: true, repeat: true }
  },
  methods: {
    updateDateTime () {
      let now = new Date()
      this.hours = now.getHours()
      this.minutes = getZeroPad(now.getMinutes())
      this.seconds = getZeroPad(now.getSeconds())            
    },
    sayGreeting(){
      if(this.hours > 0 && this.hours < 12){
        this.greeting = 'Good morning, nice to meet you';
      }else if(this.hours >= 12 && this.hours < 18){
        this.greeting = 'Good afternoon, have a nice day';
      }else if(this.hours >= 18 && this.hours < 22){
        this.greeting = 'Hello, have a nice evening';
      }else{
        this.greeting = 'Good night, have a nice dream';
      }
    }
  }
}
</script>

<style>
.bg-overlay {
  background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(/carousel.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  color: #fff;
  padding-top: 50px;
}
.fill {
  width: 100%;
  background-position: center;
  background-size: cover;
}
.vcenter {
  display: inline-block;
  vertical-align: middle;
  float: none;
}

/*==========  Mobile First Method  ==========*/
@media (min-width: 767px) {
  #no-padding-right {
    padding-right: 0px;
  }
  #no-padding-left {
    padding-left: 0px;
  }
}
/* Custom, iPhone Retina */
@media only screen and (min-width: 320px) {
  .bg-overlay{
    height: 400px;
  }
  .content-wrapper{
    padding-top: 50px !important;
  }
}
/* Extra Small Devices, Phones */
@media only screen and (min-width: 480px) {
  .bg-overlay{
    height: 400px;
  }
  .content-wrapper{
    padding-top: 50px !important;
  }
}
/* Small Devices, Tablets */
@media only screen and (min-width: 768px) {
  .bg-overlay{
    height: 400px;
  }
  .content-wrapper{
    padding-top: 50px !important;
  }
}
/* Medium Devices, Desktops */
@media only screen and (min-width: 992px) {
  .bg-overlay{
    height: 620px;
  }
}
/* Large Devices, Wide Screens */
@media only screen and (min-width: 1200px) {
  .bg-overlay{
    height: 620px;
  }
}
/*==========  Non-Mobile First Method  ==========*/
/* Large Devices, Wide Screens */
@media only screen and (max-width: 1200px) {
  .bg-overlay{
    height: 620px;
  }
}
/* Medium Devices, Desktops */
@media only screen and (max-width: 992px) {
  .bg-overlay{
    height: 620px;
  }
}
/* Small Devices, Tablets */
@media only screen and (max-width: 768px) {
  .bg-overlay{
    height: 400px;
  }
  .content-wrapper{
    padding-top: 50px !important;
  }
}
/* Extra Small Devices, Phones */
@media only screen and (max-width: 480px) {
  .bg-overlay{
    height: 400px;
  }
  .content-wrapper{
    padding-top: 50px !important;
  }
}
/* Custom, iPhone Retina */
@media only screen and (max-width: 320px) {
  .bg-overlay{
    height: 400px;
  }
  .content-wrapper{
    padding-top: 50px !important;
  }
}
</style>