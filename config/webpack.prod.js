const { merge } = require("webpack-merge");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const commonConfig = require("./webpack.common");

const config = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    chunkFilename: `[id].[name].[contenthash].js`,
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        parallel: true,
        extractComments: "all",
        terserOptions: {
          compress: true,
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
};

module.exports = merge(commonConfig, config);
