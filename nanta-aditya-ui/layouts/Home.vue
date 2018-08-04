<template>
  <div class="wrapper">    
    <!--HEADER-->
    <Header></Header>
    <nuxt/>
    <!--FOOTER-->
  </div>
</template>
<script>
import Header from '~/components/Home/Header.vue'

export default {
  components: {
    Header,    
  },  
}
</script>
