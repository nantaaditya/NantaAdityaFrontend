<template>
    <div class="content-wrapper">
      <div class="container">
          <section class="content-header">
              <Search></Search>
              <Blog></Blog>
          </section>
      </div>
    </div>
</template>

<script>
import Blog from '~/components/Blog/Blog.vue';
import Search from '~/components/Blog/Search.vue';

export default {
    layout: 'Blog',
    head () {
        return {
            title: "Nanta Aditya\'s website | Blog",
            meta: [
                { hid: 'description', name: 'description', content: 'Nanta Aditya\'s Blog | This is where you can read my post, especially about art, technology, and random things.' },
                { hid: 'keywords', name: 'keywords', content: 'Nanta Aditya, Nanta Aditya\'s Website, Nanta Aditya\'s Blog, Spring Boot, Code Igniter, Java, PHP, Angular, Vue, PostgreSQL, MySQL'},      
                { hid: 'og:url', property: 'og:url', content: 'http://www.nantaaditya.com/blog'},
                { hid: 'og:type', property: 'og:type', content: 'website'},
                { hid: 'og:title', property: 'og:title', content: 'Nanta Aditya\'s website | Blog'},
                { hid: 'og:description', property: 'og:description', content: 'Nanta Aditya\'s Blog | This is where you can read all random thing in my mind, especially about art, technology, and random things.'},
                { hid: 'og:image', property: 'og:image', content: 'localhost:3000/icon.png'},                                
            ],
            link: [
                { rel: 'stylesheet', href:'/css/main.css'},       
            ]
        }
    },
    components:{
        Blog,
        Search
    }
}
</script>
