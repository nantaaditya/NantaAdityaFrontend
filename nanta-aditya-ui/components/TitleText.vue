<template>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1 :class="attribute" :data-aos="animation" :data-aos-delay="delay">{{text}}</h1>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TitleText',
    props:{
        attribute:{
            type: String
        },
        text:{
            type: String,
            required: true
        },
        animation:{
            type:String
        },
        delay:{
            type:String
        }
    }
}
</script>
