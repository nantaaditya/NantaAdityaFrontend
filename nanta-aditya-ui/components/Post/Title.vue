<template>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <ol class="breadcrumb" style="background: #fff">
                <li><a href="/blog">Blog</a></li>
                <li class="active">{{title}}</li>
            </ol>
        </div>                
    </div>
</template>

<script>
export default {
    name: "Title",
    props: {
        title:{
            type: String
        }
    }
}
</script>
