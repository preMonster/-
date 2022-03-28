//  会把bootstrap mount unmount这些方法都打包到window.singleVue上

module.exports = {
  configureWebpack: {
    output: {
      library: "singleVue",
      libraryTarget: "umd",
    },
    devServer: {
      port: 10001,
    },
  },
};
