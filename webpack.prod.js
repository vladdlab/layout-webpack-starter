
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin")
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const zlib = require("zlib")

module.exports = merge(common, {
  mode: 'production',
  devtool: false,

  output: {
    filename: 'js/bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
              modules: false,
            },
          },
          'postcss-loader'
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/main.[contenthash].css',
      chunkFilename: '[id].css',
    }),
    new CompressionPlugin({
      algorithm: "gzip",
    }),
    new CompressionPlugin({
      algorithm: "brotliCompress",
    }),
  ],


  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), '...'],
    runtimeChunk: {
      name: 'runtime',
    },
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
