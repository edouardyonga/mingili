import colors from 'vuetify/es5/util/colors'

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - SurveyCup',
        title: 'target',
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

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        [
            '@nuxtjs/firebase',
            {
                config: {
                    apiKey: 'AIzaSyCIaoFJO5I28piVpJaq8oY4VlgGw5rS3b8',
                    authDomain: 'nuxt-blog-ac7db.firebaseapp.com',
                    projectId: 'nuxt-blog-ac7db',
                    storageBucket: 'nuxt-blog-ac7db.appspot.com',
                    messagingSenderId: '554682862121',
                    appId: '1:554682862121:web:99aa0141cf4fd151f96a38',

                },
                services: {
                    auth: true // Just as example. Can be any other service.
                }
            }
        ]
    ],

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }

            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
