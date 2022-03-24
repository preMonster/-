const { name } = require("./package");

module.exports = {
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
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
