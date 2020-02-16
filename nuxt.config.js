const pkg = require('./package')

module.exports = {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans:400,600&subset=cyrillic'
      }
    ]
  },
  loading: { color: '#fff' },
  css: [
    {
      src: '@/assets/styles/main.pcss',
      lang: 'postcss'
    }
  ],
  plugins: [
    { src: '@/plugins/vueMaskInput.js' },
    { src: '@/plugins/countdown.js' }
  ],
  modules: [],
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-nested': {}
      }
    },
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      config.module.rules
        .filter(rule => rule.test && /svg/.test(rule.test.toString()))
        .forEach(rule => {
          rule.test = /\.(png|jpe?g|gif)$/
        })

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader'
      })
    }
  }
}
