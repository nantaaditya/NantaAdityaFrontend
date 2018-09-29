<template>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">            
            <div class="box box-widget">
                <div class="box-header with-border">
                    <div class="user-block">
                        <img class="img-circle" src="/blog-avatar.png" alt="User Image"/>
                        <span class="username"><a href="#">{{author}}</a></span>
                        <span class="description">{{formatDate(created)}}</span>
                    </div>
              
                    <div class="box-tools">
                        <div class="btn-group" style="padding-top:10px">
                            <button type="button" class="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-share"></i> Share
                            </button>
                            <div class="dropdown-menu" style="padding-left:6px; min-width:fit-content; padding-right:6px">
                                <social-sharing :url="meta.url" 
                                    :title="title" 
                                    :description="meta.description"
                                    quote="Nanta Aditya Blog" 
                                    :hashtags="meta.keywords"
                                    twitter-user="NantaAdiitya" 
                                    inline-template
                                    network-tag="button">
                                    <div class="btn-group-vertical">
                                        <network network="facebook" class="btn btn-sm btn-facebook">                                            
                                            <i class="fa fa-facebook"></i>                                            
                                        </network>
                                        <network network="googleplus" class="btn btn-sm btn-google">                                            
                                            <i class="fa fa-google-plus"></i>                                            
                                        </network>
                                        <network network="twitter" class="btn btn-sm btn-twitter">                                            
                                            <i class="fa fa-twitter"></i>                                            
                                        </network>
                                        <network network="telegram" class="btn btn-sm btn-telegram">                                            
                                            <i class="fa fa-telegram"></i>                                            
                                        </network>
                                        <network network="whatsapp" class="btn btn-sm btn-whatsapp">                                            
                                            <i class="fa fa-whatsapp"></i>                                            
                                        </network>                    
                                    </div>
                                </social-sharing>
                            </div>
                      </div>                        
                    </div>              
                </div>
            
                <div class="box-body">              
                    <h2 class="text-blue" style="padding-left:10px; padding-right:10px">
                        {{title}}
                    </h2>
                    <br/>
                    <img :src="image" alt="header image" 
                        class="img-responsive img-rounded center-block" 
                        style="height: 300px;" />
                    <br/>
                    <div v-html="content"
                        style="padding-left:10px; padding-right:10px">                         
                    </div>
                    <br/>
                    <p class="text-right"></p>                        
                </div>

                <div class="box-footer box-comments">
                    <no-ssr>
                        <div>
                            <div id="fb-root"></div>
                            <div class="fb-comments" 
                                :data-href="url"
                                data-numposts="5"
                                data-width="100%"></div>                        
                            <script>                            
                                FB.XFBML.parse();
                            </script>
                        </div>
                    </no-ssr>
                </div>    
                
            </div>

        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: "Content",    
    props:{
        author:{
            type: String
        },
        created:{
            type: Number
        },
        title:{
            type: String
        },
        meta:{
            type: Object  
        },
        image:{
            type: String
        },
        url:{
            type: String
        },
        content:{
            type: String
        }
    },
    methods:{
        formatDate(date){
            return moment(new Date(date)).format('D MMMM YYYY');
        }
    }
}
</script>
