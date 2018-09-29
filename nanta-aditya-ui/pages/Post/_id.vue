<template>    
    <div class="content-wrapper">
        <div class="container">                        
            <section class="content-header">
                <Title :title="post.title"></Title>
                <Content :author="post.author"
                    :created="post.createdDate"
                    :title="post.title"
                    :image="post.bannerURL"
                    :content="post.post"
                    :url="post.url"
                    :meta="post"
                ></Content>
            </section>
        </div>
    </div>    
</template>

<script>
import Title from '~/components/Post/Title.vue';
import Content from '~/components/Post/Content.vue';
import {getPost} from '~/plugins/ApiHelper.js';
import Vue from 'vue';

export default {
    layout: 'Post',
    components:{
        Title,
        Content
    },    
    head() {
        return{
            title: "Nanta Aditya\'s website | Blog - "+this.post.title,
            meta: [
                { hid: 'description', name: 'description', content: 'Nanta Aditya\'s Blog | '+this.post.description },
                { hid: 'keywords', name: 'keywords', content: 'Nanta Aditya, Nanta Aditya\'s Website, Nanta Aditya\'s Blog, '+this.post.keywords},      
                { hid: 'og:url', property: 'og:url', content: this.post.url},
                { hid: 'og:type', property: 'og:type', content: 'website'},
                { hid: 'og:title', property: 'og:title', content: 'Nanta Aditya\'s website | Blog - '+this.post.title },
                { hid: 'og:description', property: 'og:description', content: 'Nanta Aditya\'s Blog | '+this.post.description},
                { hid: 'og:image', property: 'og:image', content: 'localhost:3000/icon.png'},                                
            ],
            link: [
                { rel: 'stylesheet', href:'/css/custom-button-social.min.css'},
                { rel: 'stylesheet', href:'/css/main.css'},       
            ]
        }
    },
    validate ({ params}) {
        return params.id != undefined;               
    }, 
    async asyncData({params, error}){        
        let result = await getPost('/api/post/'+params.id)
        .then(response => {            
            return response.data.data;
        }).catch(e => {
            error({ statusCode: 404, message: 'Post not found' })
        });        
        return{
            post: result,            
        }
    },
    data: function () {
        return {isFBReady: false}
    },
    mounted: function () {
        this.isFBReady = Vue.FB != undefined
        window.addEventListener('fb-sdk-ready', this.onFBReady)        
    },
    beforeDestroy: function () {
        window.removeEventListener('fb-sdk-ready', this.onFBReady)
    },
    methods: {
        onFBReady: function () {
          this.isFBReady = true
        }
    }
        
}
</script>
