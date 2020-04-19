module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'SC Kim Portfolio',
    themeColor: '#515796',
    msTileColor: '#515796',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#515796',
    manifestOptions: {
      background_color: '#f2f2f2',
      purpose: 'maskable any',
    },
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/registerServiceWorker.js',
      // ...other Workbox options...
    },
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/timeline',
        '/interests',
        '/skills',
        '/awards',
        '/contact',
        '/success',
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
    },
  },
};
