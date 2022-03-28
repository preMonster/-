module.exports = {
  publicPath: "././",
  configureWebpack: {
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      port: 20002,
    },
  },
};
