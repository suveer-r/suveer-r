// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = {
  productionSourceMap: false,
  outputDir: "dist",
  assetsDir: "static",

  //   configureWebpack: {
  //     plugins: [new BundleAnalyzerPlugin()],
  //   },
  pwa: {
    name: "Suveer Raina",
    themeColor: "#00bfa9",
    msTileColor: "#00bfa9",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "white",

    // configure the workbox plugin
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },

    iconPaths: {
      favicon: "img/icons/favicon.ico",
      favicon32: "img/icons/favicon-32x32.png",
      favicon16: "img/icons/favicon-16x16.png",
      appleTouchIcon: "img/icons/apple-touch-icon.png",
      maskIcon: "img/icons/android-chrome-512x512.png",
      msTileImage: "img/icons/android-chrome-192x192.png",
    },

    manifestOptions: {
      display: "standalone",
      theme_color: "#00bfa9",
      background_color: "#00a1b1",
      icons: [
        {
          src: "img/icons/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
          purpose: "any maskable",
        },
        {
          src: "img/icons/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
          purpose: "any maskable",
        },
        {
          src: "img/icons/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any maskable",
        },
        {
          src: "img/icons/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
  },

  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "./src/assets/styles/_variables.scss";
          @import "./src/assets/styles/_globals.scss";
          `,
      },
    },
  },
}
