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
    msTileColor: "#eeeeee",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "white",

    // configure the workbox plugin
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
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
