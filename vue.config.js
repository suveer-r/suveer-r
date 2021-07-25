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
      favicon: null,
      favicon32: "img/icons/maskable_icon_x32.png",
      favicon16: "img/icons/maskable_icon_x16.png",
      appleTouchIcon: "img/icons/maskable_icon_x192.png",
      maskIcon: "img/icons/maskable_icon_x512.png",
      msTileImage: "img/icons/maskable_icon_x128.png",
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
          purpose: "image/png",
        },
        {
          src: "img/icons/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
          purpose: "image/png",
        },
        {
          src: "img/icons/maskable_icon_x48.png",
          sizes: "48x48",
          type: "image/png",
          purpose: "image/png",
        },
        {
          src: "img/icons/maskable_icon_x72.png",
          sizes: "72x72",
          type: "image/png",
          purpose: "image/png",
        },
        {
          src: "img/icons/maskable_icon_x96.png",
          sizes: "96x96",
          type: "image/png",
          purpose: "any maskable",
        },
        {
          src: "img/icons/maskable_icon_x128.png",
          sizes: "128x128",
          type: "image/png",
          purpose: "any maskable",
        },
        {
          src: "img/icons/maskable_icon_x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any maskable",
        },
        {
          src: "img/icons/maskable_icon_x512.png",
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
