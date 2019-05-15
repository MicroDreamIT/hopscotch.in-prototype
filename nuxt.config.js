import pkg from './package'
import webpack from 'webpack'
export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css',
      'bootstrap-css-only/css/bootstrap.min.css',
      'mdbvue/build/css/mdb.css',

  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      '~plugins/mdbv.js',
      '~plugins/accordions.js',
      '~plugins/others.js',
      '~plugins/rootMethods.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [

  ],

  /*
  ** Build configuration
  */
  build: {
      plugins: [
          new webpack.ProvidePlugin({
              '_': 'lodash'
          })
      ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {},
      transpile: [
          'mdbvue'
      ]
  }
}
