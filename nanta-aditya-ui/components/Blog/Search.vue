<template>
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="card hovercard">
        <div class="cardheader"></div>
        <div class="avatar">
          <img alt="Avatar" src="/blog-avatar.png">
        </div>
        <div class="info">
          <div class="title">
            <a target="_blank" href="/">Nanta Aditya</a>
          </div>
          <div class="desc">Enjoy the post.</div>
        </div>
        <div class="bottom">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="search" v-model="searchKeyword" />
                <span class="input-group-addon">
                  <i class="fa fa-search"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
      name: "Search",
      data(){
          return{
            searchKeyword:''
          }
      }
  };

</script>
