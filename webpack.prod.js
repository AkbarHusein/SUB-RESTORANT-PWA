const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminPngquant = require('imagemin-pngquant');
const ImageminMozjpeg = require('imagemin-mozjpeg');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
        ImageminPngquant({
          quality: [0, 1],
          progressive: true,
        }),
      ],
    }),
    new CleanWebpackPlugin(),
  ],
});
