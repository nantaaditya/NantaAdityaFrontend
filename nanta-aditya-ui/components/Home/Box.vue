<template>
    <div class="row" :data-aos="animation" :data-aos-delay="delay">
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<div class="box">
				<div class="box box-primary">
					<div class="box-body">
						<div class="row">
							<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
								<Break type="visible-lg visible-md"></Break>
								<h1 class="text-center text-blue" data-aos="zoom-in-up" data-aos-delay="200">
									<i :class="icon"></i>
								</h1>
								<h2 class="text-center text-blue">
									<b data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay="250"><u>{{title}}</u></b>
								</h2>
							</div>
							<div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
								<slot></slot>
                                <Break type="visible-lg visible-md" :count="2"></Break>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Break from '@/components/Break.vue';

export default {
    name: "Box",
    components:{
        Break
    },
    props:{
        animation:{
            type: String
        },
        delay:{
            type: String
        },
        icon:{
            type: String,
            required: true
        },
        title:{
            type: String,
            required: true
        }
    }
}
</script>
