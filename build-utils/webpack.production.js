// build_utils/webpack.production.js

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = () => ({
  devtool: 'nosources-source-map',
  output: {
    filename: 'production.js',
  },
  optimization: {
    minimizer: [
      // new UglifyJsPlugin({
      //   cache: true,
      //   parallel: true,
      //   sourceMap: true, // set to true if you want JS source maps for css
      // }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      // {
      //   test: /\.sa?css$/,
      //   use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      // },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './build/index.html',
    }),
  ],
});
