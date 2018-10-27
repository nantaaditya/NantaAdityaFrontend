<template>
    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2" :data-aos="animate" :data-aos-delay="delay">
	    <p class="text-center">
		    <a :href="to" target="_top" :aria-label="name">
                <i :class="icon"></i>
            </a>
        </p>
    </div>
</template>
<script>
export default {
    name: "SocialMedia",
    props:{
        animate:{
            type: String
        },
        delay:{
            type: String
        },
        to:{
            type: String
        },
        icon:{
            type: String
        },
        name:{
            type: String
        }
    }
}
</script>
