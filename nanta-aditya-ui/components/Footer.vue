<template>
    <footer class="main-footer">
		<div class="container">
			<div class="navbar navbar-default"
				style="background-color: transparent; border: 0px">
				<div class="row aligned-row">
					<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
						<h3 class="text-center text-blue">Nanta</h3>
						<h4 class="text-center text-blue">
							Copyright &#9400; Nanta 2017 <br />Created By Nanta
						</h4>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
						<h4 class="text-blue text-center">MENU</h4>
						<nav class="footer-menu">
							<ul class="no-style list-unstyled text-center">
								<li><nuxt-link to="/">Home</nuxt-link></li><br/>
						        <li><nuxt-link to="/blog">Blog</nuxt-link></li><br/>
						        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
							</ul>
						</nav>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
						<h4 class="text-blue text-center">SOCIAL MEDIA</h4>
						<div class="row">
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
			</div>
		</div>
	</footer>
</template>
<script>
import SocialMedia from '~/components/SocialMedia.vue';

export default {
    components:{
        SocialMedia
    }    
}
</script>
