// build_utils/webpack.development.js

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = () => ({
  output: {
    filename: 'development.js',
  },
  module: {
    rules: [
      //   {
      //     test: /\.sa?css$/,
      //     use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      //   },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './build/index.html',
    }),
  ],
});
