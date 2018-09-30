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
          <div class="desc">Happy reading.</div>
        </div>
        <div class="bottom">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <blockquote style="color:#666">
                The more that you read, the more things you will know. <br/>
                The more that you learn, the more places you'll go.
                <footer class="blockquote-footer">Dr. Seuss in <cite title="Source Title">I Can Read With My Eyes Shut!</cite></footer>
              </blockquote>
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
