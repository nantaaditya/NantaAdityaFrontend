<template>
    <div class="content-wrapper">
		<div class="container">
            <section class="content-header">
                <TitleText 
                    attribute="text-blue text-center" text="Nanta Aditya's Contact"
                    animation="fade-down" delay="200"
                ></TitleText>
                <Message></Message>
            </section>
		</div>
    </div>
</template>

<script>
import TitleText from '~/components/TitleText.vue';
import Message from '~/components/Contact/Message.vue';

export default {
    layout: 'Contact',
    head () {
        return {
            title: "Nanta Aditya\'s website | Contact",
            meta: [
                { hid: 'description', name: 'description', content: 'Nanta Aditya\'s Contact | This is where you can reach me, contact me if you have something to talk to me.' },
                { hid: 'keywords', name: 'keywords', content: 'Nanta Aditya, Nanta Aditya\'s Website, Nanta Aditya\'s Profile, Nanta Aditya\'s Contact'},      
                { hid: 'og:url', property: 'og:url', content: 'http://www.nantaaditya.com/contact'},
                { hid: 'og:type', property: 'og:type', content: 'website'},
                { hid: 'og:title', property: 'og:title', content: 'Nanta Aditya\'s website | Contact'},
                { hid: 'og:description', property: 'og:description', content: 'Nanta Aditya\'s Contact | This is where you can reach me, contact me if you have something to talk to me.'},
                { hid: 'og:image', property: 'og:image', content: 'localhost:3000/icon.png'},                                
            ],
            link: [
                { rel: 'stylesheet', href:'/css/main.css'},       
            ]
        }
    },
    components:{
        TitleText,
        Message
    }
}
</script>
