<template>
    <div class="container" style="padding-top: 5px !important">
		<section class="content no-padding">
			<Box animation="fade-up" delay="200" icon="fa fa-2x fa-graduation-cap" title="Curriculum Vitae">
				<ul class="timeline">
                    <li data-aos="fade-right" data-aos-delay="400"><i class="fa fa-clock-o bg-gray"></i></li><br />
                    <li v-for='(e, index) in value' v-bind:key='index' data-aos="fade-right" data-aos-delay="400">
                        <i class="fa fa-clock-o bg-green"></i>
                        <div class="timeline-item">
                            <h3 class="timeline-header text-blue">{{e.name}}</h3>
                            <div class="timeline-body">
                                <p class="text-aqua">
                                    {{e.timeStart}} - {{e.timeEnd}} 
                                    <span style="color: #222"> | {{e.description}}</span>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="time-label" data-aos="fade-right" data-aos-delay="400"><span class="bg-yellow">Present</span></li>
                </ul>				
			</Box>			
		</section>		
	</div>
</template>
<script>
import Box from '~/components/Home/Box.vue';

export default {
    name: "Education",
    components:{
        Box
    },
    props:{
        value:{
            type: Array
        }
    }
}
</script>
