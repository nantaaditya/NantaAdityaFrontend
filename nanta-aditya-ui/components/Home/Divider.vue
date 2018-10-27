<template>
    <div class="container fill">
        <section class="content no-padding divider-background">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: "Divider"
}
</script>
<style>
.divider-background {
  background: -moz-linear-gradient(top, rgba(33, 150, 243, 1) 0%, rgba(125, 185, 232, 0.79) 100%);
  background: -webkit-linear-gradient(top, rgba(33, 150, 243, 1) 0%, rgba(125, 185, 232, 0.79) 100%);
  background: linear-gradient(to bottom, rgba(33, 150, 243, 1) 0%, rgba(125, 185, 232, 0.79) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2196f3', endColorstr='#c97db9e8', GradientType=0);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
  background-color: rgba(0, 0, 0, 0.7);
  margin-top: -100px;
  margin-bottom: -100px;
  margin-left: -20px;
  margin-right: -20px;
}
</style>

