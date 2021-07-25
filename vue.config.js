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
      favicon32: "img/icons/maskable_icon_x32.png",
      favicon16: "img/icons/maskable_icon_x16.png",
      appleTouchIcon: "img/icons/maskable_icon_x192.png",
      maskIcon: "img/icons/maskable_icon_x512.png",
      msTileImage: "img/icons/maskable_icon_x128.png",
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
