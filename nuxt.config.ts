// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    devtools: {
        enabled: true
    },
    plugins: [
        //{ src: ' ~/plugins/bootstrap.js', mode: 'client'}
    ],
    modules: [
        '@pinia/nuxt',
        //'@boostrap'
    ]
})
