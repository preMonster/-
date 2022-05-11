const { name } = require("./package");

module.exports = {
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      // 需要配置成 umd 规范
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      // webpack5 使用 chunkLoadingGlobal 代替，或不填保证 package.json name 唯一即可
      jsonpFunction: `webpackJsonp_${name}`,
    },
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      port: 10002,
    },
  },
};
