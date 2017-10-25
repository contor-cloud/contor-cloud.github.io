// const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   output: {
    //     comments: false,
    //   }
    // })
  ],
}
