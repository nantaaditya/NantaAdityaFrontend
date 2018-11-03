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

      { hid: 'fb:app_id', property: 'fb:app_id', content: '2186546758291018'},
      { hid: 'og:title', property: 'og:title', content: 'Nanta Aditya\'s Web'},
      { hid: 'og:url', property: 'og:url', content: 'https://www.nantaaditya.com'},
      { hid: 'og:type', property: 'og:type', content: 'website'},
      { hid: 'og:title', property: 'og:title', content: 'Nanta Aditya\'s website'},
      { hid: 'og:description', property: 'og:description', content: 'Nanta Aditya\'s website, contains everything about my thought, my idea, my article, and everything that i want to write.'},
      { hid: 'og:image', property: 'og:image', content: 'https://static.nantaaditya.com/img/icon512.png'},

      { hid: 'language', name: 'language', content: 'id'},
      { hid: 'description',name: 'description', content: 'Nanta Aditya\'s website, contains everything about my thought, my idea, my article, and everything that i want to write.'},
      { hid: 'keywords', name: 'keywords', content: 'Nanta Aditya, Nanta Aditya\'s Website, Nanta Aditya\'s Profile, Spring Boot Tutorial, Java Tutorial, PHP Tutorial, Angular Tutorial, Vue Tutorial'},      
      { hid: 'author', name: 'author', content: 'Nanta Aditya'},
      { hid: 'robots', name: 'robots', content: 'index, follow'},
      { hid: 'revisit-after', name: 'revisit-after', content: '1 days'},
      { hid: 'search engines', name: 'search engines', content: 'Aeiwi, Alexa, AllTheWeb, AltaVista, AOL Netfind, Anzwers, Canada, DirectHit, EuroSeek, Excite, Overture, Go, Google, HotBot. InfoMak, Kanoodle, Lycos, MasterSite, National Directory, Northern Light, SearchIt, SimpleSearch, WebsMostLinked, WebTop, What-U-Seek, AOL, Yahoo, WebCrawler, Infoseek, Excite, Magellan, LookSmart, CNET, Googlebot'},

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://static.nantaaditya.com/img/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/png', href: 'https://static.nantaaditya.com/img/icon512.png'},
      { rel: 'stylesheet', href:'/css/bootstrap.min.css', async: true, defer: true},
      { rel: 'stylesheet', href:'/css/animate.min.css', async: true, defer: true},
      { rel: 'stylesheet', href:'/css/font-awesome.min.css', async: true, defer: true},      
      { rel: 'stylesheet', href:'/css/admin-lte.min.css'},
      { rel: 'stylesheet', href:'/css/skin-blue-light.css'},
    ],
    script: [
      { src: '/js/jquery.min.js' },
      { src: '/js/bootstrap.min.js'},
      { src: '/js/jquery.slimscroll.min.js', async: true, defer: true},
      { src: '/js/fastclick.min.js', async: true, defer: true},
      { src: '/js/adminlte.min.js'},      
      { src: '/js/modernizr.min.js', async: true, defer: true},      
    ],
    bodyAttrs: {
      class: 'hold-transition skin-blue-light layout-top-nav fixed'
    }
  },
  manifest: {
    "name": "Nanta Aditya Web",
    "short_name": "Nanta",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#fff",
    "theme_color": "#47c4fd",
    "description": "Nanta Aditya\'s website, contains everything about my thought, my idea, my article, and everything that i want to write.",
    "gcm_sender_id": "482941778795",
    "gcm_sender_id_comment": "Do not change the GCM Sender ID",
    "icons": [{
      "src": "/icon48.png",
      "sizes": "48x48",
      "type": "image/png"
    }, {
      "src": "/icon72.png",
      "sizes": "72x72",
      "type": "image/png"
    }, {
      "src": "/icon96.png",
      "sizes": "96x96",
      "type": "image/png"
    }, {
      "src": "/icon144.png",
      "sizes": "144x144",
      "type": "image/png"
    }, {
      "src": "/icon168.png",
      "sizes": "168x168",
      "type": "image/png"
    }, {
      "src": "/icon512.png",
      "sizes": "512x512",
      "type": "image/png"
    }]
  },
  oneSignal: {
    init: {
      appId: '55fc1e18-aae5-492b-a4b1-fa8c33368d02',
      allowLocalhostAsSecureOrigin: true,
      autoRegister: false,      
      notifyButton: {
        enable: true,
        prenotify: true,
        colors: {
          'circle.background': '#03a9f4',
          'circle.foreground': 'white',
          'badge.background': 'rgb(84,110,123)',
          'badge.foreground': 'white',
          'badge.bordercolor': 'white',
          'pulse.color': 'white',
          'dialog.button.background.hovering': 'rgb(77, 101, 113)',
          'dialog.button.background.active': 'rgb(70, 92, 103)',
          'dialog.button.background': 'rgb(84,110,123)',
          'dialog.button.foreground': 'white'
        },
        text: {
          'tip.state.unsubscribed': 'Subscribe here for latest article',
          'tip.state.subscribed': "Thank you for subscribing!",
          'tip.state.blocked': "Sorry, you've blocked notifications",
          'message.prenotify': 'Subscribe here for latest article',
          'message.action.subscribed': "Thanks you for subscribing!",
          'message.action.resubscribed': "Thanks you for subscribing!",
          'message.action.unsubscribed': "Sorry, you've blocked notifications",
          'dialog.main.title': 'Nanta Aditya',
          'dialog.main.button.subscribe': 'ALLOW',
          'dialog.main.button.unsubscribe': 'NO THANKS',
          'dialog.blocked.title': 'Please, Unblock Notifications',
          'dialog.blocked.message': "Follow these instructions to allow notifications:"
        }
      },
      promptOptions: {        
        actionMessage: "I'd like to show you notifications for the latest article.",        
        acceptButtonText: "ALLOW",        
        cancelButtonText: "NO THANKS"
      },
      welcomeNotification: {
        "title": "Nanta Aditya",
        "message": "Thanks you for subscribing!",
        // "url": "" /* Leave commented for the notification to not open a window on Chrome and Firefox (on Safari, it opens to your webpage) */
      }
    }
  },
  env: {
    isProd: false,
    devApi: 'http://localhost:8080/nanta-aditya-api',
    prodApi: 'https://apps.nantaaditya.com/nanta-aditya-api',
    devKey: '6Len4UYUAAAAAGj6vm-Wgnrt5Q_78rVBMQu14JrL',
    prodKey: '6LeO4UYUAAAAALeGqo6BbKWPkMkAVDmVltXJgsXj'
  },
  workbox: {
    dev: true,
    runtimeCaching: [{      
      urlPattern: 'https://cdnjs.cloudflare.com/*',      
      handler: 'networkFirst',      
      method: 'GET'
    },{
      urlPattern: '/css/*.css',
      handler: 'cacheFirst',
      options: {
        cache:{
          name: 'css-cache',
          maxEntries: 10,
          maxAgeSeconds: 3600
        }
      }
    },{
      urlPattern: '/js/*.js',
      handler: 'cacheFirst',
      options: {
        cache:{
          name: 'js-cache',
          maxEntries: 10,
          maxAgeSeconds: 3600
        }
      }
    },{
      urlPattern: '/_nuxt/*.js',
      handler: 'cacheFirst',
      options: {
        cache:{
          name: 'nuxt-js-cache',
          maxEntries: 10,
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
    '@nuxtjs/onesignal',
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

