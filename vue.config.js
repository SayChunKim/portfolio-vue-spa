/* eslint-disable no-param-reassign */
const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'SC Kim Portfolio',
    themeColor: '#0d1679',
    msTileColor: '#0d1679',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#0d1679',
    manifestOptions: {
      background_color: '#f2f2f2',
      purpose: 'maskable any',
    },
    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      // swSrc: 'src/registerServiceWorker.js',
      // ...other Workbox options...
    },
  },
  // pluginOptions: {
  //   prerenderSpa: {
  //     registry: undefined,
  //     renderRoutes: [
  //       '/',
  //       '/timeline',
  //       '/interests',
  //       '/skills',
  //       '/awards',
  //       '/contact',
  //       '/success',
  //     ],
  //     postProcess(renderedRoute) {
  //       renderedRoute.route = renderedRoute.originalRoute;
  //       renderedRoute.html = renderedRoute.html.split(/>[\s]+</gim).join('><');
  //       if (renderedRoute.route.endsWith('.html')) {
  //         renderedRoute.outputPath = path.join(__dirname, 'dist', renderedRoute.route);
  //       }
  //       return renderedRoute;
  //     },
  //     useRenderEvent: true,
  //     headless: true,
  //     onlyProduction: true,
  //   },
  // },
  configureWebpack: {
    plugins: [
      new ImageminPlugin({
        disable: process.env.NODE_ENV !== 'production', // Disable during development
        jaegtran: {
          quality: '85-90',
        },
      }),
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),

        // IMPORTANT HERE
        routes: ['/', '/en', '/zh-CN', '/ja', '/timeline', '/interests', '/skills', '/keynotes', '/awards',
          '/en/timeline', '/ja/timeline', '/zh-CN/timeline',
          '/en/interests', '/ja/interests', '/zh-CN/interests',
          '/en/skills', '/ja/skills', '/zh-CN/skills',
          '/en/awards', '/ja/awards', '/zh-CN/awards',
          '/en/keynotes', '/ja/keynotes', '/zh-CN/keynotes',
          '/contact',
          '/success',
          '/404',
        ],

        // IMPORTANT HERE
        postProcess(renderedRoute) {
          renderedRoute.route = renderedRoute.originalRoute;
          renderedRoute.html = renderedRoute.html.split(/>[\s]+</gim).join('><');
          if (renderedRoute.route.endsWith('.html')) {
            renderedRoute.outputPath = path.join(__dirname, 'dist', renderedRoute.route);
          }
          return renderedRoute;
        },
      }),
      new GenerateSW({
        skipWaiting: true,
        additionalManifestEntries: [
          { url: '/timeline', revision: null },
          { url: '/interests', revision: null },
          { url: '/skills', revision: null },
          { url: '/awards', revision: null },
          { url: '/keynotes', revision: null },
          { url: '/contact', revision: null },
          { url: '/404', revision: null },
          { url: '/en/timeline', revision: null },
          { url: '/en/interests', revision: null },
          { url: '/en/skills', revision: null },
          { url: '/en/awards', revision: null },
          { url: '/en/keynotes', revision: null },
          { url: '/ja/timeline', revision: null },
          { url: '/ja/interests', revision: null },
          { url: '/ja/skills', revision: null },
          { url: '/ja/awards', revision: null },
          { url: '/ja/keynotes', revision: null },
          { url: '/zh-CN/timeline', revision: null },
          { url: '/zh-CN/interests', revision: null },
          { url: '/zh-CN/skills', revision: null },
          { url: '/zh-CN/awards', revision: null },
          { url: '/zh-CN/keynotes', revision: null },
        ],
      }),
    ],
  },
};
