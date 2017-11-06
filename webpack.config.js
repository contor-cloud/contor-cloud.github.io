const webpack = require('webpack')

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
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      { test: /\.yml$/, use: [ 'json-loader', 'yaml-frontmatter-loader' ]},
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      Glamor: 'glamor/react'
    })
    // new webpack.optimize.UglifyJsPlugin({
    //   output: {
    //     comments: false,
    //   }
    // })
  ],
}
