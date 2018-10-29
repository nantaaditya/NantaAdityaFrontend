<template>
    <div class="container" style="padding-top: 5px !important">
		<section class="content no-padding">
			<Box animation="flip-up" delay="200" icon="fa fa-user-circle fa-2x" title="About Me">
				<h4 class="text-justify" style="padding: 20px" data-aos="fade-in" data-aos-easing="ease-in-sine" data-aos-delay="300">
					<Break type="visible-lg visible-md" :count="2"></Break>
                    <span v-html="about.description"></span>
                </h4>
				<Break type="visible-lg visible-md" :count="2"></Break>
			</Box>			
		</section>		
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Box from '@/components/Home/Box.vue';
import Break from '@/components/Break.vue';

export default {
	name:"Profile",
	components:{
		Box,
		Break
	},
	computed: mapState({
		about: 'about'
	})		
}
</script>
