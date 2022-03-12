const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const modeConfiguration = (env) => require(`./build-utils/webpack.${env}`)(env);

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const { UI_PORT, UI_URL } = require('./src/config');
const Dotenv = require('dotenv-webpack');
const optionator = require('optionator');
const WebpackPwaManifest = require('webpack-pwa-manifest');
// const eslintrcFile = require('./eslint.config.js');

// const ESLintPlugin = require('eslint-webpack-plugin');
// const eslintConfPath = path.resolve(__dirname, './eslint.config.js');
// const eslintRc = path.resolve(__dirname, './.eslintrc');
// console.log(eslintConfPath);
// const ESLint = require('eslint');

module.exports = ({ mode } = { mode: 'production' }) => {
  console.log(`mode is: ${mode}`);
  console.log('env===>', UI_PORT);

  return merge(
    {
      mode,
      entry: ['regenerator-runtime/runtime.js', './src/index.js'],
      devServer: {
        hot: true,
        open: true,
        port: UI_PORT,
        historyApiFallback: true, // help to load authenticated page like dashboard on refresh
        proxy: {
          '/api': 'http://localhost:6060',
        },
      },
      output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            // use: ["babel-loader", "eslint-loader"],
          },
          {
            test: /\.css$/i,
            include: path.resolve(__dirname, 'src'),
            exclude: /node_modules/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 0,
                },
              },
            ],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
            exclude: /node_modules/,
            use: ['file-loader?name=[name].[ext]'], // ?name=[name].[ext] is only necessary to preserve the original file name
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: './index.html',
          favicon: './public/favicon.ico',
        }),
        new WebpackPwaManifest(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
          filename: './build/index.html',
        }),
        new InterpolateHtmlPlugin({
          PUBLIC_URL: 'static', // can modify `static` to another name or get it from `process`
        }),
        new Dotenv(),

        // new ESLintPlugin({ eslintPath: eslintConfPath }),
        // new ESLint({ filePath: eslintConfPath }),
        // new ESLintPlugin({ eslintPath: eslintConfPath }),
        // new ESLintPlugin({ eslintPath: eslintRc }),
      ],
    },
    modeConfiguration(mode)
  );
};
