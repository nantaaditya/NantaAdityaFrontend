<template>
    <div class="row">        
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" >            
            <div class="box box-widget widget-user">
			    <div class="widget-user-header bg-blue">
				    <h3 class="widget-user-username">Nanta Aditya</h3>
				    <h5 class="widget-user-desc">Wanderer warrior</h5>
				</div>
				<div class="widget-user-image">
					<img class="img-responsive img-circle"
						src="/blog-avatar.png"
						alt="User Avatar">
				</div>
				<div class="box-footer">
					<div class="row">
                        <SocialMedia animate="zoom-in" delay="400" name="email"
                            to="mailto:personal@nantaaditya.com?Subject=Nanta%20Web" icon="fa fa-3x fa-envelope-o"></SocialMedia>

                        <SocialMedia animate="zoom-in" delay="400" name="facebook"
                            to="https://www.facebook.com/PramudityaAnantaNur" icon="fa fa-3x fa-facebook"></SocialMedia>

                        <SocialMedia animate="zoom-in" delay="400" name="twitter"
                            to="https://twitter.com/PramudityaAN" icon="fa fa-3x fa-twitter"></SocialMedia>

                        <SocialMedia animate="zoom-in" delay="400" name="linkedin"
                            to="http://linkedin.com/in/pramuditya-anantanur-013859136" icon="fa fa-3x fa-linkedin"></SocialMedia>
                                    
                        <SocialMedia animate="zoom-in" delay="400" name="github"
                            to="http://github.com/nantaaditya" icon="fa fa-3x fa-github"></SocialMedia>

                        <SocialMedia animate="zoom-in" delay="400" name="bitbucket"
                            to="https://bitbucket.org/NantaAditya/" icon="fa fa-3x fa-bitbucket"></SocialMedia>
					</div>
					<div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<h3 class="text-blue text-center">Contact Me</h3>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12"></div>
						<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <toast-container :toastConfig="config"></toast-container>
					    	<form data-aos="zoom-in" data-aos-delay="700" @submit.prevent="sendMessage" method="post">
								<div class="form-group">
						   			<label class="label label-primary" for="input-name">Name</label> 
                                    <input type="text" class="form-control" id="input-name" placeholder="name" v-model="request.name" required />
								</div>
								<div class="form-group">
								    <label class="label label-primary" for="input-email">Email</label> 
                                    <input type="email" class="form-control" id="input-email" placeholder="email" v-model="request.email"/>
								</div>
								<div class="form-group">
									<label class="label label-primary" for="input-message">Message</label>
									<textarea class="form-control" id="input-message" rows="5" placeholder="message" v-model="request.message" required></textarea>
								</div>
							    <div class="form-group">
                                    <div class="g-recaptcha" :data-sitekey="publicKey" id="captcha"></div>
								</div>
                                <button class="btn btn-success pull-right" v-show="!isLoading">
									<i class="fa fa-send"></i> Send
								</button>
                                <p class="text-right" v-show="isLoading"><i class="fa fa-cog fa-spin"></i></p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>        
</template>
<script>
import {post} from '~/plugins/ApiHelper.js'
import SocialMedia from '~/components/SocialMedia.vue';

export default {
    head(){
        return{
            link:[
                { rel:'stylesheet', href:'https://unpkg.com/vue-on-toast/dist/vue-on-toast.min.css'}
            ],
            script:[
                { src:"https://www.google.com/recaptcha/api.js", async:true, defer:true }
            ]
        }
    },
    components:{
        SocialMedia
    },
    data(){
        return{
            request:{
                name: '',
                email: '',
                message: '',
                captchaResponse: ''
            },            
            isLoading: false,
            publicKey: process.env.isProd ? process.env.prodKey : process.env.devKey
        }
    },    
    computed: {
        config: function () {
            return { bodyOutputType: 'TrustedHtml' }
        }
    },
    methods:{
        sendMessage: function(event){
            this.request.captchaResponse = grecaptcha.getResponse();
            this.isLoading = true;
            post('/api/message', this.request)
                .then(response => {                    
                    this.showMessage(response);
                    this.request = {};
                    event.target.reset();                    
                    grecaptcha.reset();
                    this.isLoading = false;    
    		    }).catch(error => {
                    console.log(error);
                    this.isLoading = false;    
                });            
        },
        showMessage: function(response){            
            if(response != null && (response.errors == undefined || response.errors == null)){
                this.$vueOnToast.pop('success', 'success', 'your message has been sent');
            }else{
                let message = '';
                Object.keys(response.errors).forEach(function(key) {
                    message += key+": "+response.errors[key]+"<br/>";
                });
                this.$vueOnToast.pop('error', response.message, message);
            }     

        }
    }
}
</script>
