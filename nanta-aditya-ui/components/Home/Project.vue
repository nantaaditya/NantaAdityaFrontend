<template>
    <div class="container" style="padding-top: 5px !important">
        <section class="content no-paddig">
            <Box animation="fade-up" delay="200" icon="fa fa-2x fa-desktop" title="Project">
                <div class="row">
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" v-for='(p, index) in value' v-bind:key='index'>
						<div class="section-box-eleven" data-aos="zoom-out" data-aos-delay="400">
                            <figure>
							    <div class="text-center">
								    <a v-bind:href="p.url">{{p.name}}<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
								</div>
							</figure>
							<img v-lazy="p.imageURL" class="img-responsive img-center center-block" :alt="p.name"/>
						</div>
					</div>

				</div>
            </Box>
        </section>
    </div>    
</template>
<script>
import Box from '~/components/Home/Box.vue';

export default {    
    name: "project",
    components:{
        Box
    },
    props:{
        value: {
            type: Array
        }
    }
}
</script>
