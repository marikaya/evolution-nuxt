const path = require('path');
module.exports = {
    head: {
        title: 'AnizmTV DEV',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'},
            {name: 'theme-color', content: '#191919'}
        ],
        link: [],
        script: [
            {src: 'https://use.fontawesome.com/1a9887d093.js'}
        ]
    },
    srcDir: __dirname,
    buildDir: '.nuxt',
    css: [
        '@/assets/scss/app.scss'
    ],
    plugins: [
    ],
    modules: [
        '@nuxtjs/axios',
        ['@nuxtjs/bootstrap-vue', { css: false }] // don't include a default build, use ours
    ],
    axios: {
        credentials: true,
    },
    router: {
        //middleware: ['ssr-cookie'],
        extendRoutes(routes, resolve) {
            // routes.push({
            //     name: 'anime-episodes',
            //     path: '/anime/:anime/bolum-:episode-izle',
            //     component: resolve(__dirname, 'pages/anime/episode/index.vue')
            // });
        }
    },
    build: {
        filenames: {
            css: 'anizmcore.[contenthash].css',
            manifest: 'manifest.[hash].js',
            vendor: 'anizmcore.[chunkhash].js',
            app: 'anizmapp.[chunkhash].js',
            chunk: '[name].[chunkhash].js'
        },
        extractCSS: true,
        vendor: ['axios', 'moment'],
        postcss: {
            plugins: {
                'postcss-cssnext': {
                    zindex: false
                }
            }
        },
        extend(config, {isDev, isClient}) {
            /**
             * Initialise SVG Sprites
             */

            const rule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg)$/');
            config.module.rules.splice(config.module.rules.indexOf(rule), 1);

            // add it again, but now without 'assets\/svg'
            config.module.rules.push({
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                exclude: path.resolve(__dirname, 'assets/svg'),
                query: {
                    limit: 1000, // 1KO
                    name: 'img/[name].[hash:7].[ext]',
                },
            });

            config.module.rules.push({
                test: /\.svg$/,
                include: [
                    path.resolve(__dirname, 'assets/svg'),
                ],
                loader: 'svg-sprite-loader?' + JSON.stringify({
                    name: '[name]',
                    prefixize: false
                })
            });
            config.output.jsonpFunction = 'anizmJsonp';
        },
    },
    render: {
        bundleRenderer: {
            shouldPreload: (file, type) => {
                return ['script', 'style', 'font'].includes(type);
            }
        },
        http2: {
            push: true
        },
        gzip: {
            treshold: 1
        }
    }
};