// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    ssr: false,
    devtools: {
        enabled: true
    },
    plugins: [
        //'~/plugins/TiptapVuetify'
        //{ src: ' ~/plugins/bootstrap.js', mode: 'client'},
        //ckeditor5( { theme: require.resolve( '~/node_modules/@ckeditor/ckeditor5-theme-lark' ) } )
    ],
    modules: [
        '@pinia/nuxt',
        //'@boostrap'
    ]
})

