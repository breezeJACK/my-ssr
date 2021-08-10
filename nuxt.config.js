export default{
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-srr',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  server: {
    port: 8000,
    host: '127.0.0.1'
  },
  /*
  ** Environment variable configuration
  */
  env: {
    baseUrl: 'http://127.0.0.1:8000'
  },
    /*
  ** Router configuration
  */
  router: {
    extendRoutes (routes) {
      routes.push({
        path: '*',
        redirect: {
          name: 'login'
        }
      })
    },
    middleware:['auth']
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  '@/plugins/element-ui',
  { src: '~/plugins/persistedstate', ssr: false }

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'cookie-universal-nuxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
  serverMiddleware: [
    {
      path: '/',
      handler: '@/utils/serverMiddleware/pageCache.js',
    },
  ]
}
