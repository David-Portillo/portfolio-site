const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    open: true,
    watchFiles: {
      paths: ["src/**"],
    },
    historyApiFallback: true,
  },
};

module.exports = merge(commonConfig, devConfig);
