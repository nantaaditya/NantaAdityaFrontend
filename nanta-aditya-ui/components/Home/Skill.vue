<template>
    <div class="container" style="padding-top: 5px !important">
        <section class="content no-paddig">
            <Box animation="fade-up" delay="200" icon="fa fa-2x fa-pie-chart" title="Skill">
                <div class="row">
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" v-for='(s, index) in skills' v-bind:key='index'>
						<label class="label label-primary">{{s.name}}</label>
						<div class="progress">
						    <div class="progress-bar progress-bar-aqua"
								role="progressbar" :aria-valuenow="s.percentage"
								aria-valuemin="0" aria-valuemax="100"
								v-bind:style="{width: s.percentage+'%'}"
                                data-aos="slide-right" data-aos-delay="200" 
                                data-aos-easing="linear" data-aos-duration="1500">
								<span class="sr-only">{{s.percentage}} Complete</span>
							</div>
						</div>
					</div>

				</div>
            </Box>
        </section>
    </div>    
</template>
<script>
import { mapState } from 'vuex'
import Box from '@/components/Home/Box.vue';

export default {    
    name: "skill",
    components: {
        Box
    },
    computed: mapState({
		skills : 'skills'
	})
}
</script>
