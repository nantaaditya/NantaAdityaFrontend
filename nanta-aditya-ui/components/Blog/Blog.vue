<template>
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12">

      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-lg-push-8 col-md-push-8">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="search" v-model="searchKeyword" autofocus="autofocus" value=""/>
            <span class="input-group-addon">
              <i class="fa fa-search"></i>
            </span>
          </div>  
        </div>
      </div>
      <br/>
      <div class="row">       
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" v-if="value.length<=0">
          <h3 class="text-center text-blue">Empty Post</h3>
        </div>

        <paginate
            name="value"
            tag="div"
            :list="blogs"
            :per="9"
            v-else            
        >
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12" 
            v-for="(b, index) in paginated('value')" v-bind:key='index'>
                      
            <div class="box" data-aos="fade-down" data-aos-delay="200">
                <div class="box-header box-blue">
                    <img class="img-center img-responsive full-img" v-lazy="b.bannerURL" 
                        data-aos="zoom-out" data-aos-delay="400" data-aos-duration="400" :alt="b.title"/>
                </div>
                <div class="box-body">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h3 class="text-blue">
                          <nuxt-link :to="'post/'+b.titleId">
                          {{b.title}}
                          </nuxt-link>
                        </h3>
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
                        inline-template
                        network-tag="button">
                        <div class="btn-group">
                            <network network="facebook" class="btn btn-facebook">                                
                              <i class="fa fa-facebook"></i>                                
                            </network>
                            <network network="googleplus"  class="btn btn-google">                                
                              <i class="fa fa-google-plus"></i>                                
                            </network>
                            <network network="twitter" class="btn btn-twitter">                                
                              <i class="fa fa-twitter"></i>                                
                            </network>
                            <network network="telegram" class="btn btn-telegram">                                
                              <i class="fa fa-telegram"></i>                                
                            </network>
                            <network network="whatsapp" class="btn btn-whatsapp">                                
                              <i class="fa fa-whatsapp"></i>                                
                            </network>                    
                        </div>
                    </social-sharing>
                    <nuxt-link :to="'post/'+b.titleId" class="btn btn-default pull-right">
                        <i class="fa fa-arrow-circle-o-right"></i>&nbsp;&nbsp;<b>Read More</b>
                    </nuxt-link>

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
        paginate: ['value'],
        searchKeyword: ''
      }
    },
    props:{
      value:{
        type: Array
      }
    },
    computed:{
      blogs(){
        return this.value.filter(blog => {
          return blog.title.toLowerCase().includes(this.searchKeyword.toLowerCase())
        })
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
</style>
