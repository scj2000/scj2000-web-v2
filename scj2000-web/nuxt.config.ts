// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    ssr: true,
    build: {
        transpile: [
            '@apollo/client',
            'ts-invariant/process',
        ],
    },
    runtimeConfig: {
        API_TOKEN: process.env.API_TOKEN,
        public: {
            API_ENDPOINT: process.env.API_ENDPOINT,
        }
    },
    app: {
        head: {
          charset: 'utf-8',
          link: [
            // {
            //     rel: 'preload',
            //     href: '/fonts/Free-HK-Kai_4700-v1.02.woff2',
            //     as: 'font',
            //     type: 'font/woff2',
            // },
            // {
            //     rel: 'preload',
            //     href: '/fonts/TW-Kai-98_1.woff2',
            //     as: 'font',
            //     type: 'font/woff2',
            // },     
          ],
        }
    },
    plugins: [
        { src: '~/plugins/apollo.ts' },
        { src: '~/plugins/font-awesome.ts' },
    ],
    modules: [
        '@nuxtjs/apollo',
        '@nuxtjs/tailwindcss',
        [
            'nuxt-viewport', {
                breakpoints: {
                  xs: 320,
                  sm: 640,
                  md: 768,
                  lg: 1024,
                  xl: 1280,
                  '2xl': 1536,
                },
                defaultBreakpoints: {
                  desktop: 'lg',
                  mobile: 'xs',
                  tablet: 'md',
                },
                fallbackBreakpoint: 'lg'
            },
        ],
    ],
    apollo: {
        authType: "Bearer",
        authHeader: "Authorization",
        tokenStorage: "cookie",
        clients: {
            default: {
                tokenName: "api-token",
                httpEndpoint: process.env.API_ENDPOINT || "http://scj2000-cms:1337/graphql",
            }
        }
    },
    css: [
        '~/assets/css/style.css',
        '@fortawesome/fontawesome-svg-core/styles.css',
    ],
    experimental: {
        payloadExtraction: true,
    },
})
