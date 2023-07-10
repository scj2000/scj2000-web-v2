// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    ssr: true,
    build: {
        transpile: [
            '@apollo/client',
            'ts-invariant/process',
            '@fortawesome/vue-fontawesome',
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-brands-svg-icons',
            '@fortawesome/free-regular-svg-icons',
            '@fortawesome/free-solid-svg-icons',
        ],
    },
    runtimeConfig: {
        apiToken: process.env.API_TOKEN,
        public: {
            apiEndpoint: process.env.API_ENDPOINT,
            gtmId: process.env.GTM_ID,
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.scj2000.net',
            cdnUrl: process.env.CDN_URL || 'https://cdn.scj2000.net',
            siteName: '快倉中文輸入法',
            siteDescription: '歡迎來到快倉中文輸入法網站！',
            ogImageUrl: 'https://cdn.scj2000.net/assets/9d3740ce-5568-4d35-b1f8-5a114c9ad76d.png?key=ogimage',
            language: 'zh-HK',
            gtm: {
                id: process.env.GTM_ID,
                queryParams: {},
                defer: false,
                compatibility: false,
                enabled: true,
                debug: false,
                loadScript: true,
                enableRouterSync: true,
                ignoredViews: [],
                trackOnNextTick: false,
                devtools: false,
            }
        }
    },
    app: {
        head: {
          charset: 'utf-8',
          link: [
            // Google Noto Serif TC font
            {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com',
                media: 'print',
                onload: 'this.media=\'all\'',
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossorigin: '',
                media: 'print',
                onload: 'this.media=\'all\'',
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+TC&display=swap',
                media: 'print',
                onload: 'this.media=\'all\'',
            }, 
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
        '@zadigetvoltaire/nuxt-gtm',
        [
            '@nuxt/image', {
                directus: {
                    baseURL: process.env.ASSETS_BASEURL || "https://cdn.scj2000.net/assets/",
                    modifiers: {},
                }
            }
        ],
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
                httpEndpoint: process.env.API_ENDPOINT || "https://cdn.scj2000.net/graphql",
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
