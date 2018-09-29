<template>
    <div>        
        <br class="type" v-for='(i, index) in count' v-bind:key='index'/>
    </div>    
</template>
<script>
export default {
    name: "Break",
    props:{
        type: {
            type: String
        },
        count: {
            type: Number,
            default: 1
        }
    }
}
</script>
