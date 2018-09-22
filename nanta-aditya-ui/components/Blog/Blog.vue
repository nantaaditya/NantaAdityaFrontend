<template>
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" v-if="value.length<=0">
          <h3 class="text-center text-blue">Empty Post</h3>
        </div>

        <paginate
            name="value"
            tag="div"
            :list="value"
            :per="9"            
        >
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12" 
            v-for="(b, index) in paginated('value')" v-bind:key='index'>
                      
            <div class="box" data-aos="fade-down" data-aos-delay="200">
                <div class="box-header box-blue">
                    <img class="img-center img-responsive full-img" v-lazy="b.bannerURL" 
                        data-aos="zoom-out" data-aos-delay="400" data-aos-duration="400"/>
                </div>
                <div class="box-body">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h3 class="text-blue">{{b.title}}</h3>
                    </div>                    
                </div>
                </div>
                <div class="box-footer" >

                    <social-sharing :url="b.url" 
                        :title="b.title" 
                        :description="b.description"
                        quote="Nanta Aditya Blog" 
                        :hashtags="b.keywords"
                        twitter-user="NantaAdiitya" 
                        inline-template>
                        <div class="btn-group">
                            <network network="facebook">
                                <button type="button" class="btn btn-facebook">
                                    <i class="fa fa-facebook"></i>
                                </button>
                            </network>
                            <network network="googleplus">
                                <button type="button" class="btn btn-google">
                                    <i class="fa fa-google-plus"></i>
                                </button>
                            </network>
                            <network network="twitter">
                                <button type="button" class="btn btn-twitter">
                                    <i class="fa fa-twitter"></i>
                                </button>
                            </network>
                            <network network="telegram">
                                <button type="button" class="btn btn-telegram">
                                    <i class="fa fa-telegram"></i>
                                </button>
                            </network>
                            <network network="whatsapp">
                                <button type="button" class="btn btn-whatsapp">
                                    <i class="fa fa-whatsapp"></i>
                                </button>
                            </network>                    
                        </div>
                    </social-sharing>
                    <a v-bind:href="b.url" class="btn btn-default pull-right">
                        <i class="fa fa-arrow-circle-o-right"></i>&nbsp;&nbsp;<b>Read More</b>
                    </a>

                </div>
            </div>          
        </div>
        </paginate>  
        
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <paginate-links for="value" 
                :async="true"
                :limit="5"
                :classes="{
                    'ul': 'pagination'
                }"
                class="pull-right"></paginate-links>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';  
  import VuePaginate from 'vue-paginate'

  Vue.use(VuePaginate);

  export default {
    name: "Blog",
    data() {
      return {        
        paginate: ['value']
      }
    },
    props:{
      value:{
        type: Array
      }
    }    
  }

</script>
<style>
  .full-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .box-header {
    padding: 0px !important;
  }

  .box-blue {
    background: #03a9f4;
  }

  .btn-telegram {
    color: #fff;
    background-color: #2AA5E0;
    border-color: rgba(0, 0, 0, 0.2)
  }

  .btn-telegram:focus,
  .btn-telegram.focus {
    color: #fff;
    background-color: #1b88bc;
    border-color: rgba(0, 0, 0, 0.2)
  }

  .btn-telegram:hover {
    color: #fff;
    background-color: #1b88bc;
    border-color: rgba(0, 0, 0, 0.2)
  }

  .btn-telegram:active,
  .btn-telegram.active,
  .open>.dropdown-toggle.btn-telegram {
    color: #fff;
    background-color: #2AA5E0;
    border-color: rgba(0, 0, 0, 0.2)
  }

  .btn-telegram:active:hover,
  .btn-telegram.active:hover,
  .open>.dropdown-toggle.btn-telegram:hover,
  .btn-telegram:active:focus,
  .btn-telegram.active:focus,
  .open>.dropdown-toggle.btn-telegram:focus,
  .btn-telegram:active.focus,
  .btn-telegram.active.focus,
  .open>.dropdown-toggle.btn-telegram.focus {
    color: #fff;
    background-color: #1b88bc;
    border-color: rgba(0, 0, 0, 0.2)
  }

  .btn-telegram:active,
  .btn-telegram.active,
  .open>.dropdown-toggle.btn-telegram {
    background-image: none
  }

  .btn-telegram.disabled,
  .btn-telegram[disabled],
  fieldset[disabled] .btn-telegram,
  .btn-telegram.disabled:hover,
  .btn-telegram[disabled]:hover,
  fieldset[disabled] .btn-telegram:hover,
  .btn-telegram.disabled:focus,
  .btn-telegram[disabled]:focus,
  fieldset[disabled] .btn-telegram:focus,
  .btn-telegram.disabled.focus,
  .btn-telegram[disabled].focus,
  fieldset[disabled] .btn-telegram.focus,
  .btn-telegram.disabled:active,
  .btn-telegram[disabled]:active,
  fieldset[disabled] .btn-telegram:active,
  .btn-telegram.disabled.active,
  .btn-telegram[disabled].active,
  fieldset[disabled] .btn-telegram.active {
    background-color: #1b88bc;
    border-color: rgba(0, 0, 0, 0.2)
  }

  .btn-telegram .badge {
    color: #3b5998;
    background-color: #fff
  }

  .btn-whatsapp {
    color: #fff;
    background-color: #25d366;
    border-color: rgba(0, 0, 0, 0.2)
  }

  .btn-whatsapp:focus,
  .btn-whatsapp.focus {
    color: #fff;
    background-color: #59ac23;
    border-color: rgba(0, 0, 0, 0.2)
  }

  .btn-whatsapp:hover {
    color: #fff;
    background-color: #59ac23;
    border-color: rgba(0, 0, 0, 0.2)
  }

  .btn-whatsapp:active,
  .btn-whatsapp.active,
  .open>.dropdown-toggle.btn-telegram {
    color: #fff;
    background-color: #25d366;
    border-color: rgba(0, 0, 0, 0.2)
  }

  .btn-whatsapp:active:hover,
  .btn-whatsapp.active:hover,
  .open>.dropdown-toggle.btn-whatsapp:hover,
  .btn-whatsapp:active:focus,
  .btn-whatsapp.active:focus,
  .open>.dropdown-toggle.btn-whatsapp:focus,
  .btn-whatsapp:active.focus,
  .btn-whatsapp.active.focus,
  .open>.dropdown-toggle.btn-whatsapp.focus {
    color: #fff;
    background-color: #59ac23;
    border-color: rgba(0, 0, 0, 0.2)
  }

  .btn-whatsapp:active,
  .btn-whatsapp.active,
  .open>.dropdown-toggle.btn-whatsapp {
    background-image: none
  }

  .btn-telegram.disabled,
  .btn-whatsapp[disabled],
  fieldset[disabled] .btn-whatsapp,
  .btn-whatsapp.disabled:hover,
  .btn-whatsapp[disabled]:hover,
  fieldset[disabled] .btn-whatsapp:hover,
  .btn-whatsapp.disabled:focus,
  .btn-whatsapp[disabled]:focus,
  fieldset[disabled] .btn-whatsapp:focus,
  .btn-whatsapp.disabled.focus,
  .btn-whatsapp[disabled].focus,
  fieldset[disabled] .btn-whatsapp.focus,
  .btn-whatsapp.disabled:active,
  .btn-whatsapp[disabled]:active,
  fieldset[disabled] .btn-whatsapp:active,
  .btn-whatsapp.disabled.active,
  .btn-whatsapp[disabled].active,
  fieldset[disabled] .btn-whatsapp.active {
    background-color: #59ac23;
    border-color: rgba(0, 0, 0, 0.2)
  }

  .btn-whatsapp .badge {
    color: #a3e974;
    background-color: #fff
  }

</style>
