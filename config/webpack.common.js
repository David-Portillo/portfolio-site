const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Regular expression to match JavaScript files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader to transpile JavaScript files
          options: {
            presets: [
              '@babel/preset-env', // Preset to compile ES6 down to ES5
              ['@babel/preset-react', { runtime: 'automatic' }], // Preset to compile JSX to JavaScript, enabling the new JSX transform
            ],
          },
        },
      },
      {
        test: /\.(jp?g|png|gif|ico|webp)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        oneOf: [
          {
            test: /\.svg$/,
            type: "asset/inline",
            resourceQuery: /inline/,
            loader: "svg-url-loader",
            options: { encoding: "base64" },
          },
          {
            test: /\.svg$/,
            type: "asset/resource",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};
