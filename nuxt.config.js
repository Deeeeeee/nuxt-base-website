
module.exports = {
  mode: 'universal',
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      // { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'viewport', name: 'viewport', content: 'user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'render', name: 'render', content: 'webkit' },
      { hid: 'http-equiv', 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { hid: 'keywords', name: 'keywords', content: '关键字 关键字 关键字' },
      { hid: 'description', name: 'description', content: '网站描述' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  router: {
    middleware: 'auth'
  },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/reset.css',
    'element-ui/lib/theme-chalk/index.css',
    'swiper/dist/css/swiper.css',
    'vant/lib/index.css',
    '@/assets/sass/index.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/plugins/common.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-awesome-swiper.js',
      ssr: false
    },
    {
      src: '@/plugins/element-ui.js',
      ssr: true
    },
    {
      src: '@/plugins/vant.js',
      ssr: true
    },
    {
      src: '@/plugins/filters.js',
      ssr: false
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    // css 全部打包到外部链接
    // extractCSS: { allChunks: true },
    postcss: {
      // 添加插件名称作为键，参数作为值
      plugins: {
        // 通过传递 false 来禁用插件
        // 'postcss-url': false,
        // 'postcss-nested': {},
        // 'postcss-responsive-type': {},
        // 'postcss-hexrgba': {}
        'postcss-plugin-px2rem': {
          rootValue: 100,
          exclude: /(node_module)/,
          selectorBlackList: ['.__nuxt-error-page']
        }
      },
      preset: {
        // 更改postcss-preset-env 设置
        // autoprefixer: {
        //   grid: true
        // }
      }
    },
    vendor: ['axios'],

    extend (config, ctx) {
    }
  }
}
