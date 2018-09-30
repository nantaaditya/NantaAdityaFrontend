module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nanta Aditya\'s Website',
    htmlAttrs: {
      lang: 'id',
    },
    meta: [
      { charset: 'utf-8' },      
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Nanta Aditya&apos;s Website' },
      { name:"theme-color", content:"#47c4fd"},

      { hid: 'og:url', property: 'og:url', content: 'http://www.nantaaditya.com'},
      { hid: 'og:type', property: 'og:type', content: 'website'},
      { hid: 'og:title', property: 'og:title', content: 'Nanta Aditya\'s website'},
      { hid: 'og:description', property: 'og:description', content: 'Nanta Aditya\'s website, contains everything about my thought, my idea, my article, and everything that i want to write.'},
      { hid: 'og:image', property: 'og:image', content: 'localhost:3000/icon.png'},

      { hid: 'language', name: 'language', content: 'id'},
      { hid: 'description',name: 'description', content: 'Nanta Aditya\'s website, contains everything about my thought, my idea, my article, and everything that i want to write.'},
      { hid: 'keywords', name: 'keywords', content: 'Nanta Aditya, Nanta Aditya\'s Website, Nanta Aditya\'s Profile, Spring Boot Tutorial, Java Tutorial, PHP Tutorial, Angular Tutorial, Vue Tutorial'},      
      { hid: 'author', name: 'author', content: 'Nanta Aditya'},
      { hid: 'robots', name: 'robots', content: 'index, follow'},
      { hid: 'revisit-after', name: 'revisit-after', content: '1 days'},
      { hid: 'search engines', name: 'search engines', content: 'Aeiwi, Alexa, AllTheWeb, AltaVista, AOL Netfind, Anzwers, Canada, DirectHit, EuroSeek, Excite, Overture, Go, Google, HotBot. InfoMak, Kanoodle, Lycos, MasterSite, National Directory, Northern Light, SearchIt, SimpleSearch, WebsMostLinked, WebTop, What-U-Seek, AOL, Yahoo, WebCrawler, Infoseek, Excite, Magellan, LookSmart, CNET, Googlebot'},

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/png', href: '/icon.png'},
      { rel: 'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css'},
      { rel: 'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'},
      { rel: 'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'},      

      { rel: 'stylesheet', href:'/css/admin-lte.min.css'},
      { rel: 'stylesheet', href:'/css/skin-blue-light.css'},
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js'},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jQuery-slimScroll/1.3.8/jquery.slimscroll.min.js', async: true, defer: true},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.6/fastclick.min.js', async: true, defer: true},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.4.2/js/adminlte.min.js'},      
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.2/modernizr.min.js', async: true, defer: true}      
    ],
    bodyAttrs: {
      class: 'hold-transition skin-blue-light layout-top-nav fixed'
    }
  },
  manifest: {
    "name": "Nanta Aditya Web",
    "short_name": "NaN",
    "start_url": ".",
    "display": "standalone",
    "background_color": "#fff",
    "theme_color": "#47c4fd",
    "description": "Nanta Aditya\'s website, contains everything about my thought, my idea, my article, and everything that i want to write.",
    "icons": [{
      "src": "/icon.png",
      "sizes": "48x48",
      "type": "image/png"
    }, {
      "src": "/icon.png",
      "sizes": "72x72",
      "type": "image/png"
    }, {
      "src": "/icon.png",
      "sizes": "96x96",
      "type": "image/png"
    }, {
      "src": "/icon.png",
      "sizes": "144x144",
      "type": "image/png"
    }, {
      "src": "/icon.png",
      "sizes": "168x168",
      "type": "image/png"
    }, {
      "src": "/icon.png",
      "sizes": "512x512",
      "type": "image/png"
    }]
  },
  workbox: {
    dev: true,
    runtimeCaching: [{      
      urlPattern: 'https://cdnjs.cloudflare.com/*',      
      handler: 'cacheFirst',      
      method: 'GET'
    },{
      urlPattern: '/css/*.css',
      handler: 'cacheFirst',
      options: {
        cache:{
          name: 'css-cache',
          maxEnteries: 10,
          maxAgeSeconds: 3600
        }
      }
    },{
      urlPattern: '/js/*.js',
      handler: 'cacheFirst',
      options: {
        cache:{
          name: 'js-cache',
          maxEnteries: 10,
          maxAgeSeconds: 3600
        }
      }
    },{
      urlPattern: '/_nuxt/*.js',
      handler: 'cacheFirst',
      options: {
        cache:{
          name: 'nuxt-js-cache',
          maxEnteries: 10,
          maxAgeSeconds: 3600
        }
      }
    },
  ]},
  /*
  ** Customize the progress bar color
  */
  loading: '~/components/Loading.vue',
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['axios'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },  
  modules: [
    /**
     * module
     */
    '@nuxtjs/moment',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',    
    ['@nuxtjs/google-analytics', {id: 'UA-114339618-1'}]
  ],
  plugins: [
    /**
     * plugins
     */
    { src: '~plugins/GoogleAnalytics.js', ssr: false },
    { src: '~plugins/AosHelper.js', ssr: false },
    { src: '~plugins/VueTimer.js', ssr: false },
    { src: '~/plugins/VueNotification.js' },
    { src: '~/plugins/ImageLazyLoad.js' },
    { src: '~/plugins/SocialSharing.js'},
    { src: '~/plugins/FacebookSdk.js', ssr: false}    
  ],
  router: {
    base: '/'
  },
  mode : "universal",
  minify: {
    collapseBooleanAttributes: true,
    collapseWhitespace: false,
    decodeEntities: true,
    minifyCSS: true,
    minifyJS: true,
    processConditionalComments: true,
    removeAttributeQuotes: false,
    removeComments: false,
    removeEmptyAttributes: true,
    removeOptionalTags: false,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: false,
    removeStyleLinkTypeAttributes: false,
    removeTagWhitespace: false,
    sortAttributes: true,
    sortClassName: false,
    trimCustomFragments: true,
    useShortDoctype: true
  }  
}

